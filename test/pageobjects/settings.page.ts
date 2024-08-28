import { $ } from "@wdio/globals";
import Page from "./page";


class SettingsPage extends Page {

  public get inputUserName() {
    return $('(//input)[2]');
  }
  public get yourSettingsText() {
    return $('//div/h1');
  }

  public get buttonSubmit() {
    return $('//button[@type="submit"]');
  }


  public async changeUserName(userName: string,) {
    await this.inputUserName.setValue(userName);
    await this.buttonSubmit.click();
  }

}

export default new SettingsPage();
