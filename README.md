<h1 align="center">
    <a> Rentcars </a>
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
- Node.js
+ Express
- Sequelize
+ HTML/CSS/JavaScript

## Instalação
Antes de executar o projeto, certifique-se de ter o Node.js instalado em seu sistema. Para configurar e executar o servidor Express, siga as etapas:

- Clone o repositório do projeto ou crie seus próprios arquivos.

+ Abra um terminal e navegue até o diretório raiz do projeto.

- Instale as dependências necessárias: $ npm install

## Endpoints da API
O servidor Express possui os seguintes endpoints disponíveis:

1. Listar todos os veículos (GET /carros)

2. Adicionar um novo veículo (POST /carros)

3. Atualizar informações de um veículo (PUT /carros/:id)

4. Excluir um veículo (DELETE /carros/:id)

## Observações sobre a Configuração
Devido a problemas com o Docker, os dados de veículos são armazenados em um arquivo JSON local (carros.json). Isso é uma solução temporária e pode ser substituída por um banco de dados adequado quando o Docker estiver configurado corretamente.
