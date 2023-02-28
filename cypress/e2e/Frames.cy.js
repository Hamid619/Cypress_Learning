import 'cypress-iframe'
describe('Handling_Frames', () => {
    // Approach # 01
    it.skip('Frames_Approach_01', () => {
      cy.visit("https://the-internet.herokuapp.com/iframe")
      const iframe = cy.get("#mce_0_ifr")                                      // Getting iFrame
                     .its('0.contentDocument.body')                            // Diging into Document
                     .should('be.visible')                                     // Checking
                     .then(cy.wrap); 
                     
      iframe.clear().type('Welcome', { selectAll: true });                      //{cmd-a}
      //text.css('font-weight', 'bold');          
      cy.get("[aria-label='Bold']").click();          
        
      /*cy.iframe('#mce_0_ifr').then(iframe => {
      // select the text element inside the iframe
      cy.wrap(iframe.contents().find('#tinymce')).then(text => {
      // select the text
      text.select();
      });
      });*/
    })

    // Approach # 02
    it.skip('By_Custom_Commands-Approach_02', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd-a}");      
        cy.get("[aria-label='Bold']").click();             
        
      })

       // Approach # 03
    it('By_Cypress_IFrame_Plugin-Approach_03', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr');                           //Load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome")
        // .type('{shift}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}') // move the cursor to the left of "world"
        .type('{selectall}')
        // .type('{shift}{rightarrow}{rightarrow}{rightarrow}{rightarrow}') // highlight the word "world"
        cy.get("[aria-label='Bold']").click();   
                  
      })
  })

