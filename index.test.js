const { calculateTransportCost } = require('./index.js');

describe("handler", () => {
    it("calculates correct transportation costs for zero bags", async () => {
        const result = calculateTransportCost(0);
        expect(result).toBe(0);
    });

    it("calculates correct transportation costs for 1 bags", async () => {
        const result = calculateTransportCost(1);
        expect(result).toBe(0.25);
    });

    it("calculates correct transportation costs for 2 bags", async () => {
        const result = calculateTransportCost(2);
        expect(result).toBe(0.75);
    });

    it("calculates correct transportation costs for 15 bags", async () => {
        const result = calculateTransportCost(15);
        expect(result).toBe(7.25);
    });
})