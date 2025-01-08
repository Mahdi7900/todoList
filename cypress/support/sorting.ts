import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the To-Do List homepage", () => {
  cy.visit("/");
});

Given("there are tasks with different due dates", (dataTable:any) => {
  dataTable.hashes().forEach((task) => {
    cy.get('input[name="title"]').type(task.Title);
    cy.get('textarea[name="description"]').type(task.Description);
    cy.get('input[name="priority"]').parent().click();
    cy.contains("li", "Medium").click(); // Assign default priority
    if (task["Due Date"]) {
      const dueDateInput = cy.get('input[name="dueDate"]'); // Adjust selector based on your app
      dueDateInput.clear().type(task["Due Date"]);
    }
    cy.contains("button", "Add Task").click();
  });
});

When("the user views the task list", () => {
  cy.get(".task-list").should("be.visible");
});

Then("tasks are displayed in ascending order of due date", (dataTable:any) => {
  const expectedOrder = dataTable.hashes().map((task) => task.Title);

  cy.get(".task-list li")
      .then((taskElements) => {
        const actualOrder = Array.from(taskElements).map((task) =>
            task.querySelector("h3")?.textContent?.trim()
        );
        expect(actualOrder).to.deep.equal(expectedOrder);
      });
});

Then("tasks with passed due dates are not displayed", () => {
  const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

  cy.get(".task-list li").each(($task) => {
    const dueDateText = $task.find(".due-date").text().trim(); // Find due-date text
    if (dueDateText) {
      const dueDate = new Date(dueDateText);
      expect(dueDate.getTime()).to.be.gte(new Date(today).getTime());
    }
  });
});

