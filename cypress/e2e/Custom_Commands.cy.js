
describe('Custom_Commands', () => {
    it('Handling_Links', () => {
        if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
            // do something in development mode
        }
        // import "cypress/support/commands.js"
        //
        // // const process = require('process/browser');
        // // import clickLink  "../support/commands"
        // //const website_link = "https://demo.nopcommerce.com/";
        // //DIRECT WITH_OUT USING CUSTOM_COMMANDS
        // // let Target_Link = "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)";
        // //let Assertion = "div[class='product-name'] h1";
        // //cy.visit(website_link);
        // // cy.get(Target_Link).click();
        // // cy.get(Assertion).should("have.text", "Apple MacBook Pro 13-inch");
        //
        // // WITHOUT USING THE CUSTOM_COMMAND
        // const website_link = "https://demo.nopcommerce.com/";
        // let Assertion = "div[class='product-name'] h1";
        // cy.visit(website_link);
        //
        // // USING THE CUSTOM_COMMAND
        // cy.clickLink("Apple MacBook Pro 13-inch");
        // cy.get(Assertion).should("have.text", "Apple MacBook Pro 13-inch");
    })

    it('Overwriting_Existing_Command', () => {

    })

    it('Login_Command', () => {

    })

})