describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Paolo van Rijn',
      username: 'paolov',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.get('#username')
    cy.get('#password')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('paolov')
      cy.get('#password').type('test')
      cy.get('#login-button').click()
  
      cy.contains('Paolo van Rijn')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('nonuser')
      cy.get('#password').type('test')
      cy.get('#login-button').click()
  
    })
  })
})