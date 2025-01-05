Feature: Delete Task
  Scenario: User deletes a task from the list
    Given the user is on the To-Do List homepage
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Delete" button for the task
    Then the task "Buy groceries" is removed from the task list
