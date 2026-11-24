from pathlib import Path
from urllib.parse import urlparse,unquote
from lxml import html
import json,hashlib,re,zipfile,datetime
R=Path(__file__).resolve().parent
errors=[];assets=json.loads((R/'asset-manifest.json').read_text(encoding='utf8'))
mods=json.loads((R/'module-manifest.json').read_text(encoding='utf8'))
for a in assets:
 p=R/a['path']
 if not p.exists() or hashlib.sha256(p.read_bytes()).hexdigest()!=a['sha256']:errors.append('asset mismatch: '+a['path'])
for m in mods:
 if not (R/m['formatted']).exists():errors.append('missing formatted: '+m['path'])
 for d in m['imports']:
  p=d.get('resolved')
  if p and not (R/p).exists() and not re.match('(de|fr|it|ja|vi|zh)-',Path(p).name):errors.append('missing import: '+p)
htmlfiles=[R/'index.html',R/'dom-gallery.html',R/'all-modules.html',*(R/'components').glob('*/index.html'),*(R/'previews').glob('*.html')]
for p in htmlfiles:
 doc=html.fromstring(p.read_text(encoding='utf8'))
 for href in doc.xpath('//@href|//@src'):
  u=urlparse(href)
  if u.scheme or u.netloc or not u.path:continue
  if not (p.parent/unquote(u.path)).exists():errors.append('broken local link: '+str(p.relative_to(R))+' '+href)
for p in (R/'dom').glob('*.html'):
 doc=html.fromstring(p.read_text(encoding='utf8'))
 if doc.xpath('.//script|.//iframe|.//*[@action]|.//*[@formaction]|.//input[@value]'):errors.append('active DOM: '+p.name)
 for x in doc.iter():
  for k,v in x.attrib.items():
   if k.startswith('on'):errors.append('handler: '+p.name)
   if k in ('src','href') and re.match('https?://',v):errors.append('external DOM target: '+p.name)
summary={'checkedAssets':len(assets),'checkedModules':len(mods),'checkedHtmlFiles':len(htmlfiles),'checkedDomFragments':len(list((R/'dom').glob('*.html'))),'errors':errors,'portableJsx':'see portable-checks.json','runtimeExecution':'not performed','generatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()}
(R/'validation.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf8')
if errors:print(json.dumps(summary,ensure_ascii=True));raise SystemExit(1)
include={'README.txt','index.html','dom-gallery.html','all-modules.html','asset-manifest.json','module-manifest.json','component-manifest.json','dom-manifest.json','package-evidence.json','summary.json','analysis-checks.json','validation.json','portable-checks.json','analyze.cjs','build_catalog.py','verify_package.py','download_assets.py','collect_references.py'}
include.update({'style-coverage.json','supplement_styles.py'})
dirs={'formatted','components','portable','dom','styles','structure','previews'}
assetpaths={a['path'] for a in assets}
files=[p for p in R.rglob('*') if p.is_file() and (p.relative_to(R).as_posix() in include or p.relative_to(R).parts[0] in dirs or p.relative_to(R).as_posix() in assetpaths)]
dest=R/'frontend-component-kit.zip'
with zipfile.ZipFile(dest,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in files:z.write(p,p.relative_to(R))
with zipfile.ZipFile(dest) as z:
 assert z.testzip() is None
 assert not any(n.startswith('evidence/') for n in z.namelist())
print(json.dumps({**summary,'archiveFiles':len(files),'archiveBytes':dest.stat().st_size},ensure_ascii=True))
