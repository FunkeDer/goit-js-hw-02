function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let finalPrice = pricePerDroid * quantity;
    if( finalPrice > customerCredits){
        return "Insufficient funds!"
    } else {
        return `You ordered ${quantity} droids worth ${finalPrice} credits!`
    }
}