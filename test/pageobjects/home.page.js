import { Page } from './page'

class HomePage extends Page {
    // Elements go here
    get searchInput () { return $('//input[@type="search"]')}
    get searchInputButton () { return $('#toggle-desktop')}
    get overviewButton () { return $('a=Overview')}

    get allResult(){ return $('div.select-arrow-active')}
    get autoHome() { return $('Auto & Home')}
    get homeInsurance() {return $ ('a=Home Insurance')}

    // Methods go here
    
    open(){
  super.open('https://homeandauto.selectquote.com/insurance-overview/');
    }
    
}
export { HomePage }
