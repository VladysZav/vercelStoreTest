export  class Page{
    navigate = () => {
        cy.visit("https://demo.vercel.store/")
        }
    acceptcookiesbuttonClick= () => cy.contains('button', 'Accept cookies').click()
    newArrivalsButtonClick= () => cy.contains('a', 'New Arrivals').click()
    featuredButtonClick= () => cy.contains('a', 'Featured').click()
    acmeCupButtonClick= () => cy.contains('span', 'ACME Cup').click()
    quarterZipClick= () => cy.contains('span', 'Quarter Zip').click()
    addToCartButtonClick= () => cy.contains('button', 'Add To Cart').click()
    addProductButtonClick= () => cy.get('section div ul li div button~button~button').click()
    closeButtonClick= () => cy.get('button[aria-label="Close"]').click()
    sizeButtonClick= () => cy.get('button[aria-label="size m"]').click()
    proceedButtonClick= () => cy.contains('a','Proceed to Checkout').click()
    checkTotal125Price= () => cy.contains('span', '$125.00').should('be.visible')
    checkTotal215Price= () => cy.contains('span', '$215.00').should('be.visible')
    enterPhoneNumber= () => cy.get('[placeholder="Email or mobile phone number"]').type('0501111111')
    enterLastName= () => cy.get('[placeholder="Last name"]').type('Smith')
    enterAddress= () => cy.get('[placeholder="Address"]').type('1st Street')
    enterCity= () => cy.get('[placeholder="City"]').type('York')
    enterPostalCode= () => cy.get('[placeholder="Postal code"]').type('63100')
    continueButtonClick= () => cy.get('[id="continue_button"]').click()
    priorityMailInternationalButtonClick= () => cy.get('[data-shipping-method="usps-PriorityMailInternational-58.26"]').click()
    continueToPaymentButtonClick= () => cy.contains('span','Continue to payment').click()
    cantAcceptPaymentCheck= () => cy.contains('p', 'This store can’t accept payments right now.').should('be.visible')
}