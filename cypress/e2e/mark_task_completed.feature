Feature: Mark Task as Completed
  Scenario: User marks a task as completed
    Given the user is on the To-Do List homepage
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Complete" button for the task
    Then the task is marked as completed
    And it is styled with a completed background
