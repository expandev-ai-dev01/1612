# TODO List App

Sistema de gerenciamento de tarefas

## Features

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

## Tech Stack

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Tailwind CSS 3.4.14
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── app/                 # Application configuration
│   ├── App.tsx         # Root component
│   └── router.tsx      # Routing configuration
├── pages/              # Page components
│   ├── layouts/        # Layout components
│   ├── Home/          # Home page
│   └── NotFound/      # 404 page
├── domain/            # Business domains
├── core/              # Shared components and utilities
│   ├── components/    # Generic UI components
│   ├── lib/          # Library configurations
│   ├── utils/        # Utility functions
│   ├── types/        # Global types
│   └── constants/    # Global constants
└── assets/           # Static assets
    └── styles/       # Global styles
```

## API Configuration

The application uses a versioned REST API with separate endpoints:

- Public endpoints: `/api/v1/external/`
- Authenticated endpoints: `/api/v1/internal/`

Configure API URL in `.env` file.

## License

Private project