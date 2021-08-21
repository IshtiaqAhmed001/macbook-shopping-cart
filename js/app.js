// memory selection and cost calculation function
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
// storage selection and cost calculation function 
function storageCost(storageSize) {
    const extraStorageCostField = document.getElementById('extra-storage-cost');
    const subTotalField = document.getElementById('sub-total');
    const subTotalValue = subTotalField.innerText;
    if (storageSize == 256) {
        extraStorageCostField.innerText = parseFloat('0');

    }
    if (storageSize == 512) {
        extraStorageCostField.innerText = parseFloat('100');

    }
    if (storageSize == 1024) {
        extraStorageCostField.innerText = parseFloat('180');
    }
}

// delivery charge calculation 
function deliveryCharge(deliveryOption) {
    if (deliveryOption == 'free') {
        document.getElementById('delivery-charge').innerText = parseFloat('0');
    }
    if (deliveryOption == 'paid') {
        document.getElementById('delivery-charge').innerText = parseFloat('20');
    }
}
// handle memory selection 
document.getElementById('memory-8gb-btn').addEventListener('click', function () {
    memoryCost(8);
});
document.getElementById('memory-16gb-btn').addEventListener('click', function () {
    memoryCost(16);
});

// handle storage selection 
document.getElementById('storage-256gb-btn').addEventListener('click', function () {
    storageCost(256);
});
document.getElementById('storage-512gb-btn').addEventListener('click', function () {
    storageCost(512);
});
document.getElementById('storage-1tb-btn').addEventListener('click', function () {
    storageCost(1024);
});

// handle delivery option selection
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    deliveryCharge('free');
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    deliveryCharge('paid');
});
