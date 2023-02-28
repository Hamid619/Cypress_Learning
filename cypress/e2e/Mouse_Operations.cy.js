import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('Mouse_Operations', () => {
    it('Mouse_Hover', () => {
      cy.visit("https://demo.opencart.com/");
      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
      .should('not.be.visible');
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
      .should('be.visible');
    })

    it('Right_Click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //APPROACH_01
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible');

        //APPROACH_02
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
      })

      it('Double_Click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult');
        //APPROACH_01
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find('#field2').should('have.value' , 'Hello World!');

        //APPROACH_02
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value' , 'Hello World!');
      })

      // Plugin @4tw/cypress-drag-drop
      it('Drag_And_Drop_Using_Plugin', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box7").should('be.visible');
        cy.get("#box107").should('be.visible');
        cy.wait(3000);
        cy.get('#box7').drag('#box107',{force:true}); // Source Element and Target Element
       
      })
      
      it.only('Scrolling_Page', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get(':nth-child(93) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(93) > :nth-child(1) > img').should('be.visible');
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').scrollIntoView({duration:2000}); 
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').should('be.visible');
        cy.get('#footer').scrollIntoView({duration:2000}); 
    
       
      })
  })