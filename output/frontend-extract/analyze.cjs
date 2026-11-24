// Static analysis only: downloaded code is parsed as text, never loaded/executed.
const fs=require('node:fs'), path=require('node:path');
const root=__dirname;
const babel=require(process.env.BABEL_BUNDLE || 'C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1112-611-0_26.1112.611.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright/lib/transform/babelBundle.js');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'asset-manifest.json'),'utf8'));
const modules=[],errors=[];
function walk(n,cb){if(!n||typeof n!=='object')return;if(n.type)cb(n);for(const [k,v] of Object.entries(n)){if(['loc','start','end','extra','comments','tokens'].includes(k))continue;if(Array.isArray(v))v.forEach(x=>walk(x,cb));else if(v&&typeof v==='object')walk(v,cb)}}
for(const asset of manifest.filter(a=>a.kind==='script'&&a.path)){
 const source=fs.readFileSync(path.join(root,asset.path),'utf8');
 try{
  const ast=babel.babelParse(source,asset.path,true), imports=[],exports=[],strings=[],props=[];
  walk(ast,n=>{
   if(n.type==='ImportDeclaration'||n.type==='ExportAllDeclaration'||(n.type==='ExportNamedDeclaration'&&n.source))imports.push({specifier:n.source.value,type:'static',bindings:(n.specifiers||[]).map(s=>({local:s.local?.name,imported:s.imported?.name||s.imported?.value||s.type}))});
   if(n.type==='CallExpression'&&n.callee?.type==='Import'&&n.arguments[0]?.type==='StringLiteral')imports.push({specifier:n.arguments[0].value,type:'dynamic'});
   if(n.type==='ExportNamedDeclaration'){for(const s of n.specifiers||[])exports.push({local:s.local?.name,exported:s.exported?.name||s.exported?.value});}
   if(n.type==='ExportDefaultDeclaration')exports.push({exported:'default',local:n.declaration?.name||n.declaration?.id?.name||null});
   if(n.type==='StringLiteral'&&n.value.length<180)strings.push(n.value);
   if(['FunctionDeclaration','ArrowFunctionExpression','FunctionExpression'].includes(n.type)&&n.params?.[0]?.type==='ObjectPattern')props.push({function:n.id?.name||null,keys:n.params[0].properties.map(p=>p.key?.name||p.key?.value).filter(Boolean)});
  });
  const rel=asset.path.replace(/^assets\//,'');
  const pretty=babel.babelTransform(source,asset.path,true,[],[]).code.replace(/\n\/\/# sourceMappingURL=data:[^\n]*/g,'');
  const dest=path.join(root,'formatted',rel);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,pretty);
  const dependencies=imports.map(i=>({...i,resolved:i.specifier.startsWith('.')?path.posix.normalize(path.posix.join(path.posix.dirname(asset.path),i.specifier)):null}));
  const name=path.basename(rel).replace(/-[A-Za-z0-9_-]{8}\.js$/,'');
  const kind=/^(ko|en)$/.test(name)?'locale':/Api$|Controller$|Store$|^(attendanceMgmt|attendanceBio|biometricController|bookingApi|bootstrapController)$/.test(name)?'data':/^[A-Z]/.test(name)?(/Outlined$|^(FavoriteBorder|StarBorder|Keyboard.*|LabelOff)$/.test(name)?'icon':'ui'):'utility-or-runtime';
  modules.push({...asset,name,kind,formatted:'formatted/'+rel,imports:dependencies,exports,destructuredParameters:props,sourceMapReferences:[...source.matchAll(/sourceMappingURL=([^\s*]+)/g)].map(m=>m[1]),strings:[...new Set(strings)].filter(s=>/@mui|@emotion|styled-components|i18next|dnd-kit|zustand|react-router|React Router|^\d+\.\d+\.\d+$|ehfuse|\bvite\b/i.test(s)).slice(0,80)});
 }catch(e){errors.push({path:asset.path,error:String(e)})}
}
const known=new Set(modules.map(m=>m.path));
for(const m of modules){m.missingDependencies=m.imports.filter(i=>i.resolved&&!fs.existsSync(path.join(root,i.resolved))).map(i=>i.resolved);m.importedBy=modules.filter(x=>x.imports.some(i=>i.resolved===m.path)).map(x=>x.name)}
fs.writeFileSync(path.join(root,'module-manifest.json'),JSON.stringify(modules,null,2));
fs.writeFileSync(path.join(root,'analysis-checks.json'),JSON.stringify({parsed:modules.length,errors,sourceMapReferences:modules.flatMap(m=>m.sourceMapReferences.map(url=>({source:m.path,url}))),missingDependencies:[...new Set(modules.flatMap(m=>m.missingDependencies))]},null,2));
console.log(JSON.stringify({parsed:modules.length,errors,ui:modules.filter(m=>m.kind==='ui').map(m=>m.name),missingCount:[...new Set(modules.flatMap(m=>m.missingDependencies))].length},null,2));
