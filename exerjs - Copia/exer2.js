//5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como
//parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.


/*const valorHoraTrab = (salario) => {
  const total = salario / 160;
  return `R$ ${total.toFixed(2).replace(' . ', ' ,')} `;
}
valorHoraTrab(6500);

//6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em
//centímetros e o peso em quilogramas. Em seguida, execute a função, testando
//diferentes valores.


 function imc (peso, altura){
   const total = peso / (altura ** 2);
   return total;
 }

 //7. Crie uma função que receba uma string em minúsculas, converta-a em
//maiúsculas e as retorne.
//Investigue o que o método de .toUpperCase() faz.

const fraseMaiscula = (frase) => {
  return frase.toUpperCase();
}
fraseMaiscula('tudo maisculo');

//8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste
//parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz

function paramentro= (cachorro) => {
  return typeof cachorro;
}


//9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a
//circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

 function raioCirc = (raio) => {
   const total = 2 * Math.PI * raio;
   return parseFloat(total.toFixed(2));
 }
 raioCirc(5);




let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "lavida es bella"]
peliculas.forEach((lista) => {
  console.log(lista.toUpperCase());
});
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let copa = ["1959, 1962, 1970, 1994, 2002"]

// for (let i = 0; i < copa.length; i ++){
 console.log("Brasil ganhou"  + copa[i])

}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
  frutas.forEach((item)=>{
    console.log(item.toUpperCase());
    
  });



  var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
  // for(let frut= 0; item < frutas.length; frut++){
    console.log(frutas[item]);
    if(frutas[fruta]=== "Pera"){
      break;
    }
  }
  

  
  function impares() {
    // for(let i = 0; i <= 10; i++){
      if ((i % 2)== 1){
        console.log('aqui eu tenho o valor de ' + i);
      }
    }
  }
  impares();

 

  function tabuada(...itens) {
    console.log(itens);
    itens.forEach(function(item){
      // for (let i=0; i <=10; i++){
        console.log(`${item}X${i} = ${item*i}`);

      }
      console.log('--------------');
    });
  }

  tabuada(1, 2, 3, 4);
  

  //Exiba numeros de 0 a 10
  
// for(let i=0; i<=10; i++){
  console.log(i)
}
   
  
  //Exiba numeros pares 0 a 10
  function par(){
    // for(let i=0; i <= 30; i++){
      if((i % 2)==0){
        console.log('os numeros pares' + i);
      }
    }
  }
  par();
  //Exiba multiplos de 5 de 0 a 30
  function multiplos(){
  // for (let i=0; i <= 30; i++){
    if ((i % 5)== 0){
      console.log('multiplos' + i);
        }
   }
 }  
  multiplos();
  ---------//----------------
  ou 
  function multiplos(numero=30){
  // for (let i=0; i <=numero; i++){
    if(i % 5 == 0 && i !== 0){
      console.log('multiplos'+i);
        }
   }
 }  
  multiplos();
  //Exiba numeros de 10 a 1 em ordem descrente
// for(let i=10; i>=0;i--){
//console.log(i)
//}
  //Receba 30 valores de salario. Calcule e exiba o total de salários
  //Receba 30 valores de salario. Calcule e exiba o média de salários
  function valorSalario(salario){
    let total=0
    for (let i=0; i < salario.length; i++){
      total= salario[i] + total;
     
   }
   return total/2; //você pode fazer o total dividido pelo tamanho do seu array
   }
    
valorSalario([2.000, 3.000, 5.000])
*/
//D.Timbinha foi ao açougue e comprou 1kg de carne. Receba quanto ela tinha de dinheiro e quanto custou a carne. Calcule e exiba o valor do troco.

