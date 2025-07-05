/**
 * Test Case: 
 * Validate that you are on the User List Table
 * Click Add user
 * Add users with the following details
 * Ensure that User Name (*) is unique on each run
 * Ensure that your users are added to the list
 */

describe('Task - Web: Test', () => {

  // Generate Random Test Data
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();
  const user_name = `User_${id}`;
  const random_email = `Test${id}@gmail.com`;
  const password = `Test@${id}`;

  // Stored Test Data 
  let testData;
  beforeEach(() => {
      cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/') //Visit Base URL
      cy.fixture("example.json").then((data) => {
          testData = data;
      });
  });


  it('Table Validations:', () => {

      // Validate that you are on the User List Table
      cy.url().should('eq', 'https://www.way2automation.com/angularjs-protractor/webtables/') //Validate Webtables URL
      cy.get(':nth-child(1) > .header-content').should("contain", "First Name") //First Name column header assertion
      cy.get(':nth-child(2) > .header-content').should("contain", "Last Name") //Last Name column header assertion
      cy.get(':nth-child(3) > .header-content').should("contain", "User Name") //User Name column header assertion
      cy.get(':nth-child(5) > .header-content').should("contain", "Customer") //Customer Type column header assertion
      cy.get(':nth-child(6) > .header-content').should("contain", "Role") //Role column header assertion
      cy.get(':nth-child(7) > .header-content').should("contain", "E-mail") //E-Mail column header assertion
      cy.get(':nth-child(8) > .header-content').should("contain", "Cell Phone") //Cell Phone column header assertion
      cy.get(':nth-child(9) > .header-content').should("contain", "Locked") //Locked Status column header assertion

  })

  it('User Validations:', () => {

      // Enter User 1 details
      cy.get('thead > :nth-child(2) > td > .btn').click()
      cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(testData.firstName1)
      cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(testData.lastName1)
      cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(testData.userName1)
      cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(testData.password1)
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1)').click() //Select Customer Type
      cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(testData.roleAdmin) //Choose Role
      cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(testData.email1)
      cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(testData.cellPhone1)
      cy.get('.btn-success').click()

      // Add same user twice to show User Name validations
      cy.get('thead > :nth-child(2) > td > .btn').click()
      cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(testData.firstName1)
      cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(testData.lastName1)
      cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(testData.userName1)
      cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(testData.password1)
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1)').click() //Select Customer Type
      cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(testData.roleAdmin) //Choose Role
      cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(testData.email1)
      cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(testData.cellPhone1)
      cy.get('.btn-success').click()

  })

  it('Add User:', () => {

      // Validate that users can successfully click on "Add User"
      cy.get('thead > :nth-child(2) > td > .btn').click() //Click on Add User
      cy.get('thead > :nth-child(2) > td > .btn').should("contain", "Add User") //Add User pop-up assertion

      // Enter User 1 details
      cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(testData.firstName1)
      cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(testData.lastName1)
      cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(testData.userName1)
      cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(testData.password1)
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1)').click() //Select Customer Type
      cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(testData.roleAdmin) //Choose Role
      cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(testData.email1)
      cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(testData.cellPhone1)
      cy.get('.btn-success').click()

      // Enter User 2 details
      cy.get('thead > :nth-child(2) > td > .btn').click() //Click on add user to add User2
      cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(testData.firstName2)
      cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(testData.lastName2)
      cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(testData.userName2)
      cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(testData.password2)
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2)').click() //Select Customer Type
      cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(testData.roleCustomer) //Choose Role
      cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(testData.email2)
      cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(testData.cellPhone2)
      cy.get('.btn-success').click()

      // Confirm that users are added
      cy.get('tbody > :nth-child(2) > :nth-child(1)').should("contain", testData.firstName1)
      cy.get('tbody > :nth-child(1) > :nth-child(1)').should("contain", testData.firstName2)

      cy.get('tbody > :nth-child(2) > :nth-child(3)').should("contain", testData.userName1)
      cy.get('tbody > :nth-child(1) > :nth-child(3)').should("contain", testData.userName2)


  })

  /**
   * Bugs: 
   * Bug #1: It only says *Required on First Name & Role. However, all fields are mandatory
   * Bug #2: There is no User Name validations
   * Bug #3: Once user is added, Customer type is not showing ont he table
   */
})