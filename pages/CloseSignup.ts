import{Locator,Page} from '@playwright/test'
export class CloseSignup{
    page:Page
    signuplink:Locator
    username:Locator
    password:Locator
    closebutton:Locator
    constructor(page:Page){
        this.page=page
        this.signuplink=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.closebutton=page.locator('#signInModal button:has-text("Close")')
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }
    async clickSignUpLink(){
        await this.signuplink.click()
    }
    async fillAndClose(username:string,password:string){ 
        await this.username.fill(username) 
        await this.password.fill(password)
        await this.closebutton.click()
}
}