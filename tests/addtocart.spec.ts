import{test,expect} from '@playwright/test'
import { usersignup } from '../test-data/logincred'
import { AddtoCart } from '../pages/AddToCart'

test('Add an item to cart',async({page})=>{
    const additemtocart =new AddtoCart(page)
    await additemtocart.goto()
    await additemtocart.clickLoginLink()
    await additemtocart.fillValidCredentials(usersignup.username, usersignup.password)
    await additemtocart.clickLoginbtn()
    await additemtocart.clickItem()
        page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('Product added.')  
    await dialog.accept()
})
    await additemtocart.clickAddToCart()
})