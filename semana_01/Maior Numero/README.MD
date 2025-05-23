# 🔍 Exercício Proposto: Descubra o Maior Número

## 💡 Objetivo

Criar um algoritmo que receba **três números inteiros** e exiba **qual deles é o maior**.

---

## 📋 Especificações Técnicas

### 🔢 Entrada:

O usuário deve informar **três números inteiros**.  
A entrada pode ser via:

- `prompt()` (em navegador)
- `readline` (Node.js)
- Ou fixar os valores diretamente no código, como no exemplo:

```js
let a = 12;
let b = 9;
let c = 33;
```

---

### 🔁 Regras de Lógica:

- Comparar os três números usando `if / else if / else`
- Exibir **qual é o maior número**
- Se houver empate entre os maiores, **mostrar uma mensagem de empate**

---

### 🖨️ Saída esperada:

Exemplo de saída normal:

```bash
O maior número é: 33
```

Exemplo de empate:

```bash
Existem dois ou mais números iguais e maiores: 33
```

---

## 🛠️ Requisitos Técnicos

- **❌ Não usar `Math.max()`**
- ✅ Usar **apenas:**
  - `if / else if / else`
  - Operadores lógicos e relacionais (`>`, `<`, `==`, `&&`, `||`)
  - `console.log()` para saída

- 📄 Nome do arquivo: `maiorNumero.js`

---

## 🔁 Versão Bônus (Modo Deus 😈)

### 🧠 Objetivo:

Criar duas funções:

### 1. `maiorNumero(a, b, c)`
- Recebe 3 números
- Retorna o **maior número**
- **Trata empates** corretamente

### 2. `exibirResultado()`
- Chama a função `maiorNumero()`
- Mostra o resultado no console com `console.log()`

### ⚠️ Desafio Extra (opcional):
- Validar se os valores informados são **números válidos**


## ✅ Checklist Final Antes do Commit:

☑ Código funcionando  
☑ Tratamento de empate implementado   
☑ Comentários explicando o raciocínio  
☑ Arquivo nomeado como `maiorNumero.js`  
☑ Markdown `.md` documentando o exercício (este arquivo)

---

## 🚀 Bora codar e dominar a lógica, soldado!
