import { Page } from './page'

class HomeInsurancePage extends Page {
   
    get homeInsuranceButton() { return $('a=Home Insurance')}
    get bestHomeInsurance() { return $('')}

}

export { HomeInsurancePage }
