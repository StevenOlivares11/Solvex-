/// <reference types="cypress" />

describe("full purchase process", ()=>{

    it('Proceso de compra completo', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should("eq","https://www.saucedemo.com/inventory.html")
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Steven')
        cy.get('[data-test="lastName"]').type('Olivares')
        cy.get('[data-test="postalCode"]').type(11011)
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.url().should("eq","https://www.saucedemo.com/checkout-complete.html")

    })
   

})