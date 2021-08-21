// memory selection and cost calculation function
function memoryCost(memorySize) {

    if (memorySize == 8) {
        document.getElementById('extra-memory-cost').innerText = parseFloat('0');

    }
    if (memorySize == 16) {
        document.getElementById('extra-memory-cost').innerText = parseFloat('180');
    }
}
// storage selection and cost calculation function 
function storageCost(storageSize) {
    const extraStorageCostField = document.getElementById('extra-storage-cost');
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
// calculate sub total 
function subTotal() {
    const bestPriceFieldText = document.getElementById('best-price').innerText;
    const bestPriceAmount = parseFloat(bestPriceFieldText);

    const extraMemoryCostFieldText = document.getElementById('extra-memory-cost').innerText;
    const extraMemoryCostAmount = parseFloat(extraMemoryCostFieldText);

    const extraStorageCostFieldText = document.getElementById('extra-storage-cost').innerText;
    const extraStorageCostAmount = parseFloat(extraStorageCostFieldText);

    const deliveryChargeFieldText = document.getElementById('delivery-charge').innerText;
    const deliveryChargeAmount = parseFloat(deliveryChargeFieldText);

    const subTotalField = document.getElementById('sub-total');
    const totalField = document.getElementById('total-price');
    const totalCalculation = bestPriceAmount + extraMemoryCostAmount + extraStorageCostAmount + deliveryChargeAmount;
    subTotalField.innerText = totalCalculation;
    totalField.innerText = totalCalculation;
}

// handle memory selection 
document.getElementById('memory-8gb-btn').addEventListener('click', function () {
    memoryCost(8);
    subTotal();
});
document.getElementById('memory-16gb-btn').addEventListener('click', function () {
    memoryCost(16);
    subTotal();
});

// handle storage selection 
document.getElementById('storage-256gb-btn').addEventListener('click', function () {
    storageCost(256);
    subTotal();
});
document.getElementById('storage-512gb-btn').addEventListener('click', function () {
    storageCost(512);
    subTotal();
});
document.getElementById('storage-1tb-btn').addEventListener('click', function () {
    storageCost(1024);
    subTotal();
});

// handle delivery option selection
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    deliveryCharge('free');
    subTotal();
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    deliveryCharge('paid');
    subTotal();
});

// handle promo code 
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput == 'stevekaku') {
        const totalField = document.getElementById('total-price');
        const totalAmount = parseFloat(totalField.innerText);
        const discount = (20 / 100) * totalAmount;

        totalField.innerText = totalAmount - discount;

        // disabling promo button after applying promo code
        document.getElementById('promo-button').setAttribute('disabled', true);
    }
});
