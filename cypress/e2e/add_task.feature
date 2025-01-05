Feature: Add Task
  Scenario: User adds a task with title and description
    Given the user is on the To-Do List homepage
    When the user enters "Buy groceries" in the task title field
    And the user enters "Milk, eggs, bread" in the task description field
    And the user selects "High" priority from the priority dropdown
    And the user clicks the "Add Task" button
    Then the new task "Buy groceries" is displayed in the task list
    And it has a description "Milk, eggs, bread"