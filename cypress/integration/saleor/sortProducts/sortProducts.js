import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SaleorHomePage from '../../../pages/saleor/saleor-home-page';
import SaleorProductPage from '../../../pages/saleor/saleor-category-page'

Given(/^I hover category (.*?)$/, (category) => {
  SaleorHomePage.hoverCategory(category)
});

When(/^choose (.*?) product category$/, (productCategory) => {
  SaleorHomePage.chooseCategory(productCategory)
});

Then(/^change sort by (.*?)$/, (sortBy) => {
  SaleorProductPage.chooseNewSorting(sortBy)
});

Then(/^products should be sorted according option (.*?)$/, (sortBy) => {
  SaleorProductPage.checkDescSort(sortBy)
});