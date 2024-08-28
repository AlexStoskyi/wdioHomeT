import { $ } from "@wdio/globals";
import Page from "./page";


class MainPage extends Page {

  public get homeButton() {
    return $('//div/ul/li/a[@routerlink="/"]');
  }
  public get singInButton() {
    return $('//div/ul/li/a[@routerlink="/login"]');
  }
  public get singUpButton() {
    return $('//div/ul/li/a[@routerlink="/register"]');
  }
  public get newArticleButton() {
    return $('//div/ul/li/a[@routerlink="/editor"]');
  }
  public get settingButton() {
    return $('//div/ul/li/a[@routerlink="/settings"]');
  }
  public get userButton() {
    return $('(//div/ul/li/a)[4]');
  }
  public get yourFeedButton() {
    return $("(//div[@class='feed - toggle']/ul/li)[1]")
  }
  public get globalFeedButton() {
    return $("(//div[@class='feed - toggle']/ul/li)[2]")
  }
  public get tegFeedButton() {
    return $("(//div[@class='feed - toggle']/ul/li)[3]")
  }
  public get popularTegButton() {
    return $("(//div/div[@class='tag-list'])[1]")
  }
  public get articleOnMainPage() {
    return $('(//div[@class="article - preview"])[1]')
  }
  public get firstArticleLike() {
    return $('(//app-favorite-button)[1]')
  }
  public get firstArticlePreview() {
    return $('(//a[@class="preview-link"])[1]/h1')
  }

  public getUserButtonText() {
    return this.userButton.getText()
  }

  public openPage() {
    return super.open('');
  }
}

export default new MainPage();
