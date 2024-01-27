

function converteDola(dolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = cotacaoDolar* dolar;
    console.log(`${dolar} dólares equivalem a R$${valorEmReais.toFixed(2)}`);
}
converteDola(10);