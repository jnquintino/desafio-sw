# Projeto Star Wars API

Este projeto consiste em uma aplica��o Node.js que utiliza o Docker Compose para configurar dois containers: um para o MongoDB e outro para a aplica��o Node.js. A aplica��o interage com a [API Star Wars](https://swapi.dev/documentation), salvando informa��es sobre personagens em uma cole��o MongoDB e oferecendo um endpoint para recuperar e ordenar esses dados alfabeticamente pelo nome.

## Conte�do

1. [Pr�-requisitos](#pr�-requisitos)
2. [Instala��o](#instala��o)
3. [Configura��o](#configura��o)
4. [Execu��o](#execu��o)
5. [Endpoints](#endpoints)
6. [Docker](#docker)
7. [Contribui��es](#contribui��es)
8. [Licen�a](#licen�a)

## Pr�-requisitos

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) (se n�o estiver usando Docker para o ambiente Node.js)

## Instala��o

1. Clone este reposit�rio:

    ```bash
    git clone https://github.com/jnquintino/desafio-sw
    cd desafio-sw
    ```

2. Instale as depend�ncias:

    ```bash
    npm install
    ```

## Configura��o

Certifique-se de ter o Docker e o Docker Compose instalados em sua m�quina.

## Execu��o

### Usando Docker Compose:

```bash
docker-compose up
```

A aplica��o estar� dispon�vel em `http://localhost:3000`.

## Endpoints

### GET /characters
Obt�m os dados salvos no MongoDB, ordenados alfabeticamente pelo nome.

### GET /characters/fetch
Obt�m e salva os dados da API Star Wars no MongoDB.

## Docker

Se estiver utilizando Docker, os servi�os MongoDB e Node.js estar�o dispon�veis nos seguintes endere�os:

- MongoDB: `mongodb://localhost:27017/mydatabase`
- Node.js: `http://localhost:3000`

**Observa��o**: Certifique-se de que o comando docker-compose up est� em execu��o para que os servi�os estejam dispon�veis.

## Contribui��es

Contribui��es s�o bem-vindas! 

## Licen�a

Este projeto � licenciado sob a [MIT License](https://chat.openai.com/c/LICENSE).
