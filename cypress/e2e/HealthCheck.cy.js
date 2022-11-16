/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
   
    it('cy.request() - make an XHR request', () => {
    
      cy.request('https://jsonplaceholder.cypress.io/comments')
        .should((response) => {
          expect(response.status).to.eq(200)
          // the server sometimes gets an extra comment posted from another machine
          // which gets returned as 1 extra object
          expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
    })})