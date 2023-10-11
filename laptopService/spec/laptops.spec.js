const request = require('request');
const app = require('../index');
var http = require('http');

// Mock your route dependencies

const base_url = 'http://localhost:3002/';
const toys_url = base_url + 'laptops/all/IN';
const not_found_url = base_url + 'laptops/';

app.set('port', 3002);

describe("Toys server  endpoint tests", function () {
    let server;

    beforeAll(() => {
        server = http.createServer(app);
        server.listen(3002);
    });
  
    afterAll((done) => {
        
      server.close(done); // Shutdown the server after tests are complete
    });
    
    describe("GET /toys/all/IN", () => {
        it("returns status code 200",  (done) => {
            request.get(toys_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains price", (done) => {
            request.get(toys_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("price");
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /toys/", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    describe("GET /toys/China", () => {
        it("returns status code 404",  (done) => {
            request.get(not_found_url + "China", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});