function getShippingMessage(county, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return (`Shipping to ${county} will cost ${totalPrice} credits`);
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));