Feature: Sort Products
  @e2e-test
  Scenario Outline: Sort products by all options
    Given I'm on demo saleor page
    And I hover category <category>
    And choose <productCategory> product category
    When change sort by <sortBy>
    Then products should be sorted according option <sortBy>
    
Examples:
      | category   |productCategory| sortBy         |
      | Groceries  |Juices         | Price High-Low |
      | Groceries  |Juices         | Price Low-High |
      | Accessories|Paints         | Price Low-High |

## implemented only 2 sort options but could be extended to all