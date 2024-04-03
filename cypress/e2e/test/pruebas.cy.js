/// <reference types="cypress" />

    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let divide = (a,b)  => a /b;
    let multiply = (a,b) => a *b;  

describe('unit testing for our dummy application' , ()=>{

       context('math with POSITIVE numbers', ()=>{
        it("should add positive numbers",()=>{
            expect(add(1,2)).to.eq(3);
        });

        it("should subtract positive numbers",()=>{
            expect(subtract(4,2)).to.eq(2);
        });

        it("should divide positive numbers",()=>{
            expect(divide(6,2)).to.eq(3);
        });

        it("should multiply positive numbers",()=>{
            expect(multiply(5,2)).to.eq(10);
        });
        
       });

       context('math with DECIMAL numbers', ()=>{
        it("should add decimal numbers",()=>{
            expect(add(2.2, 2.2)).to.eq(4.4);
        });

        it("should subtract decimal numbers",()=>{
            expect(subtract(4,4, 2.2)).to.eq(2.2);

        });

       });

    });