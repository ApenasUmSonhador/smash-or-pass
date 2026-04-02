# Smash or Pass

## 📌 Descrição

O **Smash or Pass** é uma aplicação web inspirada no modelo de interação do Tinder, aplicada ao domínio culinário. A plataforma permite que usuários descubram novas receitas de forma rápida e intuitiva por meio de interações simples de interesse (“Smash”) ou desinteresse (“Pass”).

Além da descoberta, usuários podem cadastrar suas próprias receitas, visualizar receitas curtidas e interagir com conteúdos de outros usuários.

O projeto foi desenvolvido como trabalho final da disciplina de Desenvolvimento de Software para Web, com foco na aplicação prática de conceitos como arquitetura cliente-servidor, APIs REST, autenticação e organização em camadas.

---

## 🎯 Objetivo

Desenvolver uma aplicação web completa que integre frontend, backend e banco de dados, demonstrando:

- Separação de responsabilidades entre camadas
- Implementação de API REST
- Autenticação de usuários
- Persistência de dados
- Organização modular do código

## ⚙️ Funcionalidades

### 🔐 Autenticação

- Cadastro de usuário
- Login com geração de token JWT
- Proteção de rotas autenticadas

### 🍽️ Receitas

- Criação de receitas
- Edição de receitas próprias
- Exclusão de receitas próprias
- Visualização de receitas

### 🔥 Interação (Smash or Pass)

- Marcar receita como "Smash" (curtida)
- Marcar receita como "Pass"
- Registro de interações por usuário

### ⭐ Favoritos

- Listagem de receitas curtidas
- Remoção de receitas da lista

### 💬 Comentários

- Comentários em receitas
- Visualização de comentários

### 🏷️ Categorias

- Organização de receitas por categoria
- Filtros de busca

### 🛠️ Administração

- Remoção de receitas
- Gerenciamento de usuários
- Dashboard com métricas

---

## 👥 Papéis de Usuário

### Usuário Comum

- Criar conta e autenticar
- Visualizar receitas
- Interagir com receitas
- Criar, editar e excluir suas próprias receitas
- Visualizar receitas curtidas

### Administrador

- Todas as permissões de usuário comum
- Remover qualquer receita
- Gerenciar usuários
- Moderar conteúdo

---

## 🧱 Arquitetura

O sistema segue o modelo **cliente-servidor**, com separação clara entre frontend e backend.

### Backend

Organizado em camadas:

- Routes
- Controllers
- Services
- Repositories

### Frontend

- Baseado em componentes reutilizáveis
- Consumo de API REST

---

## 🗄️ Modelo de Dados (Resumo)

### Usuário

- id
- nome
- email
- senha (criptografada)
- papel
- data de criação

### Receita

- id
- título
- descrição
- ingredientes
- modo de preparo
- tempo de preparo
- imagem
- autor

### Interação

- id
- usuário
- receita
- tipo (smash/pass)
- data

---

## 🛠️ Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Prisma (ORM)
- PostgreSQL
- JWT (autenticação)
- Bcrypt (criptografia de senha)

### Frontend

- ReactJS
- Axios (cuidado com versão que sofreu ataque de segurança, usar versão segura)

### Ferramentas

- Git & GitHub
- Trello (gestão)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL configurado

---

### 🔧 Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

---

### 💻 Frontend

```bash
cd frontend
npm install
npm start
```

---

### 📡 API

A API segue os princípios REST:

- Uso adequado de métodos HTTP (GET, POST, PUT, DELETE)
- Retorno de status codes apropriados
- Tratamento de erros

A documentação pode ser acessada via Swagger após execução do backend.

---

## 📁 Estrutura do Projeto

```bash
smash-or-pass/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middlewares/
│   │   └── config/
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        ├── services/
        └── hooks/
```

---

## 📊 Organização do Projeto

O desenvolvimento foi conduzido utilizando práticas ágeis, com divisão de tarefas entre os membros da equipe e acompanhamento via quadro Kanban.

## 🧪 Possíveis Melhorias

- Testes automatizados
- Paginação de resultados
- Upload de imagens
- Filtros avançados
- Melhorias de UI/UX

## 📌 Status do Projeto

**Em desenvolvimento!**

## 👨‍💻 Equipe

- [Arthur Vinicius Carneiro Nunes](https://github.com/ApenasUmSonhador)
- [João Igor Almeida Gomes](https://github.com/Igoxrx)
- [Marcos Antonio Alencar da Rocha Junior](https://github.com/mirkojr)
- [Samyra Vitoria Lima de Almeida](https://github.com/samyraalmeida)

## 🤝 Contribuição

Antes de fazer commits, veja as diretrizes em [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
