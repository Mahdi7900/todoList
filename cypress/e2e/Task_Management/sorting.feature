Feature: Default Task Order
  Scenario: Tasks are ordered by due date on app entry
    Given the user is on the To-Do List homepage
    And there are tasks with different due dates
      | Title            | Description      | Due Date   |
      | Task 1           | First Task       | 2025-01-10 |
      | Task 2           | Second Task      | 2025-01-08 |
      | Task 3           | Third Task       | 2025-01-12 |
    When the user views the task list
    Then tasks are displayed in ascending order of due date
      | Title            | Due Date   |
      | Task 2           | 2025-01-08 |
      | Task 1           | 2025-01-10 |
      | Task 3           | 2025-01-12 |
    And tasks with passed due dates are not displayed
