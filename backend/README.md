# TODO List - Backend API

Sistema de gerenciamento de tarefas - REST API

## Tecnologias

- Node.js
- TypeScript
- Express.js
- MS SQL Server
- Zod (validação)

## Estrutura do Projeto

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── config/           # Configuration
└── server.ts         # Application entry point
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente
3. Configure a conexão com o banco de dados SQL Server

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Produção

```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Verifica o status da API

### API v1
- Base URL: `/api/v1`
- External routes: `/api/v1/external/*`
- Internal routes: `/api/v1/internal/*`

## Funcionalidades

- Criação de Tarefas
- Categorização de Tarefas
- Definição de Prioridades
- Estabelecimento de Prazos
- Marcação de Conclusão
- Busca de Tarefas
- Notificações e Lembretes
- Compartilhamento de Tarefas
- Visualização em Calendário
- Sincronização Multiplataforma

## Padrões de Código

- TypeScript strict mode
- Path aliases com @/
- Validação com Zod
- Multi-tenancy support
- Error handling padronizado
- TSDoc documentation

## Licença

ISC