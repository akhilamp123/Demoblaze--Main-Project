import{test,expect} from '@playwright/test'
import { orderdetail } from '../test-data/orderdetails'
import { AddMonitortoCart } from '../pages/AddMonitor'
import { usersignup } from '../test-data/logincred'


test('Add monitor to cart',async({page})=>{
    const addmonitortocart =new AddMonitortoCart(page)
    await addmonitortocart.goto()
    await addmonitortocart.clickLoginLink()
    await addmonitortocart.fillValidCredentials(usersignup.username, usersignup.password)
    await addmonitortocart.clickLoginbtn()
    await addmonitortocart.clickCategoryPhone()
    await addmonitortocart.clickItem()
        page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('Product added.')  
    await dialog.accept()
})
    await addmonitortocart.clickAddToCart()
    await addmonitortocart.clickCart()
    await addmonitortocart.clickPlaceOrder()
    await addmonitortocart.fillOrderDetails(orderdetail.name,orderdetail.country,orderdetail.City,orderdetail.creditcard, orderdetail.month,orderdetail.year)
    page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('Thank you for ypur purchase!')  
    await dialog.accept()
})
    await addmonitortocart.clickPurchaseButton()

})