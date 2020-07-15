$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google Title verifications",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Google"
    }
  ]
});
formatter.background({
  "name": "Login to Google",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on Google search page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Google title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Google"
    },
    {
      "name": "@googleTitle"
    }
  ]
});
formatter.step({
  "name": "User searches for apples",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see apples inside of the title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Login to Google",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on Google search page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Google title verification with preferred data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Google"
    },
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "User searches for a word \"iphone\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see a word \"iphone\" inside of the title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Login to Google",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on Google search page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Google Title Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Google"
    },
    {
      "name": "@dataType"
    }
  ]
});
formatter.step({
  "name": "User tests with words \"apple\" \"pen\" \"paper\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user checks numbers 12 and 55",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});