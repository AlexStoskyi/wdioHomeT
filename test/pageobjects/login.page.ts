import { $ } from "@wdio/globals";
import Page from "./page";


class LoginPage extends Page {

  public get inputEmail() {
    return $('//input[@formcontrolname="email"]');
  }

  public get needAnAccountButton() {
    return $('//div/p/a');
  }

  public get inputPassword() {
    return $('//input[@formcontrolname="password"]');
  }

  public get buttonSubmit() {
    return $('//button[@type="submit"]');
  }

  public get errorMessage() {
    return $('//ul[@class="error-messages"]/li')
  }

  public async login(email: string, password: string) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonSubmit.click();
  }

  public openLoginPage() {
    return super.open("login");
  }
}

export default new LoginPage();
