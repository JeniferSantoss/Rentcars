# Documentação do CRUD de Veículos usando Express
Este projeto implementa um sistema de gerenciamento de veículos com funcionalidade CRUD (Create, Read, Update, Delete) usando Node.js e Express. O objetivo é fornecer uma API para adicionar, visualizar, atualizar e excluir informações de veículos.

## Tecnologias Usadas
- Node.js
+ Express
- JSON (para armazenamento de dados)
+ HTML/CSS/JavaScript (front-end)

## Instalação
Antes de executar o projeto, certifique-se de ter o Node.js instalado em seu sistema. Para configurar e executar o servidor Express, siga as etapas:

Clone o repositório do projeto ou crie seus próprios arquivos.

Abra um terminal e navegue até o diretório raiz do projeto.

Instale as dependências necessárias: npm install

## Endpoints da API
O servidor Express possui os seguintes endpoints disponíveis:

1. Listar todos os veículos (GET /carros)
Descrição: Retorna uma lista de todos os veículos armazenados.

2. Adicionar um novo veículo (POST /carros)
Descrição: Adiciona um novo veículo com base nos dados fornecidos no corpo da solicitação.

3. Atualizar informações de um veículo (PUT /carros/:id)
Descrição: Atualiza os detalhes de um veículo específico com base no ID fornecido na URL.

4. Excluir um veículo (DELETE /carros/:id)
Descrição: Exclui um veículo específico com base no ID fornecido na URL.

## Observações sobre a Configuração
Devido a problemas com o Docker, os dados de veículos são armazenados em um arquivo JSON local (carros.json). Isso é uma solução temporária e pode ser substituída por um banco de dados adequado quando o Docker estiver configurado corretamente.
