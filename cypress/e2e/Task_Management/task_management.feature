Feature: Task Management

  Background:
    Given the user is on the To-Do List homepage

  Scenario: User adds a task with title and description
    When the user enters "Buy groceries" in the task title field
    And the user enters "Milk, eggs, bread" in the task description field
    And the user selects "High" priority from the priority dropdown
    And the user clicks the "Add Task" button
    Then the new task "Buy groceries" is displayed in the task list
    And it has a description "Milk, eggs, bread"

  Scenario: User marks a task as completed
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Complete" button for the task
    Then the task is marked as completed
    And it is styled with a completed background

  Scenario: User deletes a task from the list
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Delete" button for the task
    Then the task "Buy groceries" is removed from the task list

  Scenario: User edits a task's title and description
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Edit" button for the task
    And the user enters "Buy vegetables" in the title field
    And the user enters "Carrots" in the description field
    And the user clicks the "Save" button
    Then the task title is updated to "Buy vegetables"
    And the description is updated to "Carrots"

  Scenario: User filters tasks by completed status
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    And the task "Buy vegetables" exists with "Test Description" description and "Medium" priority
    When the user clicks the "Complete" button for the task "Buy vegetables"
    And there are tasks with completed and incomplete statuses
    When the user selects "Completed" from the filter dropdown
    Then only completed tasks are displayed in the task list

  Scenario: User sorts tasks by priority
    And the task "Buy groceries" exists with "Test Description" description and "Medium" priority
    And the task "Buy milk" exists with "Test Description" description and "Low" priority
    And the task "Buy vegetables" exists with "Test Description" description and "High" priority
    When the user selects "Priority" from the sort dropdown
    Then tasks are displayed in order of priority