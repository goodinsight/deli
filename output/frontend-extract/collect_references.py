"""Add explicit import references from parsed bundles; no guessed URLs."""
import json,re
from pathlib import Path
from urllib.parse import urljoin
root=Path(__file__).resolve().parent
modules=json.loads((root/'module-manifest.json').read_text(encoding='utf8'))
assets={}
for mod in modules:
    for dep in mod['imports']:
        resolved=dep.get('resolved')
        if not resolved:continue
        # Additional language packs are recorded as optional, not downloaded.
        if re.match(r'^(de|fr|it|ja|vi|zh)-',Path(resolved).name):continue
        if not resolved.endswith('.js'):continue
        url=urljoin(mod['url'],dep['specifier'])
        assets[url]={'url':url,'kind':'script','name':Path(resolved).name,'sources':[{'kind':'explicit-import','source':mod['path'],'specifier':dep['specifier']}]}
(root/'evidence'/'assets-references.json').write_text(json.dumps({'assets':list(assets.values())},indent=2),encoding='utf8')
print(json.dumps({'explicit_import_files':len(assets)}))
