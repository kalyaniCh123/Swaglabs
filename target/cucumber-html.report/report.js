$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Placeorder.feature");
formatter.feature({
  "line": 2,
  "name": "To place the order",
  "description": "",
  "id": "to-place-the-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@placeorder"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To check the items and place the order",
  "description": "",
  "id": "to-place-the-order;to-check-the-items-and-place-the-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user selects multiple items to add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user opens cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user removes items from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enters the personal details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "check the products and click on finish",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "to-place-the-order;to-check-the-items-and-place-the-order;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 18,
      "id": "to-place-the-order;to-check-the-items-and-place-the-order;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "to-place-the-order;to-check-the-items-and-place-the-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "To check the items and place the order",
  "description": "",
  "id": "to-place-the-order;to-check-the-items-and-place-the-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@placeorder"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user selects multiple items to add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user opens cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user removes items from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enters the personal details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "check the products and click on finish",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SaucelabsTestPage.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 9767630977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "SaucelabsTestPage.i_enter_valid(String)"
});
formatter.result({
  "duration": 432102535,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 16529365516,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.user_selects_multiple_items_to_add_to_cart()"
});
formatter.result({
  "duration": 679924871,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.user_opens_cart()"
});
formatter.result({
  "duration": 3483292245,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.user_removes_items_from_the_cart()"
});
formatter.result({
  "duration": 215910379,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.clicks_on_checkout_button()"
});
formatter.result({
  "duration": 2486609129,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.enters_the_personal_details()"
});
formatter.result({
  "duration": 2708819055,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.check_the_products_and_click_on_finish()"
});
formatter.result({
  "duration": 3799238490,
  "status": "passed"
});
formatter.match({
  "location": "SaucelabsTestPage.application_should_be_closed()"
});
formatter.result({
  "duration": 6384772820,
  "status": "passed"
});
});