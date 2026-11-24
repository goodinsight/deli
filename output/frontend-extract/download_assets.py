"""Download only observed same-origin static assets; never execute them."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor,as_completed
import json,hashlib,shutil

ROOT=Path(__file__).resolve().parent
assets={}
previous=ROOT/'asset-manifest.json'
if previous.exists():
    for a in json.loads(previous.read_text(encoding='utf8')):
        if a.get('url') and a.get('kind') in ('script','stylesheet','font'):assets[a['url']]=a
for file in (ROOT/'evidence').glob('assets-*.json'):
    obj=json.loads(file.read_text(encoding='utf-8'))
    for a in obj.get('assets',[]):
        url=a.get('url','');p=urlparse(url)
        if a.get('kind') in ('script','stylesheet','font') and p.scheme=='https' and p.netloc=='work-test.elimsafety.com' and p.path.endswith(('.js','.css','.woff','.woff2','.ttf')):
            assets[url]=a
results=[]
def download(item):
    url,a=item;p=urlparse(url);dest=ROOT/'assets'/p.path.lstrip('/')
    dest.parent.mkdir(parents=True,exist_ok=True)
    try:
        if dest.exists():data=dest.read_bytes();status='cached'
        else:
            with urlopen(Request(url,headers={'User-Agent':'ComponentInventory/1.0'}),timeout=25) as response:
                if urlparse(response.url).netloc!='work-test.elimsafety.com':raise ValueError('Unexpected cross-origin redirect')
                data=response.read(12*1024*1024+1)
                if len(data)>12*1024*1024:raise ValueError('Size limit')
                if b'<html' in data[:300].lower():raise ValueError('HTML response instead of static asset')
            dest.write_bytes(data);status='downloaded'
        return {'url':url,'path':str(dest.relative_to(ROOT)).replace('\\','/'),'name':a.get('name'), 'kind':a['kind'],'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'status':status}
    except Exception as e:return {'url':url,'kind':a.get('kind'),'status':'failed','error':str(e)}
with ThreadPoolExecutor(max_workers=4) as pool:
    for future in as_completed([pool.submit(download,a) for a in assets.items()]):results.append(future.result())
bundlefile=ROOT/'evidence'/'assets-bundle.json'
if bundlefile.exists():
    bundle=json.loads(bundlefile.read_text(encoding='utf-8'))
    for a in bundle.get('assets',[]):
        src=Path(a['path'])
        if src.exists():
            dest=ROOT/'assets'/'bundled'/src.name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,dest)
            if not any(r['url']==a['url'] and r['status']!='failed' for r in results):
                raw=dest.read_bytes();results.append({'url':a['url'],'path':str(dest.relative_to(ROOT)).replace('\\','/'),'name':a.get('name'),'kind':a['kind'],'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'status':'bundled'})
results.sort(key=lambda x:x['url'])
(ROOT/'asset-manifest.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'observed_static_urls':len(assets),'saved':sum(r['status']!='failed' for r in results),'failed':[r for r in results if r['status']=='failed'],'bytes':sum(r.get('bytes',0) for r in results)},ensure_ascii=True))
