import { faker } from '@faker-js/faker';

class Fake {
    userName = faker.internet.userName();
    userEmail = faker.internet.email();
    password = faker.internet.password();
    fakeArticle = faker.hacker.phrase();
    fakeDescription = faker.hacker.ingverb();
    fakeBody = faker.lorem.paragraph();
}

export default new Fake();