from pathlib import Path
from html.parser import HTMLParser
import json,zipfile
from PIL import Image,ImageDraw,ImageFont
from pypdf import PdfReader

root=Path(__file__).resolve().parent
class InspectHTML(HTMLParser):
    def __init__(self):super().__init__();self.ids=set();self.anchors=[];self.files=[];self.articles=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids,a['id'];self.ids.add(a['id'])
        if tag=='article':self.articles+=1
        if tag=='a':
            h=a.get('href','')
            if h.startswith('#'):self.anchors.append(h[1:])
            elif h and not h.startswith('https://'):self.files.append(h)
        if tag=='img':self.files.append(a['src'])
p=InspectHTML();p.feed((root/'mvp-design.html').read_text(encoding='utf-8'))
assert p.articles==18
assert all(a in p.ids for a in p.anchors)
assert all((root/f).is_file() for f in p.files)
assert zipfile.ZipFile(root/'mvp-design-package.zip').testzip() is None
pages=list(sorted((root/'qa').glob('page-*.png')))
font=ImageFont.truetype('C:/Windows/Fonts/malgun.ttf',17)
for start in range(0,len(pages),12):
    sheet=Image.new('RGB',(1200,1320),'#dce5f0');draw=ImageDraw.Draw(sheet)
    for i,f in enumerate(pages[start:start+12]):
        im=Image.open(f).convert('RGB');im.thumbnail((290,390))
        x=(i%4)*300+5;y=(i//4)*440+30
        sheet.paste(im,(x,y));draw.text((x,y-25),f.stem,font=font,fill='#172b46')
    sheet.save(root/'qa'/f'contact-{start//12+1}.jpg',quality=92)
r=PdfReader(str(root/'mvp-improvement-architecture.pdf'))
summary=[]
for i,page in enumerate(r.pages):
    t=page.extract_text() or ''
    lines=[s for s in t.splitlines() if s.strip()]
    summary.append({'page':i+1,'chars':len(t),'first':lines[2:4]})
(root/'qa'/'page-index.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8')
print('PASS: HTML links, evidence files, unique anchors, 18 issues, ZIP integrity')
print(json.dumps(summary,ensure_ascii=True))
