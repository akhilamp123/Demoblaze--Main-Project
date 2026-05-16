import{Locator,Page} from '@playwright/test'
export class Signup{
    page:Page
    signuplink:Locator
    username:Locator
    password:Locator
    signupbutton:Locator
    constructor(page:Page){
        this.page=page
        this.signuplink=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbutton=page.locator("//button[text()='Sign up']")
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }
    async clickSignUpLink(){
        await this.signuplink.click()
    }
    async signUp(username:string,password:string){ 
        await this.username.fill(username) 
        await this.password.fill(password)
        await this.signupbutton.click()
}
}