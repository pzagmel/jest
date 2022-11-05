function sum (a,b) {
    return a + b
}
//console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    let dollar = oneEuroIs.USD*euro
    return dollar;
}
console.log(fromEuroToDollar(10))

function fromDollarToYen(dollar){
    let yen= Math.floor((dollar*oneEuroIs.JPY)/oneEuroIs.USD)
    return yen;
}
console.log(fromDollarToYen(12))

function fromYenToPound(yen){
    let pound= Math.floor((yen*oneEuroIs.GBP)/oneEuroIs.JPY)
    return pound;
}
console.log(fromYenToPound(1279))
// solo un registro en consola para nosotros.
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};

