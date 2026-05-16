import{Locator,Page} from '@playwright/test'
export class AddtoCart{
    page:Page
    clicklogin:Locator
    username:Locator
    password:Locator
    loginbutton:Locator
    selectitem:Locator
    addtocart:Locator
    constructor(page:Page){
        this.page=page
        this.clicklogin=page.locator("//a[@id='login2']")
        this.username=page.locator("//input[@id='loginusername']")
        this.password=page.locator("//input[@id='loginpassword']")
        this.loginbutton=page.locator('#logInModal button:has-text("Log in")')
        this.selectitem=page.locator("//a[text()='Samsung galaxy s6']")
        this.addtocart=page.locator("//a[@class='btn btn-success btn-lg']")
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }
    async clickLoginLink(){
        await this.clicklogin.click()
    }
    async fillValidCredentials(username:string,password:string){ 
        await this.username.fill(username) 
        await this.password.fill(password)
        await this.loginbutton.click()
}
async clickLoginbtn(){
    await this.loginbutton.click()

}

async clickItem(){
    await this.selectitem.click()
}
async clickAddToCart(){
    await this.addtocart.click()
}

}