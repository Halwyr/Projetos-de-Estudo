// Cria um array para armazenar as células.
const notas = [100, 50, 20, 10, 5, 2];

// Abre uma caixa para o usuário digitar qual valor deseja sacar.
let valorDoSaque = Number(prompt("Insira qual valor deseja sacar: "));

/* 
Validação do número digitado:
 1° Validação: se o valor digitado é um número;
 2° Validação: o valor digitado é menor ou igual a 0;
 3° Validação: se o valor digitado é decimal;
*/
if (isNaN(valorDoSaque) || valorDoSaque <= 0 || valorDoSaque === 3 || valorDoSaque === 1) {
  alert("Este valor é impossível de ser sacado! Por favor tente novamente.");
/* 
Dica do Chat:
Usar o throw new Error para impedir o código de continuar rodando mesmo 
após ter parado na validação.
*/
  throw new Error("Valor inválido!");
}

// Abro um array para armazenar as notas que serão devolvidas.
let resultado = [];

// Faço um laço para passar em cada nota disponível.
for (var i = 0; i < notas.length; i++) {
  // Pego a posição da nota atual no array.
  const notaAtual = notas[i];
  // Aqui eu pego quantas notas de qual valor irei devolver.
  const qtdNotas = Math.floor(valorDoSaque / notaAtual);

  // Verifico se posso entregar mais de uma nota.
  if (qtdNotas > 0) {
    // Crio a mensagem que será exibida mostrando a quantidade de notas que serão entregues.
    resultado.push(`Você receberá ${qtdNotas} nota(s) de R$${notaAtual},00`);
    // Atualização da variável valorDoSaque com o resto da divisão.
    valorDoSaque = valorDoSaque % notaAtual;
  }
}

// Chamo a mensagem na tela para mostrar o que será entregue para o usuário.
alert(resultado.join("\n"));