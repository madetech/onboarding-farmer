window.addEventListener('load', (event) => {
    const bagsInput = document.getElementById('amount');
    const form = document.getElementById('cornForm');
    const resultP = document.getElementById('result');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resultP.innerText = `£${(bagsInput.value * 50 / 100).toFixed(2)}`
    });
});

export function calculateTransportCost(amountOfCornBags) {
    return amountOfCornBags * 50 / 100;
}