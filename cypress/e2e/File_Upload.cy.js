import 'cypress-file-upload'
describe('File_Uploads', () => {
    it('Single_File_Upload', () => {
      cy.visit("https://the-internet.herokuapp.com/upload")
      cy.get('#file-upload').attachFile('sample.pdf');
      cy.get('#file-submit').click();
      cy.wait(3000)
      cy.get("div[class='example'] h3").should('have.text' , 'File Uploaded!');
    })

    it('File_Upload-Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'sample.pdf' , fileName:'sample1.pdf'});
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text' , 'File Uploaded!');
      })

      it('File_Upload_Drag_And_Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(5000);
        cy.get('#drag-drop-upload').attachFile('sample.pdf',{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('sample.pdf');

      })

      it('Upload_Multiple_Files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(['sample.pdf','sample2.pdf']);
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
      })

      it('File_Upload_Shadow_DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input" , {includeShadowDom:true}).attachFile("sample.pdf");
        cy.wait(3000);
        cy.get(".smart-item-name", {includeShadowDom:true}).contains('sample.pdf')
      })

  })
