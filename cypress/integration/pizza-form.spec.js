describe('Pizza form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('sanity check', () => {
        expect(1 + 1).equal(2)
    })

    const nameInput = () => cy.get('input[name=name]')
    const submitButton = () => cy.get('button[type=submit]')

    it('should add text to name input', () => {
        nameInput().should('exist').type('hello').should('have.value', 'hello')
    })

    it('should check multiple toppings', () => {
        cy.get('input[id=pineapple]').click()
        cy.get('input[id=pepperoni]').click()
    })

    it('should submit a valid form', () => {
        nameInput().type('lindell')
        submitButton().click()
        cy.contains('lindell')
    })
})