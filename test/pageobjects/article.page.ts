import { $ } from "@wdio/globals";
import Page from "./page";


class ArticlePage extends Page {

  public get inputArticleTitle() {
    return $('//input[@formcontrolname="title"]');
  }

  public get inputDescription() {
    return $('//input[@formcontrolname="description"]');
  }

  public get inputBody() {
    return $('//textarea');
  }

  public get inputComment() {
    return $('//div/textarea');
  }

  public get buttonPublish() {
    return $('//form/fieldset/button');
  }

  public get buttonPostComment() {
    return $('//div[@class="card-footer"]/button');
  }

  public get buttonDeleteComment() {
    return $('//span/i');
  }
  public get buttonDeleteArticle() {
    return $('(//div[@class="article-meta"]/span/button)[1]');
  }

  public get commentCard() {
    return $('//div[@class="card"]')
  }

  public get errorMessage() {
    return $('//ul[@class="error-messages"]/li')
  }

  public get nameCreatedArticle() {
    return $('//div/div/div[@class="container"]/h1')
  }

  public get commentText() {
    return $('//div/p[@class="card-text"]')
  }

  public async createNewComment(comment: string) {
    await this.inputComment.setValue(comment);
    await this.buttonPostComment.click();
  }

  public async createNewArticle(articleTitle: string, description: string, body: string) {
    await this.inputArticleTitle.setValue(articleTitle);
    await this.inputDescription.setValue(description);
    await this.inputBody.setValue(body);
    await this.buttonPublish.click();
  }

  public openArticlePage() {
    return super.open("editor");
  }
}

export default new ArticlePage();
