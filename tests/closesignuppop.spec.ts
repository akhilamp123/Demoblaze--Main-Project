import{test,expect} from '@playwright/test'
import { usersignup } from '../test-data/logincred'
import { CloseSignup } from '../pages/CloseSignup'


test('Close signup popup',async({page})=>{
    const closesignup= new CloseSignup(page)
    await closesignup.goto()
    await closesignup.clickSignUpLink()
    await closesignup.fillAndClose(usersignup.username, usersignup.password)
    await expect(page).toHaveTitle('STORE')
    
})