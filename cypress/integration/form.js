describe('Pizza Order Forum', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

        const nameInput = () => cy.get('input[name=name]')
        const sizeSelect = () => cy.get('select[name=size]')
        const pepperoniInput = () => cy.get('input[name=pepperoni]')
        const sausageInput = () => cy.get('input[name=sausage]')
        const mushroomsInput = () => cy.get('input[name=mushrooms]')
        const pineappleInput = () => cy.get('input[name=pineapple]')
        const instructionsInput = () => cy.get('input[name=instructions]')
        const sumbitBtn = () => cy.get('#submit')

        it('all elements are on the page', () => {
            nameInput().should('exist')
            sizeSelect().should('exist')
            pepperoniInput().should('exist')
            sausageInput().should('exist')
            mushroomsInput().should('exist')
            pineappleInput().should('exist')
            instructionsInput().should('exist')
            sumbitBtn().should('exist')
        })

        describe('filling out inputs and submitting', () => {
            it('can type in text inputs', () => {
                nameInput()
                .should('have.value', '')
                .type('Shane Slone')
                .should('have.value', 'Shane Slone')
                instructionsInput()
                .should('have.value', '')
                .type('Don\'t burn it this time')
                .should('have.value', 'Don\'t burn it this time')
            })
            it('can check more then 1 checkbox for toppings', () => {
                pepperoniInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
                sausageInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
                mushroomsInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
                pineappleInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            })
            it('can submit from', () => {
                nameInput().type('Shane Slone')
                sizeSelect().select('small')
                pepperoniInput().check()
                instructionsInput().type('I want garlic butter')
                sumbitBtn().click()
            })
           
        })
   
})