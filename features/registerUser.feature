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

@negative
Scenario Outline: Unable to register to AutomationPractice with invalid Data
    Given I open AutomationPractice page
    And I navigate to Register Page
    When I register with my username as "<email>"
    And I press the Create Account Button
    Then I am displayed an "<error_message>"
  Examples:
  | email                    |error_message|
  | test@test.com            |An account using this email address has already been registered. Please enter a valid password or request a new one.|
  |test                      |Invalid email address.|
  |12                        |Invalid email address.|