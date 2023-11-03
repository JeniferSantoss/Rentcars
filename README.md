<h1 align="center">
    <a href="https://www.rentcars.com/pt-br/localidades/brasil/curitiba-parana?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_mjxqkJhPHzsIyoGkPGsIX80b23sBX-dYDC29bZ8luXjfuz19Umm-4aAvMmEALw_wcB"> Rentcars </a>
</h1>

<p align="center">
 <a href="#about">Sobre</a> •
 <a href="#how-it-works">Tecnologias Usadas</a> • 
 <a href="#tech-stack">Instalação</a> • 
 <a href="#license">Endpoints da API</a> 
</p>

# Sobre
Este projeto implementa um sistema de gerenciamento de veículos com funcionalidade CRUD (Create, Read, Update, Delete) usando Node.js e Express. O objetivo é fornecer uma API para adicionar, visualizar, atualizar e excluir informações de veículos.

---

## Tecnologias Usadas
- <a href="https://nodejs.org/en"> Node.js </a>
+ <a href="https://nodejs.org/en](https://expressjs.com/pt-br/">Express </a>
- <a href="https://nodejs.org/en](https://sequelize.org">Sequelize </a>
+ HTML/CSS/JavaScript

---

## Instalação
Antes de executar o projeto, certifique-se de ter o Node.js instalado em seu sistema. Para configurar e executar o servidor Express, siga as etapas:

- Clone o repositório do projeto ou crie seus próprios arquivos.

+ Abra um terminal e navegue até o diretório raiz do projeto.

- Instale as dependências necessárias:
```
 $ npm install
```
Execute o servidor Express:
```
node server.js
```
Agora, o servidor deve estar em execução na porta 3000.

---

## Endpoints da API
O servidor Express possui os seguintes endpoints disponíveis:

1. Listar todos os veículos (GET /veículos)

2. Adicionar um novo veículo (POST /veículos)

3. Atualizar informações de um veículo (PUT /veículos/:id)

4. Excluir um veículo (DELETE /veículos/:id)
