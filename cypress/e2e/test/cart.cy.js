/// <reference types="cypress" />
describe("casos de pruebas login",()=>{

        it("Funcionalidad del botón “Add to cart” de la página principal",()=>{
            //login
            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type("standard_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click() 
            //boton add to cart
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            
        })


})