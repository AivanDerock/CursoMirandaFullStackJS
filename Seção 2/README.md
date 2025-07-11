# 📒 Anotações – Curso Full Stack JavaScript e TypeScript

Bem-vindo(a) às minhas anotações da ``Seção 2`` do **Curso JavaScript e TypeScript - Full Stack** ministrado por **Luiz Otávio Miranda** na plataforma **Udemy**.

Aqui você encontrará resumos, exemplos e explicações dos principais conceitos abordados ao longo da ``Seção 2``.

---

## 📝 Resumo Geral

Este README contém minhas anotações pessoais sobre o **curso de JavaScript e TypeScript**, voltadas para estudo e aplicação prática no ambiente de desenvolvimento **front-end e back-end**. Organizei o conteúdo de forma objetiva, destacando os conceitos mais relevantes para revisão e fixação.

- ``Aula 2:`` Em Breve
- ``Aula 3:`` Em Breve
- ``Aula 4:`` Em Breve
- ``Aula 5:`` Em Breve

---

> **Atenção:** O link da aula não direciona para o vídeo, pois o conteúdo é pago.  
> Curso original: [Curso de JavaScript e TypeScript do básico ao avançado JS/TS](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/)

---

## 📚 Conteúdo da Aula

### Seção 2

- [⚠️ AVISO ⚠️](#aviso)
- [Aula 2 - Arrays (básico)](#aula-2---arrays-básico)
- [Aula 3 - Const valores mutáveis](#aula-3---const-valores-mutáveis)
- [Aula 4 - Funções (Básico)](#aula-4---funções-básico)
- [Aula 5 - Objetos (Básico)](#aula-5---objetos-básico)
- [Aula 6 - Valores primitivos e por referência](#aula-6---valores-primitivos-e-por-referência)
- [Aula 7 - Exercício 6](#aula-7---exercício-6)

---

## ⚠️ Aviso ⚠️

No início desta seção, optei por não fazer anotações detalhadas sobre conteúdos já vistos, como variáveis, operadores lógicos, string, number, boolean, etc. Esses são assuntos básicos que já estudei anteriormente e tenho registrados em um repositório do Curso em Vídeo, focado 100% em JavaScript básico. Por isso, não vou me aprofundar neles aqui para não atrasar o andamento do curso.

No entanto, caso apareça algum assunto interessante ou diferente — por exemplo, se o instrutor abordar algo sobre variáveis que não foi tratado no Curso em Vídeo, farei anotações específicas. Caso contrário, seguirei sem registrar esses pontos.

PS: Pretendo fazer anotações sobre funções, repetições e lógica de programação, pois são temas que ainda considero pendentes ou que preciso reforçar.

Conforme eu for encontrando conteúdos novos ou relevantes, irei adicioná-los aqui. Para revisar conceitos básicos, recomendo o repositório abaixo, com as aulas do Curso em Vídeo:

[JavaScript - Curso Em Vídeo](https://github.com/AivanDerock/CursoEmVideoJS)

Vou deixar abaixo a lista de exercícios propostos pelo instrutor do curso. Esses exercícios correspondem às aulas para as quais não fiz anotações detalhadas.

### Exercícios:

- [ex001](./Exercicios/ex001)
- [ex002](./Exercicios/ex002)
- [ex003](./Exercicios/ex003)
- [ex004](./Exercicios/ex004)
- [ex005](./Exercicios/ex005)

---

## Aula 2 - Arrays (básico)

Arrays podem ser imaginados como uma lista, uma coleção de elementos. Para criar um array, usamos colchetes `[]`.

**Exemplo:**

```javascript
let nomes = [];
```

Arrays aceitam todos os tipos de dados: strings, numbers, booleans, etc. Os elementos devem ser separados por vírgula.

**Exemplo:**
```javascript
let nomes = ['Ivan', 'Joao', 'José'];
```

> **Dica:** Procure manter um único tipo de dado em cada array para facilitar a organização.

Os arrays são indexados por posição (índice), não pelo valor.  
Exemplo:

- `nomes[0]` retorna `'Ivan'`
- `nomes[1]` retorna `'Joao'`
- `nomes[2]` retorna `'José'`

### Acessando e editando valores

Para acessar um valor:

```javascript
nomes[1]; // 'Joao'
```

Para editar um valor:

```javascript
nomes[0] = 'Luiz'; // Agora nomes[0] é 'Luiz'
```

### Adicionando elementos

Adicionar em uma posição específica:

```javascript
nomes[3] = 'Luiza'; // Adiciona no índice 3
```

> Esse método pode gerar "buracos" se pular índices. Prefira os métodos abaixo:

Adicionar no final:

```javascript
nomes.push('Francisco');
```

Adicionar no início:

```javascript
nomes.unshift('Danilo');
```

> Agora 'Danilo' é o índice 0 e os demais são deslocados.

### Removendo elementos

Remover o último elemento:

```javascript
nomes.pop();
```
Salvar o elemento removido:

```javascript
let removido = nomes.pop();
```

Remover o primeiro elemento:

```javascript
nomes.shift();
```

Remover sem alterar os índices:

```javascript
delete nomes[1]; // nomes[1] fica vazio (undefined)
```

### Outras operações

Saber o tamanho do array:

```javascript
nomes.length;
```

Acessar um índice inexistente retorna `undefined`:

```javascript
nomes[50]; // undefined
```

Fatiar (slice):

```javascript
nomes.slice(0, 3); // Pega do índice 0 ao 2
nomes.slice(-2);   // Pega os dois últimos
```

### Observações

- Arrays são objetos: `typeof nomes` retorna `'object'`
- Para verificar se é um array:

```javascript
nomes instanceof Array; // true
```

---

## Aula 3 - Const valores mutáveis

A palavra-chave `const` descreve uma variável que **não pode ser reatribuída** (ou seja, não pode receber um novo valor com o operador `=`). Depois de criada, não podemos fazer algo assim:

```javascript
const nome = 'luiz';
nome = 'joão';
```

Porém, existe uma diferença importante entre ``variável`` e ``valor``:

- **Variáveis** são como apelidos (aliases) para um valor salvo na memória.
- **Valores** são os dados realmente armazenados na memória.

Alguns tipos de valores são **imutáveis** (não podem ser alterados), como:  
`number`, `string`, `boolean`, `undefined`, `null`, `symbol` e `bigint` (todos os tipos primitivos).

Outros tipos são **mutáveis**, como **arrays** e **objetos** (objetos em geral, exceto `null`).

Valores mutáveis geralmente são estruturas de dados mais complexas, que podem armazenar outros valores internamente (exemplo: um array pode conter vários tipos de dados).

### Usando `const` com tipos primitivos

Quando usamos `const` com tipos primitivos, o valor nunca poderá ser alterado.  
Além de não permitir reatribuição, o valor também é imutável.

### Usando `const` com valores mutáveis (arrays e objetos)

Quando usamos `const` com arrays ou objetos, a variável continua sendo constante, **mas os valores internos podem ser alterados**.  
Isso acontece porque, ao alterar um valor interno, não ocorre reatribuição da variável, apenas uma modificação do conteúdo do objeto/array.

#### Exemplos

**Isso pode:**

```javascript
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [1024, 2, 3, 4]
```

**Isso NÃO pode:**

```javascript
const array = [1, 2, 3, 4, 5];
array = 'Legal';
```

> **Resumo:**  
> Com `const`, não podemos reatribuir a variável, mas podemos alterar os valores internos de arrays e objetos.

---

## Aula 4 - Funções (Básico)

Funções servem para executar um bloco de código. Podemos passar valores para elas (parâmetros) e, em alguns casos, elas retornam um valor. Existem funções que não retornam nada.

### Como criar uma função

Para criar uma função, usamos a palavra-chave `function`. As regras para nomear funções são as mesmas das variáveis.

```javascript
function saudacao() {
  // bloco de código
}
```

Chamamos a função para executar o bloco de código:

```javascript
saudacao();
```

O que está dentro da função não pode ser acessado de fora dela (escopo).

### Parâmetros

Parâmetros funcionam como variáveis internas da função:

```javascript
function saudacao(nome) {
  console.log(`Bom dia ${nome}`);
}
```

Passamos o valor ao chamar a função:

```javascript
saudacao("Ivan");
saudacao("Jão");
saudacao("José");
```

A função acima imprime um "Bom dia" para cada nome.

### Retorno de valores

Se não usarmos `return`, a função retorna `undefined`. Para retornar um valor, usamos `return`:

```javascript
function saudacao(nome) {
  return `Bom dia ${nome}`;
}

let mensagem = saudacao("Ivan");
console.log(mensagem); // Bom dia Ivan
```

### Outro exemplo

```javascript
function soma(x, y) {
  const result = x + y;
  return result;
}

console.log(soma(2, 2)); // 4
```

O que está dentro da função é protegido pelo escopo. Exemplo:

```javascript
function soma(x, y) {
  const result = x + y;
  return result;
}

const resultado = soma(2, 2);
console.log(resultado); // 4
```

Após o `return`, nada mais dentro da função é executado.

### Parâmetros com valor padrão

Se não passarmos valores, podemos definir padrões:

```javascript
function soma(x = 0, y = 0) {
  return x + y;
}

console.log(soma());    // 0
console.log(soma(1));   // 1
console.log(soma(1, 2));// 3
```

### Outros modos de criar funções

**Função anônima:**

```javascript
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9)); // 3
```

**Arrow function (função moderna):**

```javascript
const raiz = (n) => {
  return n ** 0.5;
};

console.log(raiz(9)); // 3
```

**Arrow function de uma linha:**

```javascript
const raiz = n => n ** 0.5;
console.log(raiz(9)); // 3
```

Todos os tipos acima têm o mesmo objetivo: executar um bloco de código, mas as formas modernas são mais concisas.

> **Recomendação:**  
> Não faça funções que executam muitas tarefas diferentes. Prefira funções pequenas e específicas para cada ação.

---

## Aula 5 - Objetos (Básico)

Objetos têm uma premissa parecida com arrays, mas funcionam de forma diferente em alguns pontos.

### Por que usar objetos?

Imagine que precisamos armazenar vários dados de pessoas:

```javascript
const nome01 = "Ivan";
const sobrenome1 = "Rocha";
const idade1 = 19;
const nome02 = "José";
const sobrenome2 = "Barreto";
const idade2 = 30;
```

Esse método fica inviável para muitos registros. Para organizar melhor, usamos objetos, que são definidos por chaves `{}`.

### Criando um objeto literal

```javascript
const pessoa1 = {
  nome: "Ivan",
  sobrenome: "Rocha",
  idade: 19
};
```

Podemos acessar os dados assim:

```javascript
console.log(pessoa1.nome);      // Ivan
console.log(pessoa1.sobrenome); // Rocha
console.log(pessoa1.idade);     // 19
```

### Função para criar objetos

Para evitar repetição, usamos funções para criar objetos:

```javascript
function criarPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}

const pessoa1 = criarPessoa('Ivan', 'Rocha', 19);
const pessoa2 = criarPessoa('Jose', 'Silva', 20);
const pessoa3 = criarPessoa('Maria', 'Cabeluda', 50);
const pessoa4 = criarPessoa('Paulo', 'José', 70);

console.log(pessoa1.nome); // Ivan
console.log(pessoa2.sobrenome); // Silva
console.log(pessoa3.idade); // 50
```

> Não é necessário repetir `nome: nome`, basta usar `nome` que o JS entende.

### Funções dentro de objetos (métodos)

Podemos criar métodos dentro de objetos:

```javascript
const pessoa1 = {
  nome: "Ivan",
  sobrenome: "Rocha",
  idade: 19,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();            // Ivan Rocha está falando oi... A minha idade é 19
pessoa1.incrementaIdade(); // idade passa a ser 20
pessoa1.fala();            // Ivan Rocha está falando oi... A minha idade é 20
```

> O `this` referencia o próprio objeto, permitindo acessar suas propriedades dentro dos métodos.

Assim, objetos permitem organizar dados e comportamentos de forma eficiente e reutilizável.

---

## Aula 6 - Valores primitivos e por referência

Já vimos os tipos de dados primitivos em JavaScript.

Lembrando que **primitivos são imutáveis** — não podemos alterar o valor original.  
Exemplos de tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol` (estes dois últimos não abordados ainda).

### Primitivos: cópia de valor

Quando copiamos um valor primitivo, criamos uma cópia independente:

```javascript
let a = 'A';
let b = a;

a = 'Outra coisa';

console.log(b); // 'A' (b não foi alterado)
```

### Por referência: arrays, objetos e funções

Arrays, objetos e funções são **mutáveis** e **passados por referência**.  
Ao copiar, ambos apontam para o mesmo local na memória:

```javascript
let a = [1, 2, 3];
let b = a;

a.push(4);
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

b.pop();
console.log(b); // [1, 2, 3]
console.log(a); // [1, 2, 3] (a também foi alterado)
```

Nesse caso, qualquer alteração em `a` ou `b` afeta ambos, pois estão "linkados".

### Como copiar arrays e objetos (evitar referência)

Para criar uma cópia independente (não referenciada), usamos o operador de espalhamento `...`:

**Array:**

```javascript
let a = [1, 2, 3];
let b = [...a]; // b é uma cópia independente

b.push(4);
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3, 4]
```

**Objeto:**

```javascript
let objA = { nome: 'Ivan', idade: 19 };
let objB = { ...objA }; // objB é uma cópia independente

objB.idade = 20;
console.log(objA.idade); // 19
console.log(objB.idade); // 20
```

> **Resumo:**  
> Primitivos são copiados por valor (independentes).  
> Arrays, objetos e funções são copiados por referência (linkados).  
> Para copiar sem referência, use o operador `...`.

---

## Aula 7 - Exercício 6

Para fechar a seção, o professor recomendou um exercício envolvendo função, array e objetos.

Exercício da aula:

- [ex006](./Exercicios/ex006)

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante na ``Seção 2`` do curso Full Stack JavaScript e TypeScript do Luiz Otávio Miranda.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 10/07/25 por Ivan Rocha_