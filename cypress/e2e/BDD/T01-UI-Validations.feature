
Feature: This is a feature for Web Automation

  Background:
    Given the user opens a browser 

  Scenario: Validate that you are on the User List Table
    When the user navigates to the Web Tables page
    Then Name column header is 'First Name' 
    And Surname column header is 'Last Name'
    And UserName column header is 'User Name'
    And Customer Type column header is 'Customer'
    And Role column header is 'Role'
    And E-mail column header is 'E-mail'
    And Cell column header is 'Cell Phone'
    And Locked column header is 'Locked'


  Scenario: Click Add user
    When the user clicks on Add User button
    Then the Add User pop-up should appear
    And the user close the pop-up


  Scenario Outline: Add users with the following details
    When the user clicks on Add User button
    And the user types '<first_name>' into the First Name text field
    And the user types '<last_name>' into the Last Name text field
    And the user types '<user_name>' into the User Name text field
    And the user types '<password>' into the Password text field
    And the user clicks '<customer>' 
    And the user selects '<role>' 
    And the user types '<email>' into the E-mail text field
    And the user types '<cell_phone>' into the Cell Phone text field
    Then the user clicks on Save

    Examples:
      |  first_name   |  last_name  |  user_name | password    | customer       | role         | email               | cell_phone   | 
      |  FName1       |  LName1     |  User1     | Pass1       | Company AAA    | Admin        | admin@mail.com      | 082555       | 
      |  FName2       |  LName2     |  User2     | Pass2       | Company BBB    | Customer     | customer@mail.com   | 082444       | 



  Scenario: Ensure that your users are added to the list
    When the user clicks on Add User button
    And the user types 'Lebogang' into the First Name text field
    And the user types 'Mabye' into the Last Name text field
    And the user types 'T101' into the User Name text field
    And the user types 'Password@101' into the Password text field
    And the user clicks 'Company AAA' 
    And the user selects 'Customer' 
    And the user types 'Lebogang.Mabye@gmail.com' into the E-mail text field
    And the user types '0729990001' into the Cell Phone text field
    Then the user clicks on Save
    And the table data should contain first name 'Lebogang'
    


# Bugs: Issues with the testing site
#
# Bug #1: User Validations is not working 
# Bug #2: It only says *Required on First Name & Role. However, all fields are mandatory
# Bug #3: There is no User Name validations
# Bug #3: Once user is added, Customer type is not showing ont he table
#



