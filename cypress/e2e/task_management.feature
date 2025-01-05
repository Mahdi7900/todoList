Feature: Task Management
  As a user, I want to manage my tasks efficiently so that I can stay organized.

  Scenario: Add a new task
    Given I am on the home page
    When I enter "Task Title" as the task title
    And I enter "Task Description" as the task description
    And I select "High" as the task priority
    And I click "Add Task"
    Then I should see "Task Title" in the task list

  Scenario: Complete a task
    Given I have a task titled "Task Title" in the task list
    When I click "Complete" for the task titled "Task Title"
    Then the task titled "Task Title" should be marked as completed

  Scenario: Edit a task
    Given I have a task titled "Task Title" in the task list
    When I click "Edit" for the task titled "Task Title"
    And I update the task title to "Updated Task Title"
    And I click "Save"
    Then I should see "Updated Task Title" in the task list

  Scenario: Delete a task
    Given I have a task titled "Task Title" in the task list
    When I click "Delete" for the task titled "Task Title"
    Then I should not see "Task Title" in the task list

  Scenario: Filter tasks by completion status
    Given I have tasks with completed and incomplete statuses
    When I select "Completed" from the filter dropdown
    Then I should see only completed tasks in the task list

  Scenario: Sort tasks by priority
    Given I have tasks with different priorities
    When I select "Sort by Priority" from the sort dropdown
    Then I should see tasks sorted by priority in the task list
