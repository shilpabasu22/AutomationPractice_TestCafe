Feature: Login on AutomationPractice.com

    As a user
    I want to login to AutomationPractice

@positive
  Scenario Outline: Login to AutomationPractice
    Given I open AutomationPractice page
    And I navigate to Login Page
    When I enter my username as "<email>"
    And I enter my password as "<password>"
    And I press the Login button
    Then My name "<loginName>" is displayed
  Examples:
  | email                    | password |loginName|
  | gaming.shilpa@gmail.com  | Test123  |Shilpa Basu|