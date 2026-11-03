# Projeto Habit-Tracker — Version 1.5

O **Habit Tracker** é uma aplicação completa voltada ao gerenciamento de hábitos e tarefas diárias com foco em produtividade pessoal.

Na **Versão 1.5**, o projeto passou por uma evolução significativa:

* **Implementação de Backend Robusto com NestJS:**
  * **Criação e Gestão de Rotas:** Arquitetura modular organizada por domínios (`auth`, `users`, `tasks`).
  * **Inicialização e Configuração de Servidor:** Servidor HTTP com CORS configurado e documentação interativa via Swagger.
  * **Renderização e Consumo de Páginas:** Separação clara entre a camada visual (Frontend) e a camada de serviços/dados (API REST).
  * **Autenticação e Sessões Seguras:** Implementação de autenticação via JSON Web Token (JWT) com proteção de rotas via Guards e hash criptográfico de senhas.

---

## Tecnologias

### Frontend:
* **HTML5:** Estruturação semântica das páginas de login, cadastro e dashboard de tarefas.
* **CSS3:** Estilização moderna com layout responsivo, modais interativos, efeitos visuais e temas escuros/claros bem definidos.
* **JavaScript (Vanilla JS):** Lógica dinâmica no lado do cliente, integração assíncrona com a API REST via `fetch`, manipulação do DOM e persistência do token de acesso no `localStorage`.

### Backend:
* **NestJS (v11):** Framework Node.js progressivo para construção de aplicações backend eficientes, escaláveis e fortemente tipadas com TypeScript.
* **Autenticação com JWT & Passport:** Proteção de endpoints, controle de acesso e emissão de tokens seguros (`@nestjs/jwt`, `@nestjs/passport`, `passport-jwt`).
* **Criptografia & Segurança:** Criptografia de senhas de usuários utilizando `bcrypt`.
* **Validação de Dados:** Validação e tipagem de payloads através de DTOs com `class-validator` e `class-transformer`.
* **Swagger / OpenAPI:** Documentação interativa e testes das rotas da API em tempo real (`@nestjs/swagger`).

### Armazenamento:
* **PostgreSQL (v17):** Banco de dados relacional robusto para armazenamento de usuários e hábitos.
* **Prisma ORM (v6):** Modelagem de esquema, migrações automatizadas e queries seguras e tipadas via `@prisma/client`.
* **Docker & Docker Compose:** Containerização do banco de dados PostgreSQL para facilidade e padronização do ambiente de desenvolvimento.

---

## Funcionalidades

Após efetuar o cadastro e login, o usuário autenticado obtém acesso ao dashboard principal (`task.html`), onde pode:

* **Criar novos hábitos:** Adicionar tarefas e hábitos rapidamente através de uma janela modal sem sair da página.
* **Visualizar tarefas pendentes:** Acompanhar hábitos ativos que ainda precisam ser realizados no dia.
* **Marcar tarefas como concluídas:** Atualizar o estado da tarefa em tempo real com sincronização imediata no banco de dados.
* **Excluir hábitos:** Remover tarefas indesejadas ou concluídas individualmente.
* **Acompanhar progresso percentual:** Barra de progresso visual e dinâmica que calcula e exibe em tempo real a taxa de conclusão dos hábitos.
* **Temporizador integrado (Timer de Foco):**
  * Cronômetro personalizável com configuração de horas, minutos e segundos.
  * Controles intuitivos de Iniciar (*Play*), Pausar (*Pause*) e Reiniciar (*Reset*).
  * Alerta sonoro integrado emitido automaticamente ao término do tempo estipulado.
* **Data dinâmica:** Exibição automática da data atual no cabeçalho da aplicação.
* **Autenticação e Proteção:** Rotas de hábitos protegidas por JWT, impedindo acessos não autenticados e isolando os hábitos por usuário.

---

## Como iniciar o projeto

Siga o passo a passo abaixo para rodar a aplicação completa localmente.

### Pré-requisitos
* [Node.js](https://nodejs.org/) (versão `>= 20.0.0`)
* Gerenciador de pacotes [pnpm](https://pnpm.io/) (ou npm)
* [Docker](https://www.docker.com/) e Docker Compose instalados e em execução

---

### 1. Clonar o repositório
```bash
git clone https://github.com/gsaad2305/Habit-Treacker-Project.git
cd Habit-Treacker-Project
```

---

### 2. Configurar o Backend e o Banco de Dados

Navegue até a pasta do backend:
```bash
cd backend
```

Crie o arquivo de variáveis de ambiente com base no exemplo:
```bash
cp .env.example .env
```

> **Nota:** Verifique as credenciais no arquivo `.env` para garantir compatibilidade com seu ambiente local ou com o `docker-compose.yml`.

Inicie o container do PostgreSQL em segundo plano:
```bash
docker compose up -d
```

Instale as dependências do projeto:
```bash
pnpm install
```

Gere os artefatos do Prisma ORM e execute as migrações no banco:
```bash
npx prisma generate
npx prisma db push
```

---

### 3. Executar o Servidor Backend

Inicie a API NestJS em modo de desenvolvimento (hot-reload):
```bash
pnpm start:dev
```

O servidor iniciará por padrão em: `http://localhost:3001`

* **Documentação Swagger (API):** Acesse `http://localhost:3001/api` no seu navegador para visualizar e testar os endpoints interativamente.

---

### 4. Executar o Frontend

Como o frontend foi desenvolvido em HTML, CSS e Vanilla JS, você pode executá-lo de forma simples:

1. Volte para a raiz do projeto ou abra a pasta no VS Code.
2. Inicie a página `view/index.html` utilizando a extensão **Live Server** do VS Code (recomendado) ou abrindo o arquivo diretamente em seu navegador.
3. Cadastre um novo usuário pela página `view/registrar.html` ou faça login na tela principal `view/login.html` para acessar o painel de hábitos.

---

## Considerações Finais

Este projeto representa um marco fundamental na minha trajetória como desenvolvedor. Ele serviu como base para consolidar e aprofundar grandes aprendizados práticos, unindo a criação de uma interface limpa em Frontend Vanilla à robustez de uma arquitetura Backend profissional orientada a módulos com NestJS, Prisma e PostgreSQL.

Sendo um dos meus primeiros grandes projetos completos full stack, tenho muito orgulho da evolução alcançada até a versão 1.5. Novas melhorias, refatorações e recursos continuarão sendo adicionados no futuro!
