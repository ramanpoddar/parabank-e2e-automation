Feature: ParaBank Login Functionality

  Background:
    Given User navigates to ParaBank application

  Scenario: Verify ParaBank home page loads successfully
    When User is on the ParaBank home page
    Then User should see the ParaBank login form

  Scenario: User login with valid credentials
    When User enters username "john"
    And User enters password "demo"
    And User clicks the login button
    Then User should be logged in successfully
    And User should see the dashboard

  Scenario: User logout functionality
    When User enters username "john"
    And User enters password "demo"
    And User clicks the login button
    Then User should be logged in successfully
    When User clicks the logout button
    Then User should be redirected to login page
