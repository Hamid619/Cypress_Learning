describe('Handle_Tables', () => {
   beforeEach('Login', () => {
     cy.visit('https://demo.opencart.com/admin/index.php?route=common/login');
     cy.get('#input-username').type('demo');
     cy.get('#input-password').type('demo');
     cy.get("button[type='submit']").click();
     // Closing the POP-UP Already Open
     cy.get('.btn-close').click();
     cy.get('.parent.collapsed[href="#collapse-5"]').click();
     cy.get('li[id="menu-customer"] li:nth-child(1) a:nth-child(1)').click();
   });
 
   it('Check_Number_of_Rows_and_Columns', () => {
     cy.get('table[class="table table-bordered table-hover"] > tbody > tr').should('have.length', 10);
     cy.get('table[class="table table-bordered table-hover"] > thead > tr > td').should('have.length', 7);
   });
 
   it('Check_Cells_Data_From_Specific_Row_and_Column', () => {
     let test_cases = [      { email: 'ceo@wolfchip.com', path: 'table[class="table table-bordered table-hover"] > tbody > tr:first-child > td:nth-child(3)' },      { email: 'princytrainings4@gmail.com', path: 'table[class="table table-bordered table-hover"] > tbody > tr:nth-child(5) > td:nth-child(3)' },    ];
 
     for (let i = 0; i < test_cases.length; i++) {
       let key = test_cases[i];
       cy.get(key.path).contains(key.email);
     }
   });
 
   it('Read_all_the_Rows_and_Columns_data_in_the_first_page', () => {
      //Read all Rows and Columns without Pagination
      // All Rows and Columns data read from the table
     cy.get('table[class="table table-bordered table-hover"] > tbody > tr').each(($row) => { //Capture all rows
       cy.wrap($row).within(() => { //For Every Row
         cy.get('td').each(($col) => {  //We are capturing all the columns
           cy.log($col.text());
         });
       });
     });
   });
 
   it.only('Pagination', () => {
    /*  let total_Pages;
      cy.get(".col-sm-6.text-end").then( (e)=>{
         let my_text=e.text(); // Showing 1 to 10 of 10350 (1035 Pages)
         total_Pages=my_text.substring(my_text.indexOf("(")+1 , my_text.indexOf("Pages")-1  );
         cy.log("Total Number of Pages in a Table => => => " + total_Pages ) ;

      })
*/
      let total_Pages=7;
      for(let p=1;p<=total_Pages;p++)
      {
         if(total_Pages>1)
         {
            cy.log("Total Pages => => "+p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000);
            cy.get('table[class="table table-bordered table-hover"] > tbody > tr').each(($row) => { //Capture all rows
               cy.wrap($row).within(() => { //For Every Row
                 cy.get('td:nth-child(3)').each(($col) => {  //We are capturing all the columns
                   cy.log($col.text());                      // Email  
                 });
               });
             });
         }
      }
   });

 });
 