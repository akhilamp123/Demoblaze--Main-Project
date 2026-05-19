import{test,expect} from '@playwright/test'
import { invalidusername } from '../test-data/invalidusernamecred'
import { usersignup } from '../test-data/logincred'
import { InvalidUsernameLogin } from '../pages/InvalidUsernameLogin'

test('Invalid Login with username  Validation',async({page})=>{
    const invalidusernamecred =new InvalidUsernameLogin(page)
    await invalidusernamecred.goto()
    await invalidusernamecred.clickLoginLink()
    await invalidusernamecred.fillInValidCredentials(invalidusername.username, usersignup.password)
    //adding assertion
    page.on('dialog', async dialog => {

    expect(dialog.message()).toContain('User does not exist')

    await dialog.accept()
})
    await invalidusernamecred.clickLoginbtn()
    
})