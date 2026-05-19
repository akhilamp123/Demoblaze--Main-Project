import{test,expect} from '@playwright/test'
import { Signup } from '../pages/Signup'
import { usersignup } from '../test-data/logincred'

test('demoblaze signup',async({page})=>{
    const signup =new Signup(page)
    await signup.goto()
    await signup.clickSignUpLink()
    await signup.signUp(usersignup.username, usersignup.password)
    await expect(page).toHaveTitle('STORE')
})