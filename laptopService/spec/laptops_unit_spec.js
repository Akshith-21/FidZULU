let request = require("request");
let laptops = require("../dao/laptops");

describe("Unit tests on laptops module", () => {
    
    describe("load all laptops", () => {
        it("have four elements", async () => {
            let results = await laptops.query_by_arg("IN");
            expect(results.length).toBe(7);
        });
        
    });
    describe("load laptops with taxes", () => {
        it("with location IN", async () => {
            let results = await laptops.query_by_arg("IN");
            expect(results[0].price).toBe(107733.02);
        });
        it("with location IRE", async () => {
            let results = await laptops.query_by_arg("IRE");
            expect(results[0].price).toBe(1271.81);
        });
        it("with invalid location China",async  () => {
            expect( () => {
                laptops.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});