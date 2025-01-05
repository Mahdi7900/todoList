import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';

Given("the task {string} is displayed in the task list", (title: string) => {
  cy.get(".task-list").contains("h3", title).should("be.visible");
});

Then("the task is marked as completed", () => {
  cy.get(".task-list .completed").should("exist");
});

Then("it is styled with a completed background", () => {
  cy.get(".task-list .completed").should("have.class", "bg-success-10");
});
