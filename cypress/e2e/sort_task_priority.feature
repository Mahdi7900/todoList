Feature: Sort Tasks
  Scenario: User sorts tasks by priority
    Given the user is on the To-Do List homepage
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    And the task "Buy milk" exists with "Test Description" description and "Low" priority
    And the task "Buy vegetables" exists with "Test Description" description and "High" priority
    When the user selects "Priority" from the sort dropdown
    Then tasks are displayed in order of priority