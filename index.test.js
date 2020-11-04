const { calculateTransportCostWhenYouOnlyHaveCornBags, calculatePlan } = require('./index.js');

describe("handler", () => {

    it("calculates transportation plan for 1 corn bag and 0 geese", async () => {
        const result = calculatePlan(1, 0);
        expect(result.possible).toBe(true);
        expect(result.cost).toBe(0.25);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "corn"
            }
        ]);
    });

    it("calculates correct transportation costs for 2 bags", async () => {
        const result = calculateTransportCostWhenYouOnlyHaveCornBags(2);
        expect(result).toBe(0.75);
    });

    it("calculates correct transportation costs for 15 bags", async () => {
        const result = calculateTransportCostWhenYouOnlyHaveCornBags(15);
        expect(result).toBe(7.25);
    });

    it("calculates transportation plan for 0 corn bags and 0 geese", async () => {
        const result = calculatePlan(0, 0);
        expect(result.possible).toBe(true);
        expect(result.cost).toBe(0.25);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "nothing"
            }
        ]);
    });
})