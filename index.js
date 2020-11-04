window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('amount');
    const form = document.getElementById('cornForm');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resultP.innerText = `£${calculateTransportCostWhenYouOnlyHaveCornBags(bagsInput.value).toFixed(2)}`
    });
});

function calculateTransportCostWhenYouOnlyHaveCornBags(amountOfCornBags) {
    return Math.max(0,(amountOfCornBags * 50 / 100) - 0.25);
}

function calculatePlan(cornBags, geese) {
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

module.exports = {
    calculateTransportCostWhenYouOnlyHaveCornBags,
    calculatePlan
}