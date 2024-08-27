import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page";
import MainPage from "../pageobjects/main.page";
import url = require('../fixtures/url.json');
import validData = require('../fixtures/valid_data.json');
import errorData = require('../fixtures/error_data.json');
import faker from '../Faker/fake_data'

describe("Login ", () => {
    beforeEach(async () => {
        await LoginPage.openLoginPage();
    });

    it("TC_5 Login with valid credentials", async () => {
        await LoginPage.login(validData.email, validData.password);
        await browser.pause(2000);
        const currentURL = await browser.getUrl()
        await expect(currentURL).toContain(url.home);
        const textUserName = await MainPage.userButton.getText();
        await expect(textUserName.trim()).toEqual(validData.name)
        const textSetting = await MainPage.settingButton.getText();
        await expect(textSetting.trim()).toEqual(validData.set_button)
        await expect(MainPage.settingButton).toBeTruthy();
    });

    it("TC_6 Login with invalid credentials", async () => {
        await LoginPage.login(faker.userName, faker.password);
        await browser.pause(2000);
        const currentURL = await browser.getUrl()
        await expect(currentURL).toContain(url.login);
        const errorText = await LoginPage.errorMessage.getText();
        await expect(errorText.trim()).toEqual(errorData.invalidData)
    });

    it("TC_7 Click on 'Need an account?' button", async () => {
        await LoginPage.needAnAccountButton.click()
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(url.register);
    });
});