import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("the user enters {string} in the task title field", (title: string) => {
  cy.get('input[name="title"]').type(title);
});

When("the user enters {string} in the task description field", (description: string) => {
  cy.get('textarea[name="description"]').type(description);
});

When("the user selects {string} priority from the priority dropdown", (priority: string) => {
  cy.get('input[name="priority"]').parent().click();
  cy.contains("li", priority).click();
});

Then("the new task {string} is displayed in the task list", (title: string) => {
  cy.get(".task-list").contains("h3", title).should("be.visible");
});

Then("it has a description {string}", (description: string) => {
  cy.get(".task-list").contains("p", description).should("be.visible");
});