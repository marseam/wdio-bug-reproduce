import LoginPage from  '../pageobjects/login.page';
import { SecurePage } from '../pageobjects/secure.page';


describe('My Login application', () => {
    it("should be accessible by portal user", () => {
         LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


