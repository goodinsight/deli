from pathlib import Path
from html.parser import HTMLParser
import zipfile

root=Path(__file__).resolve().parent
class Parser(HTMLParser):
    def __init__(self):
        super().__init__();self.tags=[];self.images=[];self.ids=set();self.anchors=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs);self.tags.append(tag)
        if tag=='img':self.images.append(a['src'])
        if 'id' in a:self.ids.add(a['id'])
        if tag=='a' and a.get('href','').startswith('#'):self.anchors.append(a['href'][1:])
p=Parser();p.feed((root/'screen-guide.html').read_text(encoding='utf-8'))
assert p.tags.count('article')==138
assert p.tags.count('section')==13
assert len(p.images)==138
assert all((root/f).is_file() for f in p.images)
assert all(x in p.ids for x in p.anchors)
assert zipfile.ZipFile(root/'service-screen-review.zip').testzip() is None
print('PASS: 138 screen cards, 13 sections, image files, anchor links, ZIP integrity')
