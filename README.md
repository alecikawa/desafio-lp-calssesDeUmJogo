# 🧙‍♂️ Desafio: Escrevendo as Classes de um Jogo

Este projeto foi desenvolvido como parte de um desafio da plataforma **DIO**, com o objetivo de praticar conceitos fundamentais de **JavaScript**, como classes, objetos, métodos e estruturas de decisão.

---

## 📌 Descrição do Desafio

Criar uma classe genérica que represente um herói de uma aventura.  
Cada herói possui um tipo específico e, ao atacar, exibe uma mensagem informando o tipo de ataque utilizado.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js

---

## 📚 Conceitos Aplicados

- Variáveis
- Operadores
- Estruturas de decisão (`switch`)
- Funções / Métodos
- Classes e Objetos
- Template Strings

---

## 🧩 Estrutura da Classe

A classe `Jogador` possui as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (guerreiro, mago, monge ou ninja)

E um método:

- `atacar()`

---

## ⚔️ Regras de Ataque

O ataque varia de acordo com o tipo do herói:

| Tipo       | Ataque utilizado       |
|------------|------------------------|
| mago       | magia                  |
| guerreiro | espada                 |
| monge      | artes marciais         |
| ninja      | shuriken               |

---

## ▶️ Como Executar

1. Copie o código para um arquivo `.js`
2. Execute no Node.js:
   ```bash
   node nome-do-arquivo.js ou execute diretamente no console do navegador
3. Crie uma instância da classe e chame o método atacar()

## Exemplo:
```js
const heroi = new Jogador("Alec", 23, "mago");
heroi.atacar();
```

## ✅ Saída Esperada
```bash
O mago atacou usando magia
```

---

## 🚀 Aprendizado

Este desafio ajudou a reforçar conceitos essenciais de programação orientada a objetos em JavaScript, além de estimular a organização do código e o uso de lógica condicional aplicada a cenários práticos.

