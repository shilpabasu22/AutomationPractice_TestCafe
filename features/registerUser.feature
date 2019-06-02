Feature: Register on AutomationPractice.com

    As a new user
    I want to register to AutomationPractice

@active
  Scenario Outline: Register to AutomationPractice
    Given I open AutomationPractice page
    And I navigate to Register Page
    When I register with my username as "<email>"
    And I press the Create Account Button
    Then I am displayed Personal Information Page
  Examples:
  | email                    |
  | gaming.shilpa1@gmail.com  |