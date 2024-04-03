/// <reference types="cypress" />
describe("casos de pruebas login",()=>{

    it("Sign up",()=>{
       cy.visit("https://auth.driverskore.com/login?client_id=4cs7t0d0kr2a1dhvhcs345ojru&response_type=code&scope=aws.cognito.signin.user.admin+openid&redirect_uri=https%3A%2F%2Fapp.driverskore.com%2Flogin") 
       cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(10) > .redirect-customizable > a').click())
       cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > .form-control').type("OlivaresSteven11@gmail.com"))
       cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > [name="password"]').type("Tumadreylamia01@")) 
       cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn').click())
     //dara error por que ya el correo esta registrado//
    });

    it("sign in",()=>{
        cy.visit("https://auth.driverskore.com/login?client_id=4cs7t0d0kr2a1dhvhcs345ojru&response_type=code&scope=aws.cognito.signin.user.admin+openid&redirect_uri=https%3A%2F%2Fapp.driverskore.com%2Flogin") 
        cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername').type("Olivaressteven11@gmail.com"))
        cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword').type("Tumadreylamia01@"))
        cy.get(cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn').click())





    })








    })

    






