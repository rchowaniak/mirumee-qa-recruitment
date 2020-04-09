import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import SaleorHomePage from '../../pages/saleor/saleor-home-page';

Given(/^I'm on demo saleor page$/, () => {
  SaleorHomePage.visit();
});


