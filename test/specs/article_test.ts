import { expect } from "@wdio/globals";
import MainPage from "../pageobjects/main.page";
import LoginPage from "../pageobjects/login.page";
import ArticlePage from "../pageobjects/article.page";
import UserPage from "../pageobjects/user.page";
import url = require('../fixtures/url.json');
import validData = require('../fixtures/valid_data.json');
import invalidData = require('../fixtures/invalid_data.json');
import errorData = require('../fixtures/error_data.json');
import faker from '../Faker/fake_data';



describe("Article", () => {
    beforeEach(async () => {
        await LoginPage.openLoginPage();
        await LoginPage.login(validData.email, validData.password);
    });

    it("TC_8 Click on 'New Article' button", async () => {
        await browser.pause(2000);
        const currentURL = await browser.getUrl();
        await expect(currentURL).toEqual(url.home);
        MainPage.newArticleButton.click();
        await browser.pause(2000);
        const articleTitleInput = await ArticlePage.inputArticleTitle.getText();
        await expect(articleTitleInput.trim()).toStrictEqual('');
        const articleDescriptionInput = await ArticlePage.inputDescription.getText();
        await expect(articleDescriptionInput.trim()).toStrictEqual('');
        const articleBodyInput = await ArticlePage.inputBody.getText();
        await expect(articleBodyInput.trim()).toStrictEqual('');
    });

    it("TC_9 Create new article with valid data", async () => {
        MainPage.newArticleButton.click();
        const fakeArticleName = faker.fakeArticle;
        ArticlePage.createNewArticle(fakeArticleName, faker.fakeDescription, faker.fakeBody)
        const articleNameText = await ArticlePage.nameCreatedArticle.getText();
        await expect(articleNameText.trim()).toEqual(fakeArticleName);
        await browser.pause(2000);
    })

    it("TC_10 Create new article with empty description input", async () => {
        MainPage.newArticleButton.click();
        ArticlePage.createNewArticle(faker.fakeArticle, invalidData.empty, faker.fakeBody)
        const errorMessage = await ArticlePage.errorMessage.getText();
        await expect(errorMessage.trim()).toEqual(errorData.emptyDescriptionError);
    })

    it("TC_11 Create new article with empty title input", async () => {
        MainPage.newArticleButton.click();
        ArticlePage.createNewArticle(invalidData.empty, faker.fakeDescription, faker.fakeBody)
        const errorMessage = await ArticlePage.errorMessage.getText();
        await expect(errorMessage.trim()).toEqual(errorData.emptyTitleError);
    })

    it("TC_12 Create new article with empty body input", async () => {
        MainPage.newArticleButton.click();
        ArticlePage.createNewArticle(faker.fakeArticle, faker.fakeDescription, invalidData.empty)
        const errorMessage = await ArticlePage.errorMessage.getText();
        await expect(errorMessage.trim()).toEqual(errorData.emptyBodyError);
    })


    it("TC_13 Wright comment after created article", async () => {
        MainPage.newArticleButton.click();
        const fakeArticleName = faker.fakeArticle;
        ArticlePage.createNewArticle(fakeArticleName, faker.fakeDescription, faker.fakeBody)
        const articleNameText = await ArticlePage.nameCreatedArticle.getText();
        await expect(articleNameText.trim()).toEqual(fakeArticleName);
        await browser.pause(2000);
        const newCommentText = faker.fakeBody;
        await ArticlePage.createNewComment(newCommentText);
        const createdCommentText = await ArticlePage.commentText.getText();
        await expect(createdCommentText.trim()).toEqual(newCommentText);
    })

    it("TC_14 Delete comment", async () => {
        MainPage.newArticleButton.click();
        const fakeArticleName = faker.fakeArticle;
        ArticlePage.createNewArticle(fakeArticleName, faker.fakeDescription, faker.fakeBody)
        await ArticlePage.createNewComment(faker.fakeArticle);
        await ArticlePage.buttonDeleteComment.click();
        await expect(ArticlePage.commentCard).not.toBeDisabled();
    })

    it.only("TC_15 Delete article", async () => {
        MainPage.newArticleButton.click();
        const fakeArticleName = faker.fakeArticle;
        ArticlePage.createNewArticle(fakeArticleName, faker.fakeDescription, faker.fakeBody)
        const articleNameText = await ArticlePage.nameCreatedArticle.getText();
        await expect(articleNameText.trim()).toEqual(fakeArticleName);
        await browser.pause(2000);
        await ArticlePage.buttonDeleteArticle.click();
        await browser.pause(2000);
        await MainPage.userButton.click();
        const userArticleList = await UserPage.articleListField.getText();
        await expect(userArticleList.trim()).toEqual(errorData.noArticle);
        //Фейлиться бо не завжди видаляється пост!!
    })
});
