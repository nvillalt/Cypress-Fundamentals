/// <reference types="cypress"/> 
// Turn on the IntelliSense on a per-file basis

// "describe" puts together similar tests
describe("Navigation", () => {

    it("Should navigate to conference sessions page", () => {
        cy.visit("http://localhost:1337/");
        cy.get("li").find("a").contains("Conference").click({force:true});
        
        cy.location("pathname").should("eq", "/conference");
    });

    it("Should click on view sessions", () => {
        cy.visit("http://localhost:1337/conference")
        cy.get("h1").find("a").contains("View Sessions").click();
        
        cy.location("pathname").should("eq", "/conference/sessions");
    });

});