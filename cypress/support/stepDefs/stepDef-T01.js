/// <reference types="Cypress" />

import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

//-------------------------------------Precondition----------------------------------------------------//

Given('the user opens a browser', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
})

//---------------------Scenario: Validate that you are on the User List Table--------------------------//

When('the user navigates to the Web Tables page', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
    cy.url().should('eq', 'https://www.way2automation.com/angularjs-protractor/webtables/')
})


Then('Name column header is {string}', (firstNameHeader) => {
    cy.get(':nth-child(1) > .header-content').should('contain', firstNameHeader) //First Name column header assertion
})

Then('Surname column header is {string}', (lastNameHeader) => {
    cy.get(':nth-child(2) > .header-content').should('contain', lastNameHeader) //Last Name column header assertion
})

Then('UserName column header is {string}', (userNameHeader) => {
    cy.get(':nth-child(3) > .header-content').should('contain', userNameHeader) //User Name column header assertion
})

Then('Customer Type column header is {string}', (customerHeader) => {
    cy.get(':nth-child(5) > .header-content').should('contain', customerHeader) //Customer Type column header assertion
})

Then('Role column header is {string}', (roleHeader) => {
    cy.get(':nth-child(6) > .header-content').should('contain', roleHeader) //Role column header assertion
})

Then('E-mail column header is {string}', (eMailHeader) => {
    cy.get(':nth-child(7) > .header-content').should('contain', eMailHeader) //E-Mail column header assertion
})

Then('Cell column header is {string}', (cellPhoneHeader) => {
    cy.get(':nth-child(8) > .header-content').should('contain', cellPhoneHeader) //Cell Phone column header assertion
})

Then('Locked column header is {string}', (lockedHeader) => {
    cy.get(':nth-child(9) > .header-content').should('contain', lockedHeader) //Locked Status column header assertion
})

//-------------------------------------Scenario: Click Add user----------------------------------------//

When('the user clicks on Add User button', () => {
    cy.get('thead > :nth-child(2) > td > .btn').click()
})

Then('the Add User pop-up should appear', () => {
    cy.get('thead > :nth-child(2) > td > .btn').should("contain", "Add User") //Add User pop-up assertion
})

And('the user close the pop-up', () => {
    cy.get('.btn-danger').click()
})


//-------------------------Scenario Outline: Add users with the following details--------------------------//

When('the user types {string} into the First Name text field', (first_name) => {
    cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(first_name)
})

When('the user types {string} into the Last Name text field', (last_name) => {
    cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(last_name)
})

When('the user types {string} into the User Name text field', (user_name) => {
    cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(user_name)
})

When('the user types {string} into the Password text field', (password) => {
    cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(password)
})

When('the user clicks {string}', (customer) => {
    cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1)').click()
})

When('the user clicks {string}', (customer) => {
    cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .ng-pristine').click()
})

When('the user selects {string}', (role) => {
    cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(role)
})

When('the user types {string} into the E-mail text field', (email) => {
    cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(email)
})

When('the user types {string} into the Cell Phone text field', (cell_phone) => {
    cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(cell_phone)
})

Then('the user clicks on Save', () => {
    cy.get('.btn-success').click()
})


//-------------------------------------Scenario: Click Add user----------------------------------------//

Then('the table data should contain first name {string}', (first_name) => {
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should("contain", first_name)
    
})



