import { $ } from "@wdio/globals";
import Page from "./page";


class UserPage extends Page {

    public get articleListField() {
        return $('//div[@class="article-preview"]');
    }

    public get userDescription() {
        return $('//div/p');
    }

}

export default new UserPage();
