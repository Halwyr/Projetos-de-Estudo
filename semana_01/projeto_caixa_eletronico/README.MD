
# 💸 Desafio: Caixa Eletrônico

## 🧠 Objetivo

Criar um programa em JavaScript que simule o funcionamento de um caixa eletrônico. O usuário digita o valor que deseja sacar, e o sistema deve informar a quantidade de notas de cada valor que será entregue — sempre respeitando as cédulas disponíveis.

---

## 📋 Regras do Desafio

1. O usuário informa um valor inteiro via `prompt()`.
2. O sistema deve validar se:
   - O valor é um número;
   - O valor é inteiro positivo;
   - O valor pode ser composto pelas notas disponíveis.
3. Notas disponíveis:
   ```
   R$ 100, 50, 20, 10, 5 e 2
   ```
4. Caso o valor seja impossível (ex.: R$ 1, 3 ou qualquer valor não representável), deve ser exibida uma mensagem de erro e o programa encerra.

---

## 📦 Exemplo de Funcionamento

**Entrada:**
```
Digite o valor que deseja sacar: 186
```

**Saída esperada:**
```
Você receberá:
1 nota(s) de R$100,00
1 nota(s) de R$50,00
1 nota(s) de R$20,00
1 nota(s) de R$10,00
3 nota(s) de R$2,00
```

---

## 🚨 Tratamento de Erros

- Valores inválidos: `1`, `3`, `-10`, `0`, strings, decimais devem ser recusados.
- Use `alert()` para notificar o usuário e `throw new Error()` ou `return` para interromper o fluxo.

---

## 🛠 Conceitos Praticados

- `for` para iterar notas
- `Math.floor()` e operador `%`
- `if` para controle de fluxo
- `Arrays` e `.push()`
- Validação robusta de entrada
- Tratamento de erro e interrupção de execução

---

## 🎓 Nível de Dificuldade

**Intermediário**, ideal para quem busca aprimorar raciocínio lógico e resolução de problemas reais em programação.

---

## ✍️ Autor

Desenvolvido por **Gabriel** — Analista de Sistemas em constante evolução.
