import{Locator,Page} from '@playwright/test'
export class InvalidPasswordLogin{
    page:Page
    clicklogin:Locator
    username:Locator
    password:Locator
    loginbutton:Locator
    constructor(page:Page){
        this.page=page
        this.clicklogin=page.locator("//a[@id='login2']")
        this.username=page.locator("//input[@id='loginusername']")
        this.password=page.locator("//input[@id='loginpassword']")
        this.loginbutton=page.locator('#logInModal button:has-text("Log in")')
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }
    async clickLoginLink(){
        await this.clicklogin.click()
    }
    async fillInValidCredentials(username:string,password:string){ 
        await this.username.fill(username) 
        await this.password.fill(password)
        await this.loginbutton.click()
}
async clickLoginbtn(){
    await this.loginbutton.click()

}
}