describe('Alerts', () => {
    // 1) Javascript Alert: It will have some text and an 'OK' button
    //_______________________________________________________________

    it.skip('JS Alert', () => {
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.get("button[onclick='jsAlert()']").click();

      cy.on('window:alert' , (t) =>
      {
        expect(t).to.contains('I am a JS Alert');

      })

      //Alert Window Automatically Closed by Cypress
      cy.get('#result').should('have.text' , 'You successfully clicked an alert');

    })


    // 2) Javascript Confirmation Alert: It will have some text with 'OK' and 'Cancel' buttons
    //_________________________________________________________________________________________
    
    // 2.1) Javascript Confirmation Alert: It will have some text with 'OK' button 
    //_____________________________________________________________________________

    it.skip('JS Confirmation Alert - By Okay Button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm' , (t) =>
      {
        expect(t).to.contains('I am a JS Confirm');

      })
        //Alert Window Automatically Closed by Cypress by using 'OK' button
      cy.get('#result').should('have.text' , 'You clicked: Ok');

      })

      // 2.2) Javascript Confirmation Alert: It will have some text with 'Cancel' button
      //________________________________________________________________________________

      it.skip('JS Confirmation Alert - By Cancel Button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm' , (t) =>
      {
        expect(t).to.contains('I am a JS Confirm');

      })
        //While Closing Alert Window it will use 'Cancel' button
        cy.on('window:confirm' , () => false); // Close using cancel button 
        //cy.on('window:confirm' , () => true); //Default behavior Close using Ok button 
       cy.get('#result').should('have.text' , 'You clicked: Cancel');

      })
      
      // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'Ok' button
      //_________________________________________________________________________________________________________

  it.skip('JS Prompt Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
        cy.stub(win ,'prompt').returns('Welcome');
         })
         cy.get("button[onclick='jsPrompt()']").click();
        // cy.on('window:prompt' , () => false); Cancel Button Click is not working. Don't know Why.
         cy.get('#result').should('have.text' , 'You entered: Welcome');
      })
  
       // 4) Authenticated Alert
      //_________________________

      
    it.only('JS Authenticated Alert', () => {
        //Approach--#1
     /*     cy.visit("https://the-internet.herokuapp.com/basic_auth" , {auth:
        {   username:"admin" , 
            password:"admin"
        }
    })
        cy.get("div[class='example'] p").should('have.contain' , ' Congratulations! You must have the proper credentials.');
        */

         //Approach--#2
         cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
         cy.get("div[class='example'] p").should('have.contain' , ' Congratulations');
      })
    })