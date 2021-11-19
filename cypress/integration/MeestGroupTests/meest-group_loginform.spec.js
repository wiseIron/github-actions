context('Login form tests', () => {
	beforeEach(() => {
		cy.visitMeestGroupSiteEngVersion();
	})

	it('Success login', () => {
		//Arrange
		const email = 'formeestgrouptest@gmail.com'
		const pass = 'A1234567'

		//Act
		loginWithEmailAndPassword(email, pass)
		cy.contains('Login').click()

		//Assert
		cy.contains('user has been locked by system').should('be.visible')
	})

	//Similar function could be exstracted to be reused in different test cases. Depends of project structure.
	function loginWithEmailAndPassword(email, pass) {
	    cy.get('input[type=text]').type(email)
	    cy.get('input[type=password]').type(pass)
	    cy.contains('Login').click()
	}
})