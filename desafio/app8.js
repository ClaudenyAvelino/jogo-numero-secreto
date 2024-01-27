
function saudacao(){
    console.log('Olá, mundo!');
}
saudacao();


function seuNome(nome){
console.log(`Olá ${nome}`);
}
seuNome('Alice');

function dobro(numero){
    return console.log(numero*2);
    }
    dobro(10);

    function media(numero1,numero2,numero3){
        return console.log((numero1+numero2+numero3)/3);
        }
        media(7,4,10);

        function encontraMaior(a,b){
            let maior;
            if (a > b) {
                maior = a
            }if (b > a) {
                maior = b
            }
            return console.log(maior);
            }
            encontraMaior(15,9);
    
            function quadrdo(a){
                return console.log(a*a);
                }
                quadrdo(5);