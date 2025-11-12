Feature: ParaBank Registration Functionality

  Background:
    Given User navigates to ParaBank application

  @wip
  Scenario: User can access registration page
    When User clicks on the Register link
    Then User should see the registration form
    And User should see "First Name" input field
    And User should see "Last Name" input field
    And User should see "Address" input field

  @wip
  Scenario: User registration with valid details
    When User clicks on the Register link
    And User fills registration form with following details
      | First Name | John              |
      | Last Name  | Doe               |
      | Address    | 123 Main Street   |
      | City       | New York          |
      | State      | NY                |
      | Zip Code   | 10001             |
      | Phone      | 1234567890        |
      | Email      | john@example.com  |
      | Username   | johndoe           |
      | Password   | Password123       |
    And User clicks Register button
    Then User should see "Your account was created successfully" message
    And User should be logged in as "johndoe"
