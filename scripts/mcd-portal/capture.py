import asyncio,json
from playwright.async_api import async_playwright
BASE='https://mcdportaldesign.lovable.app'
OV="""()=>{const out=[];for(const e of document.querySelectorAll('body *')){const s=getComputedStyle(e);if(s.position==='fixed'&&e.closest('header,aside')==null&&e.getBoundingClientRect().width>150&&e.getBoundingClientRect().height>150&&!e.parentElement.closest('[style*=fixed]'))out.push(e.outerHTML)}return out}"""
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium',args=['--no-sandbox'])
        pg=await b.new_page(viewport={'width':1440,'height':900})
        R={}
        async def fresh(route='/'):
            await pg.goto(BASE+route); await pg.wait_for_timeout(2500)
        await fresh()
        for lab in ['IT','HR','Payroll','Facilities','Learning']:
            await fresh(); await pg.locator('aside button',has_text=lab).first.click(); await pg.wait_for_timeout(600)
            R['fly_'+lab]=await pg.evaluate(OV)
        await fresh(); await pg.get_by_text('Provide feedback').first.click(); await pg.wait_for_timeout(600); R['feedback']=await pg.evaluate(OV)
        # tabs card
        for lab in ['My Requests','My Tasks','My Approvals']:
            await fresh(); await pg.get_by_role('button',name=lab,exact=True).first.click(); await pg.wait_for_timeout(500)
            R['tab_'+lab]=await pg.evaluate("(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='My Approvals');let e=b;while(e&&!/bg-card/.test(e.className))e=e.parentElement;return e.outerHTML})()")
        await fresh(); await pg.get_by_role('button',name='Knowledge Articles').click(); await pg.wait_for_timeout(500)
        R['rec_kb']=await pg.evaluate("(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Knowledge Articles');let e=b;while(e&&!/bg-card/.test(e.className))e=e.parentElement;return e.outerHTML})()")
        await fresh(); await pg.get_by_role('button',name='Catalog Items').click(); await pg.wait_for_timeout(500)
        R['rec_cat']=await pg.evaluate("(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Catalog Items');let e=b;while(e&&!/bg-card/.test(e.className))e=e.parentElement;return e.outerHTML})()")
        await fresh(); await pg.locator('header button',has_text='English').first.click(); await pg.wait_for_timeout(500)
        R['lang']=await pg.evaluate("(()=>{const e=[...document.querySelectorAll('*')].find(x=>x.children.length===0&&x.textContent.trim()==='العربية');let m=e;while(m&&!/absolute|fixed/.test(getComputedStyle(m).position))m=m.parentElement;return m?m.outerHTML:''})()")
        await pg.get_by_text('العربية').first.click(); await pg.wait_for_timeout(800); await pg.screenshot(path='cap/arabic.png'); R['dir']=await pg.evaluate("document.documentElement.dir+' '+document.documentElement.lang+' '+document.body.dir")
        # profile
        await fresh('/profile')
        R['prof_default']=await pg.evaluate("(()=>{const t=document.querySelector('.sticky.bg-nav');return t.nextElementSibling.outerHTML})()")
        R['prof_tabbar']=await pg.evaluate("document.querySelector('.sticky.bg-nav').outerHTML")
        for lab in ['Job Data','Employee Relation','Career','Documents']:
            await fresh('/profile'); await pg.get_by_role('button',name=lab,exact=True).click(); await pg.wait_for_timeout(500)
            R['ptab_'+lab]=await pg.evaluate("document.querySelector('.sticky.bg-nav').nextElementSibling.outerHTML")
            R['ptabbar_'+lab]=await pg.evaluate("document.querySelector('.sticky.bg-nav').outerHTML")
        # edit modals
        for lab in ['Edit banner','Change photo','Edit Information','Edit My Contacts','Edit My Addresses','Edit Emergency Contacts','Edit My Dependents','Edit Payment Information']:
            await fresh('/profile'); await pg.locator(f'button[aria-label="{lab}"]').first.click(); await pg.wait_for_timeout(600)
            R['modal_'+lab]=await pg.evaluate(OV)
        json.dump(R,open('cap/cap.json','w'))
        for k,v in R.items(): print(k, (len(v) if not isinstance(v,list) else [len(x) for x in v]))
        await b.close()
asyncio.run(main())
