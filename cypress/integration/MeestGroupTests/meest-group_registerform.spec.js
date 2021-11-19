context('Register form tests', () => {
	beforeEach(() => {
		cy.visitMeestGroupSiteEngVersion();
		cy.contains('Register').click()
	})

	it('Success registration', () => {
		//Arrange
		const emailSuffix = Math.floor(Math.random() * 1000);
		const userEmail = `formeestgrouptest+${emailSuffix}@gmail.com`
		const password = "A1234567";

		//Act
		cy.get('.input-div input[type=text]').type(userEmail)
		cy.get('[placeholder="password"]').type(password)
		cy.get('[placeholder="password (again)"]').type(password)

		cy.get('input[type="checkbox"]')
			.check({ force: true })
			.should('be.checked')

		cy.contains('Register').click()

		//Assert
		cy.get('#gwt-uid-16')
			.should('have.text', 'Thank you for registration\nRegistration email has been sent.')
	})
})