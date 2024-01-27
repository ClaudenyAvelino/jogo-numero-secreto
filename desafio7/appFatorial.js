/*
//let n ;
function fatorial(){
    for (let index = 0; index < n; index++) {
        console.log(n)
        i++;
        
    }

}
fatorial(10);
*/
/*
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(0));
  */

  function factorialize(num) {
    // Passo 1. Criar uma variável result para armazenar o valor de num
    var result = num;
     
    // Se num = 0 OU num = 1, o fatorial retornará 1
    if (num === 0 || num === 1) 
      return 1; 
   
    // Passo 2. Criar o laço WHILE 
    while (num > 1) { 
      num--; // diminuir 1 a cada iteração
      result = result * num; // ou result *= num; 
      /* 
                      num           num--      var result      result *= num         
      1ª iteração:   5             4            5             20 = 5 * 4      
      2ª iteração:   4             3           20             60 = 20 * 3
      3ª iteração:   3             2           60            120 = 60 * 2
      4ª iteração:   2             1          120            120 = 120 * 1
      5ª iteração:   1             0          120
      Fim do laço WHILE 
      */
    }       
    // Passo 3. Retornar o fatorial do inteiro fornecido
    return result; // 120
  }
  factorialize(5);