import re
css=open('lov/styles-COuwaa9r.css').read()
doc=open('mcd_doc.html').read()
body=doc[doc.index('<body'):]
hdr=re.search(r'<header\b.*?</header>',body,re.S).group(0)
aside=re.search(r'<aside\b.*?</aside>',body,re.S).group(0)
foot=re.search(r'<footer\b.*?</footer>',body,re.S).group(0)
used=set()
for part in (hdr,aside,foot):
    for m in re.finditer(r'class="([^"]*)"',part): used.update(m.group(1).split())
def esc(c): return re.sub(r'([^a-zA-Z0-9_-])',r'\\\1',c)
usedesc={esc(c) for c in used}
def split(s):
    out=[];d=0;st=0;q=None
    for i,ch in enumerate(s):
        if ch=='{':d+=1
        elif ch=='}':
            d-=1
            if d==0: out.append(s[st:i+1]);st=i+1
        elif ch==';' and d==0: out.append(s[st:i+1]);st=i+1
    return out
def sel_ok(sel):
    return any(re.search(r'\.'+re.escape(c)+r'(?![\w-])',sel) for c in usedesc)
def prefix(sel):
    out=[]
    for p in sel.split(','):
        p=p.strip()
        m=re.match(r'(\.theme-\w+)(\s.*)',p)
        out.append(m.group(1)+' .mcd-shell'+m.group(2) if m else '.mcd-shell '+p)
    return ','.join(out)
res=[]
themevars=[]
def walk(s):
    kept=[]
    for r in split(s):
        r=r.strip()
        if not r: continue
        if r.startswith('@layer') or r.startswith('@media') or r.startswith('@supports'):
            if '{' not in r: continue
            head,inner=r.split('{',1);inner=inner[:-1]
            k=walk(inner)
            if head.startswith('@media'): k=re.sub(r'(\.mcd-shell [^{}]*?)\{',lambda m:m.group(1).replace(',',':not(#_),')+':not(#_){',k)
            if k: kept.append(k if head.startswith('@layer') else head+'{'+k+'}')
        elif r.startswith('@property') or r.startswith('@font-face') or r.startswith('@keyframes') or r.startswith('@charset') or r.startswith('@import'):
            if r.startswith('@property'): kept.append(r)
        elif r.startswith('@'): continue
        else:
            sel,decl=r.split('{',1)
            if ':root' in sel or ':host' in sel:
                if '--radius' in decl: continue
                kept.append('.mcd-shell{'+decl); continue
            mt=re.match(r'^\.theme-(\w+)$',sel.strip())
            if mt:
                continue
            if '.theme-' in sel: continue
            if sel_ok(sel): kept.append(prefix(sel)+'{'+decl)
    return ''.join(kept)
out=walk(css)
# hand reset
reset='''.mcd-shell,.mcd-shell *{box-sizing:border-box}.mcd-shell{font-family:Speedee,"Helvetica Neue",Arial,sans-serif;line-height:1.5}
.mcd-shell button{background:none;border:0;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;text-align:inherit}
.mcd-shell a{color:inherit;text-decoration:none}.mcd-shell img,.mcd-shell svg{display:block;max-width:none}.mcd-shell p{margin:0}
.mcd-shell header,.mcd-shell aside,.mcd-shell footer{margin:0;padding-top:0}
'''
import re as _re
out=_re.sub(r'\(width\s*>=\s*([^)]+)\)',r'(min-width:\1)',out)
out=_re.sub(r'\(width\s*<\s*([^)]+)\)',r'(max-width:\1)',out)
def _px(m):
    v=float(m.group(1))*16
    return ('%g'%v)+'px'
out=_re.sub(r'(-?[\d.]*\d)rem',_px,out)
reset+='.mcd-shell header nav,.mcd-shell aside button{flex:none}.mcd-shell aside button{width:100%}\n'
open('shell.css','w').write(reset+out)
open('shell_header.html','w').write('<div class="mcd-shell" ng-if="!c.isHome">'+hdr+aside+'</div>')
open('shell_footer.html','w').write('<div class="mcd-shell" ng-if="!c.isHome">'+foot.replace('<footer class="bg-nav mt-10"','<footer class="bg-nav mt-10"')+'</div>')
print(len(out),len(hdr),len(aside),len(foot))
print(re.findall(r'--color-[a-z-]+:[^;]+',out)[:12])
