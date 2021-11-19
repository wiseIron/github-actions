context('Password recovery form tests', () => {
	beforeEach(() => {
		cy.visitMeestGroupSiteEngVersion();
		cy.contains('Do you Forgot password?').click()
	})

	it('Success registration', () => {
		//Arrange
		const email = 'formeestgrouptest+1002@gmail.com'

		//Act
		cy.get('.popupContent input[type=text]').type(email)
		cy.get('.popupContent').contains('Ok').click()

		//Assert
		cy.get('#gwt-uid-12')
			.should('have.text', `You will receive email: ${email} with recovery password instruction`)
	})
})