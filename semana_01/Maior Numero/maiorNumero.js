// Criação da função para comparar todos os números inseridos
function descobrirQualMaiorNumero() {
  // Passado o isNan() para comparar se o valor digitado é no formato número
  // não permitindo caracteres.
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Erro: Um ou mais campos contém um valor inválido.");
    return;
  }

  // A primeira comparação verificar se todos os números são iguais.
  // Ao retornar .T. ele exibe o alerta.
  // Correção do Chat: comparar o num1 com o num3 também.
  if (num1 === num2 && num1 === num3 && num2 === num3) {
    alert("Todos os números são iguais.");
    // Faz a verificação para ver qual número é o maior entre eles.
  } else if (num1 >= num2 && num1 >= num3) {
    alert(`O número ${num1} é o maior número.`);
  } else if (num2 >= num1 && num2 >= num3) {
    alert(`O número ${num2} é o maior número.`);
  } else if (num3 >= num1 && num3 >= num2) {
    alert(`O número ${num3} é o maior número`);
  }
}

// Criado as variáveis para receberem os valores númericos.
let num1 = Number(prompt("Insira um número aleatório: "));
let num2 = Number(prompt("Insira novamente um número aleatório: "));
let num3 = Number(prompt("Insira outro número aleatório: "));

// Chama a função para analisar qual número é o maior entre eles.
descobrirQualMaiorNumero(num1, num2, num3);

// Demorei 1hr para realiar esta atividades.
// Dificuldades Encontradas:
//  * Como realizar o código;
//  * Comparar se o dado inserido == Número;
//  * Trabalhar com o operador AND(&&);
