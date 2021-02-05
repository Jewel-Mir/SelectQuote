import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('homeandauto selectquote home page',  () => {
    it('should redirect from https://homeandauto.selectquote.com/ to https://homeandauto.selectquote.com/insurance-overview/', () => {
        browser.url('https://homeandauto.selectquote.com/')
        homePage.overviewButton.click()

        const expected = "https://homeandauto.selectquote.com/insurance-overview/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })

    it('should click on the searchInputButton',() =>{
    homePage.open();
    homePage.searchInputButton.click();
    browser.pause(5000);
    
    })
    
    it('should be able to enter text and click', () => {
    homePage.open();
    browser.pause(3000);
    homePage.searchInput.click();
    homePage.searchInput.setValue('Home Insurance');
    browser.pause(2000);

    })

   /* it('should have the right title', () => {
    homePage.open();
    expect(searchInput).addValue('Home Insurance');
    searchInput.click();
    browser.pause(5000)

    })
*/
    it('should be able to contain and select All Results',() => {
    homePage.open();
    expect (homePage.allResult).toHaveTextContaining('/All results/');
    expect (homePage.allResult).toBeClickable({timeout:5000});
    homePage.allResult.click();
    browser.pause(5000);

    })

    it('should click on Auto and Home',() => {
    homePage.open();
    homePage.homeInsurance.click();
    browser.pause(5000);
   
    })
})
