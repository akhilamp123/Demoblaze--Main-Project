import{test,expect} from '@playwright/test'
import { invalidlogincred } from '../test-data/invalidlogincred'
import { InvalidLogin } from '../pages/InvalidLogin'

test('Invalid Login Validation',async({page})=>{
    const invalidcred =new InvalidLogin(page)
    await invalidcred.goto()
    await invalidcred.clickLoginLink()
    await invalidcred.fillInValidCredentials(invalidlogincred.username, invalidlogincred.password)
    //adding assertion
    page.on('dialog', async dialog => {

    expect(dialog.message()).toContain('User does not exist')

    await dialog.accept()
})
    await invalidcred.clickLoginbtn()
})