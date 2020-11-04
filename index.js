window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('amount');
    const form = document.getElementById('cornForm');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resultP.innerText = `£${calculateTransportCostWhenYouOnlyHaveCornBags(bagsInput.value).toFixed(2)}`
    });
});

function arrayOfN(n) {
    return Array(n).fill();
}

function isEven(n) {
    return n % 2 === 0 
}

function calculateTransportCostWhenYouOnlyHaveCornBags(amountOfCornBags) {
    return Math.max(0,(amountOfCornBags * 50 / 100) - 0.25);
}

function calculatePlan(cornBags, geese) {
    if(geese === 0 && cornBags === 0) {
        return {
            steps: [
                {
                    direction: "market",
                    carrying: "nothing"
                }
            ],
            possible: true,
            cost: 0.25
        };
    }
    if (geese === 0) {
        return {
            cost: calculateTransportCostWhenYouOnlyHaveCornBags(cornBags),
            possible: true,
            steps: arrayOfN(cornBags * 2 - 1).map((_, i) => ({
                direction: isEven(i) ? 'market' : 'farm',
                carrying: isEven(i) ? 'corn': 'nothing'
            }))
        }
    }

    
}

module.exports = {
    calculateTransportCostWhenYouOnlyHaveCornBags,
    calculatePlan
}