import{test,expect} from '@playwright/test'
import { usersignup } from '../test-data/logincred'
import { ValidLogin } from '../pages/ValidLogin'

test('Valid Login Validation',async({page})=>{
    const validcred =new ValidLogin(page)
    await validcred.goto()
    await validcred.clickLoginLink()
    await validcred.fillValidCredentials(usersignup.username, usersignup.password)
    await validcred.clickLoginbtn()
})