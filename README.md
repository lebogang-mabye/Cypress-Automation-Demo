# Cypress-Automation-Demo

This is just a quick Demo with minimal work. There is plenty of refinement that can be done in the future

## Steps to install Cypress. 

With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

1. Install the cypress by running the following command.
```
npm install cypress --save-dev
```



## Steps to integrate cucumber with Cypress. 

To do so, we would have to use some external plugins. Please follow the steps mentioned below.

```
1. Install the cucumber plugin by running the following commands.
```
npm install --save-dev cypress-cucumber-preprocessor 
npm install -D cypress cypress-cucumber-preprocessor
```
2. After installing the plugin, add this code snippet in the cypress.config.js file.
```
const cucumber = require('cypress-cucumber-preprocessor').default;

e2e: {
   setupNodeEvents(on, config) {
     on('file:preprocessor', cucumber()) 
   },
   specPattern: "cypress/e2e/**/*.{feature,js}"
``` 
3. After that, we also have to add the following in the package.json file.
```
"cypress-cucumber-preprocessor": { 
"nonGlobalStepDefinitions": false,
"stepDefinitions": "cypress/support/{folderNameofSpecDefinitions}"
  }
}
```
This will help cypress to convert the mmocha test to a feature file having gherkins syntax.

4. And lastly, we need to add an extension to our IDE so that it can recognise the .feauture extension. In our case we have used Visual Code Studio. you can intall the following plugin: 'Cucumber (Gherkin) Full Support'

And the cucumber extension will get configured for our IDE.

Then, Add below in Cucumber plugin settings >> Edit Params in JSON

    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.steps": [
        "cypress/support/{folderNameofSpecDefinitions}/*.js" ]

```


## Run example tests

```
npx cypress open  (Open Test Runnner)
npx cypress run  (Headless Mode - Default Cypress Browser)
npx cypress run --browser chrome  (Headless Mode - Chrome Browser)
node cucumber-html-report.js (To generate an HTML report)
```  

## Tags usage

### Tagging tests
You can use tags to select which test should run.
Keep in mind we are using following syntax, eg. `'@Regression and @200 or @401'`.
In order to initialize tests using tags you will have to run cypress and pass TAGS environment variable.

To make things faster and skip cypress opening a browser for every feature file (taking a couple seconds for each one), even the ones we want ignored, we use our own cypress-tags wrapper. It passes all the arguments to cypress, so use it the same way you would use cypress CLI. The only difference is it will first filter out the files we don't care about, based on the tags provided. 

----
### Tests Examples:
  
  ```
      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔ cypress/e2e/**/T01-UI-Validations.feature   00:04    2      0     -      -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔ cypress/e2e/**/T02-AnotherOne.feature    00:05    2     0     -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:09        2        0        -        -        -
```

----
## Organization

Tests are organized in `cypress/e2e` as follows:

```bash
cypress/e2e
├── Front-End-Tests
│   ├── Feature Files

```

----

## Framework Benefits

Below are some the Cypress benefits:
```
open-source: it is free to use
```
Super-fast: faster than all the testing frameworks in the market
```
Time Travel: takes snapshots as your tests run
```
Debuggability: readable error and stack traces
```
Automatic Waiting: no need to put explicit wait statements
```
Screenshots and Videos: simple options to get screenshots and videos while the tests run in CI/CD
```
Cross Browser Testing: locally or remotely 
```
API Testing: You can also mock server responses. This is a much needed solution in the API world 
```
Easy to write tests
```

----

### > Build tool - Node Js

### > Automation tool - Cypress

### > IDE - Visual Code Studio



----
## Contact

Lebogang Mabye - Lebogang.Mabye@gmail.com

+27729993694


