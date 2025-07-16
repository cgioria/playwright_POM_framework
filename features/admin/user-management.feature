@admin
Feature: Admin User Management
  As an admin user
  I want to manage system users
  So that I can control access to the system

  Scenario: Add new admin user
    Given I am logged in as an admin user
    When I navigate to the admin section
    And I click on the "Add User" button
    # And I select "Admin" from "User Role" dropdown
    # And I select "Enabled" from "Status" dropdown
    # And I enter employee name "e"
    # And I enter a random username and password
    # And I confirm the password
    # And I click on the "Save" button
    # Then I should see a success message