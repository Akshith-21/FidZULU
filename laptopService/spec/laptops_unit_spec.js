let request = require("request");
let laptops = require("../dao/laptops");

describe("Unit tests on laptops module", () => {
    describe("load all laptops", () => {
        it("have four elements", () => {
            let results = laptops.list();
            expect(results.length).toBe(7);
        });
        
    });
    describe("load laptops with taxes", () => {
        it("with location IN", () => {
            let results = laptops.query_by_arg("IN");
            expect(results[0].price).toBe(752.49);
        });
        it("with location IRE", () => {
            let results = laptops.query_by_arg("IRE");
            expect(results[0].price).toBe(1455.98);
        });
        it("with invalid location China", () => {
            expect( () => {
                laptops.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});