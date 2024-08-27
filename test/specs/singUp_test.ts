import { expect } from "@wdio/globals";
import Faker from '../Faker/fake_data'
import SingUpPage from "../pageobjects/singup.page";
import MainPage from "../pageobjects/main.page";
import url = require('../fixtures/url.json');
import validData = require('../fixtures/valid_data.json');
import errorData = require('../fixtures/error_data.json');

describe("Registration", () => {
    beforeEach(async () => {
        await SingUpPage.openSingUpPage();
    });

    it("TC_1 Registration with valid data", async () => {
        // await SingUpPage.openSingUpPage();
        const enteredUserName = Faker.userName;
        await SingUpPage.registration(enteredUserName, Faker.userEmail, Faker.password);
        await browser.pause(5000);
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(url.home)
        const userNameText = await MainPage.getUserButtonText()
        await expect(userNameText.trim()).toContain(enteredUserName);
    });

    it("TC_2 Registration with the data of an existing user", async () => {
        await SingUpPage.registration(validData.name, validData.email, validData.password);
        await browser.pause(5000);
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(url.register)
        const errorText = await SingUpPage.errorMessage.getText();
        await expect(errorText.trim()).toBe(errorData.takenEmail || errorData.takenUserName);
    });

    it("TC_3 Click on submit button with empty fields", async () => {
        const userNameInput = await SingUpPage.inputUserName.getText();
        await expect(userNameInput.trim()).toStrictEqual('');
        const userEmailInput = await SingUpPage.inputEmail.getText();
        await expect(userEmailInput).toStrictEqual('');
        const userPasswordInput = await SingUpPage.inputPassword.getText();
        await expect(userPasswordInput).toStrictEqual('');
        await expect(SingUpPage.buttonSubmit).toBeDisabled();
    });

    it("TC_4 Click on 'Have an account?' button", async () => {
        await SingUpPage.haveAnAccountButton.click();
        await browser.pause(2000);
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(url.login);
    });

});
