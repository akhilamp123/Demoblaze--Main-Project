import{test,expect} from '@playwright/test'
import { orderdetail } from '../test-data/orderdetails'
import { AddPhntoCart } from '../pages/AddPhone'
import { usersignup } from '../test-data/logincred'


test('Add phone to cart',async({page})=>{
    const addphntocart =new AddPhntoCart(page)
    await addphntocart.goto()
    await addphntocart.clickLoginLink()
    await addphntocart.fillValidCredentials(usersignup.username, usersignup.password)
    await addphntocart.clickLoginbtn()
    await addphntocart.clickCategoryPhone()
    await addphntocart.clickItem()
        page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('Product added.')  
    await dialog.accept()
})
    await addphntocart.clickAddToCart()
    await addphntocart.clickCart()
    await addphntocart.clickPlaceOrder()
    await addphntocart.fillOrderDetails(orderdetail.name,orderdetail.country,orderdetail.City,orderdetail.creditcard, orderdetail.month,orderdetail.year)
    page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('Thank you for ypur purchase!')  
    await dialog.accept()
})
    await addphntocart.clickPurchaseButton()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')

})