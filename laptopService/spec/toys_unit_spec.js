let request = require("request");
let toys = require("../dao/toys");

describe("Unit tests on toys module", () => {
    describe("load all toys", () => {
        it("have four elements", () => {
            let results = toys.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load toys with taxes", () => {
        it("with location Raleigh", () => {
            let results = toys.query_by_arg("Raleigh");
            expect(results[0].prize).toBe("21.94");
        });
        it("with location Durham", () => {
            let results = toys.query_by_arg("Durham");
            expect(results[0].prize).toBe("22.04");
        });
        it("with invalid location China", () => {
            expect( () => {
                toys.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});