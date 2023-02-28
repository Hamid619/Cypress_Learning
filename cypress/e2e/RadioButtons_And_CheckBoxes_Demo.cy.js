describe('Check UI Elements', () => {

    /*    it('Checking Radio Buttons', () => {
      cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      // Visibility of Radio Buttons  
      cy.get("#female").should('be.visible')
      cy.get("#male").should('be.visible')

      //Selecting Radio Buttons
      cy.get("#female").check().should('be.checked')
      cy.get("#male").should('not.be.checked')

      cy.get("#male").check().should('be.checked')
      cy.get("#female").should('not.be.checked')
    })
*/

    it('Checking Check_Boxes', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // Visibility of the Element
      //cy.get("input#monday").should('be.visible')
      
      //Selecting Single Check_Box "Monday"
      //cy.get("input#monday").check().should('be.checked')

      //Un-Selecting Single Check_Box "Monday"
      //cy.get("input#monday").uncheck().should('not.be.checked')

      //Selecting all Check_Boxes
      //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

      //Un-Selecting all Check_Boxes
      //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

      //Selecting First Check_Box 
      cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
      //Selecting First Check_Box 
      cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
      })
  })