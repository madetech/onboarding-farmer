window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('amount');
    const form = document.getElementById('cornForm');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resultP.innerText = `£${(bagsInput.value * 50 / 100).toFixed(2)}`
    });
});

function calculateTransportCost(amountOfCornBags) {
    return Math.max(0,(amountOfCornBags * 50 / 100) - 0.25);
}

module.exports = {
    calculateTransportCost
}