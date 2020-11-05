window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('amount');
    const form = document.getElementById('cornForm');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resultP.innerText = `£${calculateCostWhenYouOnlyCarryOneType(bagsInput.value).toFixed(2)}`
    });
});

function arrayOfN(n) {
    return Array(n).fill();
}

function isEven(n) {
    return n % 2 === 0
}

function calculateCostWhenYouOnlyCarryOneType(amountOfCornBags) {
    return Math.max(0, (amountOfCornBags * 50 / 100) - 0.25);
}

function calculatePlan(cornBags, geese) {

    if (geese === 2 && cornBags === 1) {
        return {
            steps: [
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
            ],
            possible: true,
        };
    }

    if (geese === 1 && cornBags === 2) {
        return {
            steps: [
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
            ],
            possible: true,
        };
    }

    if (geese === 1 && cornBags === 1) {
        return {
            steps: [
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
            ],
            possible: true,
        };
    }

    if (geese === 0 && cornBags === 0) {
        return {
            steps: [
                {
                    direction: "market",
                    carrying: "nothing"
                }
            ],
            possible: true,
        };
    }

    if (geese === 0) {
        return {
            cost: calculateCostWhenYouOnlyCarryOneType(cornBags),
            possible: true,
            steps: arrayOfN(cornBags * 2 - 1).map((_, i) => ({
                direction: isEven(i) ? 'market' : 'farm',
                carrying: isEven(i) ? 'corn' : 'nothing'
            }))
        }
    }
    if (cornBags === 0) {
        return {
            cost: calculateCostWhenYouOnlyCarryOneType(geese),
            possible: true,
            steps: arrayOfN(geese * 2 - 1).map((_, i) => ({
                direction: isEven(i) ? 'market' : 'farm',
                carrying: isEven(i) ? 'goose' : 'nothing'
            }))
        }
    }

    return {possible: false}
}

module.exports = {
    calculatePlan
}