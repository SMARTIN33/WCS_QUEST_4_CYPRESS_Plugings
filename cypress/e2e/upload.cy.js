describe('Uploader et télécharger des images', () => {
  beforeEach(() => {
    cy.visit('https://imgur.com/');
  });

  it("Upload d'un fichier et téléchargement au format zip", () => {
    cy.get('[href="/upload"]').click();
    cy.wait(2000);
    cy.get("#file-input").attachFile("../fixtures/cat.jpeg");
    cy.wait(2000);
    cy.contains("Download post").click();
  });
})