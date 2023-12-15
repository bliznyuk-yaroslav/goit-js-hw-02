'use strict';
function makeTransaction (quantity, pricePerDroid ) {
    const totalPrice= quantity*pricePerDroid;
    // const result = `You ordered ${quantity} droids worth ${totalPrice} credits!`; Спочатку зробив з цією змінною, але подумав
    //  що для скорочення коду можна не використовувати її.
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500))