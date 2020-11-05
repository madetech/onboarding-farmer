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

    it("calculates transportation plan for 2 corn bag and 0 geese", async () => {
        const result = calculatePlan(2, 0);
        expect(result.possible).toBe(true);
        expect(result.cost).toBe(0.75);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "corn"
            },
            {
                direction: "farm",
                carrying: "nothing"
            },
            {
                direction: "market",
                carrying: "corn"
            }
        ]);
    });

    it("calculates transportation plan for 0 corn bag and 2 geese", async () => {
        const result = calculatePlan(0, 2);
        expect(result.possible).toBe(true);
        expect(result.cost).toBe(0.75);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "goose"
            },
            {
                direction: "farm",
                carrying: "nothing"
            },
            {
                direction: "market",
                carrying: "goose"
            }
        ]);
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