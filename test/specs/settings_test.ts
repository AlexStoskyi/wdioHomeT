import { expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";
import LoginPage from "../pageobjects/login.page";
import SettingsPage from "../pageobjects/settings.page";
import ArticlePage from "../pageobjects/article.page";
import url = require('../fixtures/url.json');
import validData = require('../fixtures/valid_data.json');
import invalidData = require('../fixtures/invalid_data.json');
import errorData = require('../fixtures/error_data.json');
import faker from '../Faker/fake_data';



describe("Article", () => {
    beforeEach(async () => {
        await LoginPage.openLoginPage();
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 10000, // максимальний час очікування в мілісекундах
                timeoutMsg: 'Сторінка не завантажилася за очікуваний час'
            }
        );
        await LoginPage.login(validData.email, validData.password);
    })


    it("TC_16 Click on 'Settings' button", async () => {
        await browser.pause(2000);
        await MainPage.settingButton.click();
        await browser.pause(1000);
        const settingsText = await SettingsPage.yourSettingsText.getText();
        await expect(settingsText.trim()).toEqual(validData.settings)
    });

});