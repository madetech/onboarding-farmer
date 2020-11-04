const { calculateTransportCost } = require('./index.js');

describe("handler", () => {
    it("calculates correct transportation cost", async () => {
        const result = calculateTransportCost(0);
        expect(result).toBe(0);
    });
})