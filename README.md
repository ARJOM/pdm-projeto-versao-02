# Disciplina de Programação para Dispositivos Móveis (PDM)
## Projeto Versão 2

### Grupo
 - [Antônio Ricart](https://github.com/ARJOM)
 - ~~[Caio Guilherme](https://github.com/caioguilherme10)~~
 - [Thiago Yure](https://github.com/ThiagoYure)


  ## Executando

 1. Instale as dependências
    ```
    yarn
    #ou
    npm install
    ```
    1.2 Crie um arquivo `.env`na raiz do projeto para configurar algumas informações que o projeto irá usar
    ```
    PORT=8085
    SECRET=HEXADECIMAL
    ```
    Caso a porta não seja informada, por padrão será utilizada a porta 3333.

    O secret é usado para gerar os tokens jwt da aplicação. Você pode gera um token nesse [site](https://www.browserling.com/tools/random-hex)

2. Execute o comando start
    ```
    yarn start
    #ou
    npm run start
    ```

## Documentação

Todas as rotas da aplicação podem ser acessadas com o prefixo `/api/v1`. Os itens com * ao lado do método necessitam do token de autenticação enviado através de um header chamado `authorization`.

### Hello World

 URL | Método | Descrição 
------|------------|-----
/ | GET | Rota para testar se a aplicação está funcionando

Retorno esperado
```
{
  "name": "pdm-projeto-versao-02",
  "version": "1.0.0"
}
```
### Usuários

 URL | Método | Descrição 
------|------------|-----
/users | POST | Recurso de criação de usuário, espera um json no corpo da requisição
/users | GET | Recurso de listagem de usuário, lista todos os usuários ativos registrados
/users/:id | GET | Recurso de detalhe de usuário, espera o id do usuário na url
/users/:id | PUT* | Recurso de atualização de usuário, espera o id do usuário na url e um json no corpo da requisição
/users/:id | DELETE* | Recurso de exclusão de usuário, espera o id do usuário na url

Usuário
```
{
    id: number
    nome: string
    email: string
    telefone: string
    senha: string
    cidade: string
    bairro: string
    rua: string
    numero: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}
```
OBS: Os campos id, isActive, createdAt e updatedAt não precisam ser informados na criação ou atualização de recursos.

### Imóveis

 URL | Método | Descrição 
------|------------|-----
/real-estates | POST* | Recurso de criação de usuário, espera um json no corpo da requisição
/real-estates | GET | Recurso de listagem de imóvel, lista todos os imóveis ativos registrados
/real-estates?cidade= | GET | Recurso de listagem de imóvel, lista todos os imóveis ativos registrados com base na cidade informada
/real-estates?menorValor=&maiorValor | GET | Recurso de listagem de imóvel, lista todos os imóveis ativos registrados, ordenados por preço entre o menor valor informado e o maior valor informado
/real-estates/:id | GET | Recurso de detalhe de imóvel, espera o id do imóvel na url
/real-estates/:id | PUT* | Recurso de atualização de imóvel, espera o id do imóvel na url e um json no corpo da requisição
/real-estates/:id | DELETE* | Recurso de exclusão de imóvel, espera o id do imóvel na url
/real-estates/user | GET* | Recurso de listagem de imóvel, lista todos os imóveis ativos registrados assosciados ao usuário logado

Imóvel
```
{
    id: number
    preco: number
    cidade: string
    bairro: string
    rua: string
    numero: string
    descricao: string
    metrosQuadrados: number
    userId: number
    imagens: string
    isActive: boolean
}
```
OBS: Os campos id, isActive, createdAt e updatedAt não precisam ser informados na criação ou atualização de recursos.

### Login
URL | Método | Descrição 
------|------------|-----
/login | POST | Recurso de autenticação de usuário, espera um json no corpo da requisição

Corpo da requisição do login
```
{
  email: string
  senha: string
}
```

Resposta de um login
```
{
  auth: boolean,
  token: string,
  id: number
}
```