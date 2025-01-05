import {Then, When} from '@badeball/cypress-cucumber-preprocessor';

When("the user selects {string} from the sort dropdown", (sortOption: string) => {
  cy.get('input[name="sort"]').parent().click();
  cy.contains("li", sortOption).click();
});

Then("tasks are displayed in order of priority", () => {
  cy.get(".task-list li")
      .then((tasks) => {
        const priorities = Array.from(tasks).map((task) =>
            task.querySelector(".priority")?.textContent?.trim()
        );
        const sorted = [...priorities].sort((a, b) => {
          const priorityOrder = { High: 1, Medium: 2, Low: 3 };
          return priorityOrder[a!] - priorityOrder[b!];
        });
        expect(priorities).to.deep.equal(sorted);
      });
});
