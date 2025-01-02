
# Librofyy - Sistema de Empréstimos de Livros

## Objetivo

Este projeto tem como objetivo oferecer uma solução completa para gestão de empréstimo de livros. Ele permite o gerenciamento de usuários, livros e aluguéis, além de implementar autenticação, validações robustas e uma arquitetura modular.

## Linguagens Utilizadas

1. Node.js
2. TypeScript

## Tecnologias e Ferramentas

- **Framework Backend**: Express.js
- **Banco de Dados**: PostgreSQL
- **Query Builder**: Knex.js
- **Autenticação**: JWT (Json Web Tokens)
- **Segurança**: Bcrypt para hashing de senhas
- **Variáveis de Ambiente**: Dotenv

## Funcionalidades

### Gestão de Usuários

1. Cadastro de usuários com validação de campos.
2. Autenticação segura com JWT.
3. Atualização de informações e alteração de senha.

### Gestão de Livros

1. Listagem de livros com paginação.
2. Filtros opcionais: título, autor, gênero e data de publicação.

### Gestão de Aluguéis

1. Realização de empréstimos.
2. Cancelamento e finalização de empréstimos.
3. Consulta de livros e empréstimos do usuário.

## Estrutura do Projeto

### Diretórios e Arquivos

```plaintext
src/
├── auth/             # Autenticação
│   └── token.ts
├── business/         # Lógica de negócios
│   ├── booksBusiness.ts
│   ├── rentsBusiness.ts
│   └── userBusiness.ts
├── config/           # Configuração
│   ├── db.ts
│   └── knexfile.ts
├── controller/       # Controladores das requisições
│   ├── booksController.ts
│   ├── rentsController.ts
│   └── userController.ts
├── data/             # Comunicação com o banco de dados
│   ├── booksData.ts
│   ├── rentsData.ts
│   └── userData.ts
├── errors/           # Tratamento de erros
│   ├── errors.ts
│   └── exception.ts
├── routers/          # Configuração das rotas
│   ├── booksRouter.ts
│   ├── rentsRouter.ts
│   └── userRouter.ts
├── types/            # Tipos e enums
│   └── user.ts
├── utils/            # Utilidades
│   ├── hashManager.ts
│   ├── idGenerator.ts
│   ├── validateCPF.ts
│   └── validatePhone.ts
├── App.ts            # Configuração inicial
└── index.ts          # Ponto de entrada
```

### Arquivos de Configuração do Projeto

- **package-lock.json**: Arquivo do gerenciador de pacotes ( npm ).
- **package.json**: Arquivo de configuração do projeto.
- **tsconfig.json**: Arquivo de configuração do TypeScript.
- **.env**: Arquivo para conexão com banco de dados.

### Arquivos do Banco de Dados e Documentação (Postman)

- **Banco de dados**: Arquivo com código do banco de dados.
- **Documentação Postman**: Arquivo com a documentação do Postman para testes da API.

### Descrição dos Arquivos

- **auth/**: Contém arquivos relacionados à autenticação.
- **business/**: Contém as regras de negócios de usuários, livros e aluguéis.
- **config/**: Contém as conexão com banco de dados e configuração do knex
- **controller/**: Recebe as requisições e delega para a camada de negócios.
- **data/**: Realiza as operações no banco de dados usando Knex.js.
- **routers/**: Define as rotas da API.
- **types/**: Define várias padrões.
- **utils/**: Implementa serviços como hashing, validações, id e tokens.
 
## Endpoints

### Usuários
- **POST /users/cadastro**: Cadastro de usuários.
- **POST /users/login**: Login.
- **PATCH /users/atualizarSenha**: Atualizar senha.
- **PUT /users/atualizarDados**: Atualizar dados.
- **DELETE /users/deletarUsuario**: Deletar usuário.

### Livros
- **GET /books**: Listar livros com filtros opcionais.

### Aluguéis
- **POST /rents/realizarEmprestimo/:id**: Registrar empréstimo.
- **GET /rents/buscarLivrosDoUsuario**: Listar livros do usuário.
- **GET /rents/buscarEmprestimos**: Listar empréstimos do usuário.
- **DELETE /rents/cancelarEmprestimo/:id**: Cancelar empréstimo.

## Como Usar

1. Clone o repositório.
   ```bash 
   git clone https://github.com/DaviBertoni/Librofyy
   ```
2. Instale as dependências do projeto utilizando o comando:
   ```bash 
   npm install
   ```
   Verifique se não fico nenhuma pendente e instale ela também.

3. Configure o arquivo `.env` com as credenciais do banco de dados.
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. Utilize a documentação do Postman para realizar testes na API.

## Resultados Esperados

A API foi projetada para ser robusta, eficiente e segura. Ela permite que os usuários gerenciem facilmente seus empréstimos de livros, oferecendo:
- Autenticação confiável e segura.
- Operações rápidas e precisas no banco de dados.
- Experiência de uso fluida e intuitiva.
- Código modular e de fácil manutenção, facilitando futuras expansões.
