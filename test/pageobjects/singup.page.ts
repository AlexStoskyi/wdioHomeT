import { $ } from "@wdio/globals";
import Page from "./page";


class SingUpPage extends Page {

  public get inputEmail() {
    return $('//input[@formcontrolname="email"]');
  }

  public get haveAnAccountButton() {
    return $('//div/p/a');
  }

  public get inputPassword() {
    return $('//input[@formcontrolname="password"]');
  }
  public get inputUserName() {
    return $('//input[@formcontrolname="username"]');
  }

  public get buttonSubmit() {
    return $('//button[@type="submit"]');
  }

  public get errorMessage() {
    return $('//ul[@class="error-messages"]/li')
  }

  public async registration(username: string, email: string, password: string) {
    await this.inputUserName.setValue(username);
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password);
    await this.buttonSubmit.click();
  }


  public openSingUpPage() {
    return super.open("register");
  }
}

export default new SingUpPage();
