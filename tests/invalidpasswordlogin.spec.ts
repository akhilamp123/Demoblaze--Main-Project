import{test,expect} from '@playwright/test'
import { InvalidPasswordLogin } from '../pages/InvalidPassword'
import { usersignup } from '../test-data/logincred'
import { invalidpassword } from '../test-data/invalidpasswordcred'

test('Invalid Login with password Validation',async({page})=>{
    const invalidpasswordcred =new InvalidPasswordLogin(page)
    await invalidpasswordcred.goto()
    await invalidpasswordcred.clickLoginLink()
    page.on('dialog',async dialog =>{  
    expect (dialog.message()).toBe ('User does not exist.')  
    await dialog.accept()
})
    await invalidpasswordcred.fillInValidCredentials(usersignup.username, invalidpassword.password)
    await invalidpasswordcred.clickLoginbtn()
})