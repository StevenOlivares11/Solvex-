/// <reference types="cypress" />
describe("casos de pruebas login",()=>{

    it("Contraseña y usuarios correctos",()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should("eq","https://www.saucedemo.com/inventory.html")
    })

    it("Contraseña y usuarios inválidos",()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("sabumafu")
        cy.get('[data-test="password"]').type("picalonga8")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should("contain","Epic sadface: Username and password do not match any user in this service")
    })

    it("")
})