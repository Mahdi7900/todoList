import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("there are tasks with completed and incomplete statuses", () => {
  cy.get(".task-list").should("exist");
});

When("the user selects {string} from the filter dropdown", (filter: string) => {
  cy.get('input[name="filter"]').parent().click();
  cy.contains("li", filter).click();
});

Then("only completed tasks are displayed in the task list", () => {
  cy.get(".task-list li").each((task) => {
    cy.wrap(task).should("have.class", "completed");
  });
});

When("the user clicks the {string} button for the task {string}", (buttonText: string, taskTitle: string) => {
  cy.contains(".task-list li", taskTitle).within(() => {
    cy.contains("button", buttonText).click();
  });
});