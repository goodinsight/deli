"""Fill observed CSS gaps using other captured sheets, then sampled computed styles.
Computed fallbacks are explicitly recorded; they are not original author CSS.
"""
from pathlib import Path
import json,re,collections,html
R=Path(__file__).resolve().parent
def rules(text):
 depth=0;quote=None;comment=False;escape=False;start=0;i=0
 while i<len(text):
  c=text[i]
  if comment:
   if text[i:i+2]=='*/':comment=False;i+=2;continue
  elif quote:
   if escape:escape=False
   elif c=='\\':escape=True
   elif c==quote:quote=None
  elif text[i:i+2]=='/*':comment=True;i+=2;continue
  elif c in ('\"',"'"):quote=c
  elif c=='{':depth+=1
  elif c=='}':
   depth=max(depth-1,0)
   if depth==0:yield text[start:i+1];start=i+1
  elif c==';' and depth==0:yield text[start:i+1];start=i+1
  i+=1
index=collections.defaultdict(list)
for p in (R/'styles').glob('*.css'):
 for rule in rules(p.read_text(encoding='utf8')):
  for cls in set(re.findall(r'\.(css-[a-z0-9]+)\b',rule)):
   if rule not in index[cls]:index[cls].append(rule)
doms=json.loads((R/'dom-manifest.json').read_text(encoding='utf8'))
coverage=[]
for state in sorted(set(d['state'] for d in doms)):
 fragments=[d for d in doms if d['state']==state]
 classes=set(re.findall(r'\bcss-[a-z0-9]+\b',''.join((R/d['html']).read_text(encoding='utf8') for d in fragments)))-{'css-0'}
 csspath=R/'styles'/(state+'.css');css=csspath.read_text(encoding='utf8')
 defined=set(re.findall(r'\.(css-[a-z0-9]+)\b',css));missing=classes-defined
 recovered=sorted(c for c in missing if c in index)
 extra=list(dict.fromkeys(rule for c in recovered for rule in index[c]))
 if extra:css+='\n/* Supplemental original CSS rules observed in other captured states. */\n'+'\n'.join(extra)
 remaining=missing-set(recovered);computed=[]
 structure=json.loads((R/'structure'/(state+'.json')).read_text(encoding='utf8'))
 for row in structure['computed']:
  for cls in re.findall(r'\bcss-[a-z0-9]+\b',row['classes']):
   if cls not in remaining:continue
   styles={k:v for k,v in row['styles'].items() if v and 'url(' not in v}
   css+='\n/* Derived from sampled computed styles, not original author CSS. */\n.'+cls+' {'+';'.join(k+':'+v for k,v in styles.items())+'}\n'
   computed.append(cls);remaining.remove(cls)
 csspath.write_text(css,encoding='utf8')
 coverage.append({'state':state,'observedHashClasses':len(classes),'recoveredOriginalRulesFor':recovered,'computedFallbackFor':computed,'unresolvedClasses':sorted(remaining)})
(R/'style-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2),encoding='utf8')
pending=[x for x in coverage if x['unresolvedClasses']]
notice='<section><h2>미리보기 CSS 검증 범위</h2><p>고객 등록 폼과 카탈로그는 브라우저에서 표시를 확인했습니다. 다른 화면은 DOM·CSS 파일 연결과 선택자 커버리지를 정적으로 확인했습니다. 화면마다 생성 시점이 다른 스타일은 다른 캡처의 원본 규칙을 보충했고, 일부는 기록된 computed 스타일에서 재구성했습니다.</p><p>메일·근태 보고서·결재 등 일부 화면에는 여전히 대응 CSS를 확보하지 못한 클래스가 있습니다. 따라서 DOM 미리보기 전체를 원본과 픽셀 단위로 동일하다고 보장하지 않습니다. 해당 구현 코드는 배포 JS에 포함되어 있습니다.</p><p><a href="style-coverage.json">화면별 CSS 보충·미확보 목록</a></p><ul>'+''.join('<li>'+html.escape(x['state'])+': 미확보 '+str(len(x['unresolvedClasses']))+'개 클래스</li>' for x in pending)+'</ul></section>'
for name in ('index.html','dom-gallery.html'):
 p=R/name;s=p.read_text(encoding='utf8');s=s.replace('</main>',notice+'</main>');p.write_text(s,encoding='utf8')
print(json.dumps({'states':len(coverage),'recoveredClasses':sum(len(x['recoveredOriginalRulesFor']) for x in coverage),'computedFallbacks':sum(len(x['computedFallbackFor']) for x in coverage),'statesWithUnresolvedStyles':len(pending),'unresolvedClassOccurrences':sum(len(x['unresolvedClasses']) for x in coverage)}))
