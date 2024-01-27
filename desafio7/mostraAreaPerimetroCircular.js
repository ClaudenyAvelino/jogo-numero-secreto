
function mostaraAreaPerimetro(raio){
   let perimetro = 2 * (Math.PI * raio);
   let area = Math.PI * raio * raio;

    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro.toFixed(2)} metros`);
}
mostaraAreaPerimetro(4);