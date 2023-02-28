describe('Fixtures', () => {
/*    // Direct Access
    it.only('Fixtures_Demo_Test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.fixture("orangehrm").then((data)=>{

        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)  
      })
      
    //   cy.get("input[placeholder='Username']").type("Admin")
    //   cy.get("input[placeholder='Password']").type("admin123")
    //   cy.get("button[type='submit']").click();
    //   cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard")  
    })
*/
    // Access through Hook - for multiple it blocks
    let userdata;
    before(() => {
        cy.fixture("orangehrm").then((data)=>{
        userdata=data;    

           
          })
      })
      it.only('Fixtures_Demo_Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)  
        })
 
      })


