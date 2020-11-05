window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('corn');
    const geeseInput = document.getElementById('geese');
    const form = document.getElementById('form');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const corn = parseInt(bagsInput.value);
        const geese = parseInt(geeseInput.value);
        const result = calculatePlan(corn, geese);

        if(!result.possible) {
            resultP.innerText = 'This is not possible without losing corn'
            return;
        }

        const planMessage = result.steps.map(({direction, carrying}) => `Travel to ${direction} with ${carrying}`).join('\n');

        resultP.innerText = 'Here is your travel plan: \n' + planMessage;

    });
});

function arrayOfN(n) {
    return Array(n).fill();
}

function isEven(n) {
    return n % 2 === 0
}

function getStepsCost(steps) {
    return steps.length * 0.25;
}

function calculatePlan(cornBags, geese) {

    if (geese === 2 && cornBags === 1) {
        const steps = [
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
        ];
        return {
            steps,
            cost: getStepsCost(steps),
            possible: true,
        };
    }

    if (geese === 1 && cornBags === 2) {
        const steps = [
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
        ];
        return {
            steps,
            cost: getStepsCost(steps),
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
            cost: 0.75,
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
            cost: 0.25,
            possible: true,
        };
    }

    if (geese === 0) {
        const steps = arrayOfN(cornBags * 2 - 1).map((_, i) => ({
            direction: isEven(i) ? 'market' : 'farm',
            carrying: isEven(i) ? 'corn' : 'nothing'
        }));
        return {
            steps,
            cost: getStepsCost(steps),
            possible: true,
        }
    }
    if (cornBags === 0) {
        const steps = arrayOfN(geese * 2 - 1).map((_, i) => ({
            direction: isEven(i) ? 'market' : 'farm',
            carrying: isEven(i) ? 'goose' : 'nothing'
        }));
        return {
            steps,
            cost: getStepsCost(steps),
            possible: true,
        }
    }

    return {possible: false}
}

if(typeof module !== 'undefined') {
    module.exports = {
        calculatePlan
    }
}