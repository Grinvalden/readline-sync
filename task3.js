const calculateDiscount = (price, discountPercentage) => {
    const discount = price * discountPercentage / 100;
    const priceWithDiscountPercentage = price - discount;
    return console.log(priceWithDiscountPercentage);
}
calculateDiscount(700, 20);