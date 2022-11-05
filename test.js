const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', function() {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test ('10 euros son 12 dolares', function(){
    let total= fromEuroToDollar (10)
    expect(total).toBe(12);
})
test ('12 dolares son 1279 yenes', function(){
    let total= fromDollarToYen (12)
    expect(total).toBe(1279);
})
test ('1279 yenes son 8 pounds', function(){
    let total= fromYenToPound (1279)
    expect(total).toBe(8);
})