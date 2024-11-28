
//Proyecto
let oneEuroIs = {
    "YEN": 156.5, // Yen japonés
    "DOLAR": 1.07,  // Dólar estadounidense
    "LIBRA": 0.87   // Libra esterlina
};

// Función para convertir de EUROS a DOLARES
const fromEuroToDollar = (euroAmount) => (euroAmount * oneEuroIs.DOLAR).toFixed(2);

// Función para convertir de DOLARES a YENES
const fromDollarToYen = (dollarAmount) => {
    let euroAmount = dollarAmount / oneEuroIs.DOLAR;
    return (euroAmount * oneEuroIs.YEN).toFixed(2);
};

// Función para convertir de YEN a LIBRA
const fromYenToPound = (yenAmount) => {
    let euroAmount = yenAmount / oneEuroIs.YEN;
    return (euroAmount * oneEuroIs.LIBRA).toFixed(2);
};

// Exportar las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };