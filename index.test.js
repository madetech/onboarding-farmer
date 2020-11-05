const { calculateTransportCostWhenYouOnlyHaveCornBags, calculatePlan } = require('./index.js');

describe('boat capacity one', () => {
    describe("possible-scenarios", () => {

        it("calculates transportation plan for 0 corn bags and 0 geese", async () => {
            const result = calculatePlan(0, 0);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 0 corn bags and 1 geese", async () => {
            const result = calculatePlan(0, 1);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 0 corn bags and 2 geese", async () => {
            const result = calculatePlan(0, 2);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 0 corn bags and 100 geese", async () => {
            const result = calculatePlan(0, 100);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 1 corn bags and 0 geese", async () => {
            const result = calculatePlan(1, 0);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 2 corn bags and 0 geese", async () => {
            const result = calculatePlan(2, 0);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 100 corn bags and 0 geese", async () => {
            const result = calculatePlan(100, 0);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 1 corn bags and 1 geese", async () => {
            const result = calculatePlan(1, 1);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 1 corn bags and 2 geese", async () => {
            const result = calculatePlan(1, 2);
            expect(result.possible).toBe(true);
        });
    
        it("calculates transportation plan for 2 corn bags and 1 geese", async () => {
            const result = calculatePlan(2, 1);
            expect(result.possible).toBe(true);
        });
    })
    
    describe("impossible-scenarios", () => {
    
        it("calculates transportation plan for 2 corn bags and 2 geese", async () => {
            const result = calculatePlan(2, 2);
            expect(result.possible).toBe(false);
        });
    
        it("calculates transportation plan for 3 corn bags and 1 geese", async () => {
            const result = calculatePlan(3, 1);
            expect(result.possible).toBe(false);
        });
    
        it("calculates transportation plan for 1 corn bags and 3 geese", async () => {
            const result = calculatePlan(1, 3);
            expect(result.possible).toBe(false);
        });
    
        it("calculates transportation plan for 10 corn bags and 15 geese", async () => {
            const result = calculatePlan(10, 15);
            expect(result.possible).toBe(false);
        });
    })
    
    describe("plan steps", () => {
    
        it("calculates transportation plan for 0 corn bags and 0 geese", async () => {
            const result = calculatePlan(0, 0);
            expect(result.steps).toEqual([
                {
                    direction: "market",
                    carrying: "nothing"
                }
            ]);
        });
    
        it("calculates transportation plan for 1 corn bag and 0 geese", async () => {
            const result = calculatePlan(1, 0);
            expect(result.steps).toEqual([
                {
                    direction: "market",
                    carrying: "corn"
                }
            ]);
        });
    
        it("calculates transportation plan for 0 corn bag and 1 geese", async () => {
            const result = calculatePlan(0, 1);
            expect(result.steps).toEqual([
                {
                    direction: "market",
                    carrying: "goose"
                }
            ]);
        });
    
        it("calculates transportation plan for 1 corn bag and 1 geese", async () => {
            const result = calculatePlan(1, 1);
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
                    carrying: "corn"
                }
            ]);
        });
    
        it("calculates transportation plan for 1 corn bag and 2 geese", async () => {
            const result = calculatePlan(1, 2);
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
                    carrying: "goose"
                },
                {
                    direction: "farm",
                    carrying: "corn"
                },
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
                    carrying: "corn"
                }
            ]);
        });
    
        it("calculates transportation plan for 2 corn bag and 1 geese", async () => {
            const result = calculatePlan(2, 1);
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
                    carrying: "corn"
                },
                {
                    direction: "farm",
                    carrying: "goose"
                },
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
                    carrying: "goose"
                }
            ]);
        });
    
        it("calculates transportation plan for 2 corn bag and 0 geese", async () => {
            const result = calculatePlan(2, 0);
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
    
        it("calculates transportation plan for 0 corn bag and 3 geese", async () => {
            const result = calculatePlan(0, 3);
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
    
        it("calculates transportation plan for 3 corn bag and 0 geese", async () => {
            const result = calculatePlan(3, 0);
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
    });
    
    describe("costs", () => {
    
        it("calculates cost when travelling to market without animals to show off app", async () => {
            const result = calculatePlan(0, 0);
            expect(result.cost).toBe(0.25);
        });
        it("calculates cost for 1 corn bag and 0 geese", async () => {
            const result = calculatePlan(1, 0);
            expect(result.cost).toBe(0.25);
        });
        it("calculates cost for 0 corn bag and 1 geese", async () => {
            const result = calculatePlan(0, 1);
            expect(result.cost).toBe(0.25);
        });
        it("calculates cost for 1 corn bag and 1 geese", async () => {
            const result = calculatePlan(1, 1);
            expect(result.cost).toBe(0.75);
        });
        it("calculates cost for 2 corn bag and 1 geese", async () => {
            const result = calculatePlan(2, 1);
            expect(result.cost).toBe(1.75);
        });
        it("calculates cost for 1 corn bag and 2 geese", async () => {
            const result = calculatePlan(1, 2);
            expect(result.cost).toBe(1.75);
        });
        it("calculates cost for 0 corn bag and 15 geese", async () => {
            const result = calculatePlan(0, 15);
            expect(result.cost).toBe(7.25);
        });
        it("calculates cost for 15 corn bag and 0 geese", async () => {
            const result = calculatePlan(0, 15);
            expect(result.cost).toBe(7.25);
        });
    });    
});

describe('boat capacity of two', () => {
    it("calculates transportation plan for 0 corn bags and 0 geese with a boat having capacity 2", async () => {
        const result = calculatePlan(0, 0, 2);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "nothing"
            }
        ]);
    });

    it("calculates transportation plan for 1 corn bags and 0 geese with a boat having capacity 2", async () => {
        const result = calculatePlan(1, 0, 2);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "corn"
            }
        ]);
    });

    it("calculates transportation plan for 0 corn bags and 1 goose with a boat having capacity 2", async () => {
        const result = calculatePlan(0, 1, 2);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: "goose"
            }
        ]);
    });

    it("calculates transportation plan for 1 corn bags and 1 geese with a boat having capacity 2", async () => {
        const result = calculatePlan(1, 0, 2);
        expect(result.steps).toEqual([
            {
                direction: "market",
                carrying: ["corn", "goose"]
            }
        ]);
    });
});