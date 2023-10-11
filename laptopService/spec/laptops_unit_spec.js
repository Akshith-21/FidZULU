let request = require("request");
let laptops = require("../dao/laptops");

describe("Unit tests on laptops module", () => {
    
    describe("load laptops with taxes", () => {
        it("with location India", async () => {
            let results =await laptops.query_by_arg("IN");
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);
        });
        it("with location Ireland",async () => {
            let results = await laptops.query_by_arg("IE");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);


        });
        it("with location US",async () => {
            let results = await laptops.query_by_arg("US-NC");
            expect(results[0].price).toBeGreaterThan(-1);
            expect(results[0].price.toString()).toMatch(/^\d+\.\d{2}$/);


        });
        it("with invalid location China", () => {
            expect( () => {
                laptops.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});