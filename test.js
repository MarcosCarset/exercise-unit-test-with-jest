

//Proyecto
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba de la función fromEuroToDollar
test("One euro should be 1.07 dollars", () => {
    const total = fromEuroToDollar(3.5);
    expect(total).toBe("3.75"); // 3.5 * 1.07 = 3.745, redondeado a "3.75"
});

// Prueba de la función fromDollarToYen
test("One dollar should be 146.26 yen", () => {
    const total = fromDollarToYen(10);
    expect(total).toBe("1462.62"); // (10 / 1.07) * 156.5
});

// Prueba de la función fromYenToPound
test("One yen should be 0.00556 pounds", () => {
    const total = fromYenToPound(1000);
    expect(total).toBe("5.56"); // (1000 / 156.5) * 0.87
});