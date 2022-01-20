describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('focused input on load', () => {
        cy.focused()
            .should('have.class', 'new-todo');
    })

    it('accept input', () => {
        const typedInput = "Buy Milk";

        cy.get('.new-todo')
            .type(typedInput)
            .should('have.value', typedInput);
    })
})