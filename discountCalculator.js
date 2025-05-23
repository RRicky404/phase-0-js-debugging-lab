function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) { // i should equal 0. starting at 1 skips first item
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

console.log(calculateDiscountedPrice(10, 20))


module.exports = calculateDiscountedPrice;