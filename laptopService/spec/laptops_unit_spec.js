let request = require("request");
let laptops = require("../dao/laptops");

describe("Unit tests on laptops module", () => {
    
    describe("load all laptops", () => {
        it("have seven elements", async () => {
            let results = await laptops.getLaptops("IN");
            expect(results.length).toBe(7);
        });
        
    });
    describe("load laptops with taxes", () => {
        it("with location IN", async () => {
            let results = await laptops.getLaptops("IN");
            expect(results[0].price).toBe(68557.02);
        });
        it("with location IE", async () => {
            let results = await laptops.getLaptops("IE");
            expect(results[0].price).toBe(809.33);
        });
        it("with invalid location China",async  () => {
            expect( () => {
                laptops.getLaptops("China");
                expect(results).toBeNull();
            })
        });
       
    });

});