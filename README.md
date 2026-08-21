# Mundo Disney — Integração com API

## Autor

* **Nome:** Clarisse Fernandes Santos
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Missão 117_Meu Disney
* **Instituição de ensino:** Senac
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela Pessin

---

## 2. Sobre o projeto

O **Meu Disney** é uma aplicação web responsiva que utiliza a API da Disney para buscar e exibir informações sobre personagens. Os dados são recebidos em formato JSON e apresentados em cards com imagem e nome. O projeto tem como objetivo praticar o uso de **APIs, requisições HTTP, JavaScript, manipulação de dados e criação dinâmica de elementos HTML**, além de trabalhar com paginação e responsividade.



## 3. Estrutura do projeto

Apresente a organização dos arquivos e pastas do seu projeto.

```text
mundo-disney/
│
├── missao117
├── style.css
├── script.js
└── README.md
```

**Exemplo:**

```text
mundo-disney/
│
├── nome
├── style.css
├── script.js
└── README.md
```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` |   Estrutura do site                                              |
| `style.css`  |   Estilo do site                                                 |
| `script.js`  |   Funcionalidade e carregamento dos personagens                  |
| `README.md`  |   Configurações de aplicação                                     |

> **Caso seu projeto possua outras pastas ou arquivos, apresente-os também na estrutura acima.**

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* Item 1 - HMTL
* Item 2 - CSS
* Item 3 - JS
* Item 4 - JSON

---

## 5. API utilizada

### Nome da API

**Disney API**

### Endpoint utilizado

```text
https://api.disneyapi.dev/character
```

### Para que a API foi utilizada?

>A API foi utilizada para **buscar os dados dos personagens da Disney**, como nome e imagem, e exibi-los automaticamente na página.


### Quais informações foram consumidas?

> O nome dos personagens e as imagens deles.

---

##  6. Como executar o projeto

A pessoa entrar no site e ja aparecerá 50 dos personagens, ao final da página terá um botão que ao clicar nele carregará mais 50 
personagens, com foto e nome de cada um.

### Pré-requisitos

É necessário ter o google, safari ou chrome instalados no aparelho que será utilizado, como: celular, computador ou notebook.

### Passo a passo

* Passo 1 - Ter algum dos navegadores instalados no aparelho.(Google, safari ou chrome).
* Passo 2 - Acessar o site em algum navegador com o link.
* Passo 3 - Se divertir com o site.

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. O usuário acessa a aplicação.
2. O JavaScript inicia uma requisição para a API da Disney.
3. A API recebe a solicitação.
4. A API busca os dados dos personagens.
5. Os dados são enviados em formato JSON.
6. O JavaScript recebe e interpreta esses dados.
7. Os personagens são percorridos usando um loop.
8. São criados cards com nome e imagem.
9. Os cards são exibidos na página.
10. O botão permite carregar novos personagens por página.

## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafio encontrado

**Problema:**

> [Tive dificuldade para fazer o botão de carregamento funcionar corretamente e mostrar novos personagens a cada clique.]

**Como identifiquei o problema:**

> [Ao clicar no botão os novos personagens não carregavam].

**Como resolvi:**

> [Ajustei o JavaScript para controlar a paginação, atualizar o número da página e fazer uma nova requisição à API sempre que o botão fosse clicado.]

---

## 9. Aprendizados

Responda:

> **O que você aprendeu com o desenvolvimento deste projeto?**

Escreva um texto utilizando suas próprias palavras.

### Minha resposta

> [Durante o desenvolvimento deste projeto, aprendi como utilizar uma API para buscar informações e exibi-las em uma página. Também aprendi a fazer requisições com JavaScript, trabalhar com dados em JSON, criar cards dinamicamente e utilizar paginação. Além disso, aprendi a deixar a página responsiva usando CSS Grid.]

---
