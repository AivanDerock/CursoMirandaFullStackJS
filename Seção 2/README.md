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
- [Aula 3 - Em Breve](#)
- [Aula 4 - Em Breve](#)
- [Aula 5 - Em Breve](#)

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

## Aula 3 - Em Breve

---

## Aula 4 - Em Breve

---

## Aula 5 - Em Breve

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante na ``Seção 2`` do curso Full Stack JavaScript e TypeScript do Luiz Otávio Miranda.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 09/07/25 por Ivan Rocha_