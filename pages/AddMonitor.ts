import{Locator,Page} from '@playwright/test'
export class AddMonitortoCart{
    page:Page
    clicklogin:Locator
    username:Locator
    password:Locator
    loginbutton:Locator
    selectcategorymonitor:Locator
    selectitem:Locator
    addtocart:Locator
    cart:Locator
    placeorder:Locator
    name:Locator
    country:Locator
    city:Locator
    creditcard:Locator
    month:Locator
    year:Locator
    purchasebutton:Locator
    constructor(page:Page){
        this.page=page
        this.clicklogin=page.locator("//a[@id='login2']")
        this.username=page.locator("//input[@id='loginusername']")
        this.password=page.locator("//input[@id='loginpassword']")
        this.loginbutton=page.locator('#logInModal button:has-text("Log in")')
        this.selectcategorymonitor=page.locator("//a[text()='Monitors']")
        this.selectitem=page.locator("//a[text()='Apple monitor 24']")
        this.addtocart=page.locator("//a[@class='btn btn-success btn-lg']")
        this.cart=page.locator("//a[@id='cartur']")
        this.placeorder=page.locator("//button[@class='btn btn-success']")
        this.name=page.locator("//input[@id='name']")
        this.country=page.locator("//input[@id='country']")
        this.city=page.locator("//input[@id='city']")
        this.creditcard=page.locator("//input[@id='card']")
        this.month=page.locator("//input[@id='month']")
        this.year=page.locator("//input[@id='year']")
        this.purchasebutton=page.locator("//button[text()='Purchase']")
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

async clickCategoryPhone(){
    await this.selectcategorymonitor.click()
}
async clickItem(){
    await this.selectitem.click()
}

async clickAddToCart(){
    await this.addtocart.click()
}
async clickCart(){
    await this.cart.click()
}
async clickPlaceOrder(){
    await this.placeorder.click()
}
async fillOrderDetails(Name:string,Country:string,City:string,CreditCard:string,Month:string,Year:string){
    await this.name.fill(Name)
    await this.country.fill(Country)
    await this.city.fill(City)
    await this.creditcard.fill(CreditCard)
    await this.month.fill(Month)
    await this.year.fill(Year)
}
async clickPurchaseButton(){
    await this.purchasebutton.click()
}

}