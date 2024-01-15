/// <reference types="cypress"/>

// !!! GOOD PRACTISES !!!!
// in cypress.json, baseUrl is already defined.
// that way, we can just use / to go to the page. 

/* cy.location("pathname") y cy.url() parecen comportarse de la misma manera */
/* lo distinto es usar .should("equal", "RUTA ABSOLUTA") vs .should("include", "KEYWORDS que incluye la url") */


describe("Submit session", () => {
    // Every test will do this bit here, the assertion changes based on the page each test runs in
    beforeEach(() => {
        cy.visit("/conference");
        cy.get("h1").find("a").contains("View Sessions").click();
        cy.location("pathname").should("include", "/sessions");

        cy.get("a").contains("Submit a Session!").click();
    });

    it("Should navigate to the submit sessions' page", () => {

        cy.location("pathname").should("include", "/new");
    });

    it.only("Should submit a session successfully", () => {
        // Fill the form with session information
        cy.contains("Title").type("New session title");
        cy.contains("Description").type("Describe our conference topic. Interesting information.");
        cy.contains("Day").type("Monday, October 22nd.");
        cy.contains("Level").type("Beginner");

        // Submit the form
        //cy.get("button").contains("Submit").click(); // Otra manera de hacerlo
        cy.get("form").submit();

        // Validate that the form was submitted successfully
        cy.contains("Session Submitted Successfully!").should("exist");
    });
})