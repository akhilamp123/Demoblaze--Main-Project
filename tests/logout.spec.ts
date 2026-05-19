import{test,expect} from '@playwright/test'
import { usersignup } from '../test-data/logincred'
import { ValidLogin } from '../pages/ValidLogin'
import { Logout } from '../pages/Logout'

test('Logout from demoblaze',async({page})=>{
    const logout =new Logout(page)
    await logout.goto()
    await logout.clickLoginLink()
    await logout.fillValidCredentials(usersignup.username, usersignup.password)
    await logout.clickLoginbtn()
    await logout.clickLogout()
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})