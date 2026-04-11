# Projeto Habit-Treacker Version 1.2
Uma das Melhorias foi a reformulação da tela de login, deixando a interface mais limpa e organizada.

Também passei a permitir que novos hábitos sejam criados diretamente na tela principal, sem precisar navegar para outra página. Isso deixou a experiência mais prática e próxima de uma aplicação real.

Mas o principal avanço foi a implementação do Node.js com Express, onde comecei a :

- Criação de rotas

- Inicialização de servidor

- Renderização de páginas

- Uso de sessões.

## Tecnologias:

### Frontend:
- HTML
- CSS
- JavaScript (Vanilla Js)

### Backend:
- Node.js
- Express
- Express-Session
- EJS(Para renderização das páginas HTML)

### Armazenamento:
- Local Storage(Futuramente será substituido por um banco de dados)

## Funcionalidades
Após o fazer o login o usuário tem acesso a página principal onde é possível:
- Criar novos hábitos
- Visualizar tarefas pendentes
- Marcar tarefas como concluídas
- Acompanhar os progressos atráves de uma barra percentual 
- Temporizador integraado

As tarefas são armazendas no navegador utilizando Local Storage, permitindo com que continuem salvas mesmo após recarregar a página

## Como iniciar o projeto
Para iniciar o projeto a fins de teste deve-se ter o Node.js instalado na sua máquina.

Primeiro instale as dependências:
```
npm install
```
Depois de instalada as dependências inicie o arquivo app.js:
```
node app.js
```

Após ter iniciado o arquivo app.js acesse página:
```
http://localhost:3000
```
Se iniciar via live server, o index.html não redirecionara para página task.html retornando um erro e se inicar o task.html ele não ira salvar os dados.

## Melhorias planejadas:
- Integração com banco de dados (SQLite ou MongoDB)
- Sistema de autenticação mais completo
- Criptografia de senha
- Suporte a múltiplos usuários

O objetivo é tornar com que este projeto seja mais completo, sendo mais próxima de um sistema real.

## Considerações Finais
Este projeto utilizo ele como base de grandes aprendizados, sinto que sendo meu primeiro grande projeto Frontend digamos, depois do meu portfolio é claro, então sinto-me horando em ter chegado até aqui.
Futuramente trarei mais melhorias para este projeto, mas até o momento é isto daqui!
