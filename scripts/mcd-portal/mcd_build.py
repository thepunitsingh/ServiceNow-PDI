exec(open('mcd.py').read())
import re,base64,mimetypes
L='lov/'
# 1 theme
th=upsert("sp_theme","name=McDonald's Employee Theme",{"name":"McDonald's Employee Theme","css_variables":call("GET","/api/now/table/sp_theme/ee2e485f9c0b5250f877097911a1a148?sysparm_fields=css_variables")["result"]["css_variables"]})
# 2 css
css=open(L+'styles-COuwaa9r.css').read()
css+="\n.mcd-root{font-family:Speedee,'Helvetica Neue',Arial,sans-serif}body{background:oklch(97.8% .002 90)}\n"
cs=upsert("sp_css","name=McDonald's Employee Portal CSS",{"name":"McDonald's Employee Portal CSS","css":css,"source":"local"})
if not find("m2m_sp_theme_css",f"sp_theme={th}^sp_css={cs}"):
    print(call("POST","/api/now/table/m2m_sp_theme_css",{"sp_theme":th,"sp_css":cs}))
# 3 widget shell
h=open(L+'index.html').read()
body=re.search(r'<body[^>]*>(.*)</body>',h,re.S).group(1)
body=re.sub(r'<script.*?</script>','',body,flags=re.S)
wid=upsert("sp_widget","id=mcd_home_widget",{"id":"mcd_home_widget","name":"McDonald's Home","template":"<div></div>","css":"","script":"(function(){})();","client_script":"function(){}"})
# 4 attachments
urls={}
for f in sorted(os.listdir(L)):
    if f.endswith(('.jpg','.png')) and f!='favicon.png':
        d=curl(["-X","POST","-H","Content-Type: "+mimetypes.guess_type(f)[0],"-H","Accept: application/json",
         f"{B}/api/now/attachment/file?table_name=sp_widget&table_sys_id={wid}&file_name={f}","--data-binary","@"+L+f])
        sid=json.loads(d)["result"]["sys_id"]; urls[f]=f"/sys_attachment.do?sys_id={sid}"
print(urls)
def rewrite(m):
    name=m.group(2).split('/')[-1]
    key=next((k for k in urls if k.split('-')[0]==name.split('-')[0].split('.')[0]),None)
    return m.group(1)+(urls[key] if key else m.group(2))+'"'
body=re.sub(r'((?:src|href)=")(/[^"]*\.(?:jpg|png))"',rewrite,body)
body=re.sub(r'srcSet="[^"]*"','',body)
tmpl='<div class="mcd-root">'+body+'</div>'
call("PATCH",f"/api/now/table/sp_widget/{wid}",{"template":tmpl})
# 5 page
pg=upsert("sp_page","id=mcd_home",{"id":"mcd_home","title":"McDonald's Home","internal":"false","public":"false"})
if not find("sp_container",f"sp_page={pg}"):
    c=call("POST","/api/now/table/sp_container",{"sp_page":pg,"width":"container-fluid","order":"1"})["result"]["sys_id"]
    r=call("POST","/api/now/table/sp_row",{"sp_container":c,"order":"1"})["result"]["sys_id"]
    col=call("POST","/api/now/table/sp_column",{"sp_row":r,"size":"12","order":"1"})["result"]["sys_id"]
    call("POST","/api/now/table/sp_instance",{"sp_widget":wid,"sp_column":col,"order":"1"})
# 6 portal
po=upsert("sp_portal","url_suffix=mcd",{"title":"McDonald's Employee Service Portal","url_suffix":"mcd","theme":th,"homepage":pg,
  "quick_start_config":call("GET","/api/now/table/sp_portal/70cd9f3b734b13001fdae9c54cf6a72f?sysparm_fields=quick_start_config")["result"]["quick_start_config"]})
print("theme",th,"widget",wid,"page",pg,"portal",po)
