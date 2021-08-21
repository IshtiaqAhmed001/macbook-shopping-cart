// memory selection and cost calculation 
function memoryCost(memorySize) {
    const subTotalField = document.getElementById('sub-total');
    const subTotalValue = subTotalField.innerText;
    if (memorySize == 8) {
        document.getElementById('extra-memory-cost').innerText = parseFloat('0');
        subTotalField.innerText = parseFloat(subTotalValue) + 0;
    }
    if (memorySize == 16) {
        document.getElementById('extra-memory-cost').innerText = parseFloat('180');
        subTotalField.innerText = parseFloat(subTotalValue) + 180;
    }
}

document.getElementById('memory-8gb-btn').addEventListener('click', function () {
    memoryCost(8);
});
document.getElementById('memory-16gb-btn').addEventListener('click', function () {
    memoryCost(16);
});