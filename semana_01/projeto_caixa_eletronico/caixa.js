const notas = [100, 50, 20, 10, 5, 2];

let valorDoSaque = Number(prompt("Insira qual valor deseja sacar: "));

if (valorDoSaque === 1 || valorDoSaque === 3) {
  alert("Este valor é impossível de ser sacado! Por favor tente novamente.");
}
