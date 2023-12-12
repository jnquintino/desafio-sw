# Projeto Star Wars API

Este projeto consiste em uma aplicação Node.js que utiliza o Docker Compose para configurar dois containers: um para o MongoDB e outro para a aplicação Node.js. A aplicação interage com a [API Star Wars](https://swapi.dev/documentation), salvando informações sobre personagens em uma coleção MongoDB e oferecendo um endpoint para recuperar e ordenar esses dados alfabeticamente pelo nome.

## Conteúdo

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Configuração](#configuração)
4. [Execução](#execução)
5. [Endpoints](#endpoints)
6. [Docker](#docker)
7. [Contribuições](#contribuições)
8. [Licença](#licença)

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) (se não estiver usando Docker para o ambiente Node.js)

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/jnquintino/desafio-sw
    cd desafio-sw
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

## Execução

### Usando Docker Compose:

```bash
docker-compose up
```

A aplicação estará disponível em `http://localhost:3000`.

## Endpoints

### GET /characters
Obtém os dados salvos no MongoDB, ordenados alfabeticamente pelo nome.

### GET /characters/fetch
Obtém e salva os dados da API Star Wars no MongoDB.

## Docker

Se estiver utilizando Docker, os serviços MongoDB e Node.js estarão disponíveis nos seguintes endereços:

- MongoDB: `mongodb://localhost:27017/mydatabase`
- Node.js: `http://localhost:3000`

**Observação**: Certifique-se de que o comando docker-compose up está em execução para que os serviços estejam disponíveis.

## Contribuições

Contribuições são bem-vindas! 

## Licença

Este projeto é licenciado sob a [MIT License](https://chat.openai.com/c/LICENSE).
