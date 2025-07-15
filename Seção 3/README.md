# 📒 Anotações – Curso Full Stack JavaScript e TypeScript

Bem-vindo(a) às minhas anotações da ``Seção 3`` do **Curso JavaScript e TypeScript - Full Stack** ministrado por **Luiz Otávio Miranda** na plataforma **Udemy**.

Aqui você encontrará resumos, exemplos e explicações dos principais conceitos abordados ao longo da ``Seção 3``.

---

## 📝 Resumo Geral

Este README contém minhas anotações pessoais sobre o **curso de JavaScript e TypeScript**, voltadas para estudo e aplicação prática no ambiente de desenvolvimento **front-end e back-end**. Organizei o conteúdo de forma objetiva, destacando os conceitos mais relevantes para revisão e fixação.

---

> **Atenção:** O link da aula não direciona para o vídeo, pois o conteúdo é pago.  
> Curso original: [Curso de JavaScript e TypeScript do básico ao avançado JS/TS](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/)

---

## 📚 Conteúdo da Aula

- [Aula 8 - Em Breve]()
- [Aula 9 - Em Breve]()
- [Aula 10 - Em Breve]()
- [Aula 11 - Em Breve]()
- [Aula 12 - Em Breve]()

---

### Aula 8 - Operadores de comparação

Operadores de comparação em JavaScript:

- `>`  maior que
- `<`  menor que
- `>=` maior ou igual a
- `<=` menor ou igual a
- `==` igualdade (valor)
- `===` igualdade estrita (valor e tipo)
- `!=` diferente (valor)
- `!==` diferente estrito (valor e tipo)

Quando usamos operadores de comparação, estamos fazendo uma pergunta ao sistema, que retorna um valor booleano (`true` ou `false`).

**Exemplo:**

```javascript
console.log(10 > 5); // true
```

Neste caso, 10 é maior que 5? Sim, então retorna `true`.

Esses operadores não servem apenas para números, mas também podem ser usados com strings.

A lógica é a mesma para `<`, `>=`, `<=`.

**Exemplo:**

```javascript
console.log(10 >= 5);  // true
console.log(10 >= 10); // true
```

#### Igualdade e diferença

O operador `==` compara apenas o valor, não o tipo:

```javascript
console.log(10 == "10"); // true
```

Isso pode causar problemas em aplicações maiores, pois pode comparar tipos diferentes como se fossem iguais.

Por isso, prefira sempre o `===`, que compara valor e tipo:

```javascript
console.log(10 === "10"); // false
console.log(10 === 10);   // true
```

O mesmo vale para os operadores de diferença:

```javascript
console.log(10 != "10");  // false (só compara valor)
console.log(10 !== "10"); // true  (compara valor e tipo)
```

> **Resumo:**  
> Sempre prefira `===` e `!==` para evitar bugs relacionados a tipos diferentes sendo considerados iguais.

---

### Aula 9 - Operadores Lógicos

&& -> and -> E
|| -> or -> ou
! -> not -> NAO

esse operadores todas a experssoes precisam ser verdadeiras, no caso de and. 

ex: true && true nesse caso a expressao vai retornar verdadeiro, mas caso uma delas altere para false, a expressao inteira se torna false, por exemplo 

sair && dinheiro 

para eu sair, eu preciso ter dinheiro. Tenho dinheiro ?? Sim, vamos sair true && true

não tenho dinheiro, mas quero sair, nesse caso false && true = false, nao vamos sair por falta de dinheiro

podemos usar quantas expressoes quiser

ex: 

console.log(true && true && true && true)
mas lembrando, todas elas precisam ser verdadeiras. caso uma seja falsa, a expressao inteira retorna falsa. 

true && true = true
false && true = false
true && false = false
false && false = false

O || é difernte de and &&

no caso de or, tanto faz se for true ou false, com tanto que uma delas de true

seguindo a logica: 

para sair de casa, eu precise de dinheiro, tenho dinheiro?? sim, saimos

nao tenho dinheiro, mas quero sair, entao saimos

true || true = true
false || true = true
true || false = true
false || false = false

em or || so retorna false se todas forem falsas, por exemplo 

nao tenho dinheiro e nem quero sair de casa, então false

Temos o not, o nao !

o nao literalmente inverte a expressao, ele inverte

ex: 

!false = ele retorna true
!true = false

No caso, se for !true, ele é false
se ele for !false, ele é true 

confuso, mas é só lembrar que um é o inverso do outro, !sim é não e !não é sim

---

### Aula 10 - Em Breve

---

### Aula 11 - Em Breve

---

### Aula 12 - Em Breve

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante na ``Seção 3`` do curso Full Stack JavaScript e TypeScript do Luiz Otávio Miranda.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 15/07/25 por Ivan Rocha_