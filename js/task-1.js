function makeTransaction(quantity, pricePerDroid, customerCredits) {
    if( quantity * pricePerDroid > customerCredits){
        console.log("Insufficient funds!")
    } else {
        console.log ( `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`)
    }
}