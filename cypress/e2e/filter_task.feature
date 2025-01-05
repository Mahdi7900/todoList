Feature: Filter Tasks
  Scenario: User filters tasks by completed status
    Given the user is on the To-Do List homepage
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    And the task "Buy vegetables" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Complete" button for the task "Buy vegetables"
    And there are tasks with completed and incomplete statuses
    When the user selects "Completed" from the filter dropdown
    Then only completed tasks are displayed in the task list
