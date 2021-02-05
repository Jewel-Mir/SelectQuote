import { HomePage } from '../pageobjects/homeInsurance.page'
const homeInsurance = new HomePage()

describe('homeandauto selectquote Home Insurance page',  () => {
    it('should redirect from https://homeandauto.selectquote.com/insurance-overview/ to https://homeandauto.selectquote.com/home-insurance/home-insurance-quotes/', () => {
        browser.url('https://homeandauto.selectquote.com/insurance-overview/')
        homeInsurance.homeInsuranceButton.click()
        browser.pause(3000);

        const expected = "https://homeandauto.selectquote.com/home-insurance/home-insurance-quotes/"
        const value = browser.getUrl()
        expect(value).toEqual(expected)
    })

    it('should be able to go to Best Home Insurance'),()=>{

    }

    
})