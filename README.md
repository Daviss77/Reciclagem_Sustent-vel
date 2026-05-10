# ♻️ Reciclagem Sustentável

> Projeto Integrador — Análise e Desenvolvimento de Sistemas | SENAC SP

Plataforma web voltada à conscientização ambiental e ao descarte correto de resíduos. Oferece orientações sobre reciclagem, dicas de reaproveitamento, listagem de ONGs parceiras e um painel administrativo completo para gerenciamento da plataforma.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Integrantes](#integrantes)

---

## 📖 Sobre o Projeto

O **Reciclagem Sustentável** é uma aplicação full-stack desenvolvida como projeto integrador do último semestre do curso de ADS. A proposta é facilitar o acesso à informação sobre práticas sustentáveis e conectar usuários a ONGs que atuam na área ambiental.

O backend foi construído seguindo a arquitetura **DDD (Domain-Driven Design)** com os princípios **SOLID**, garantindo separação clara de responsabilidades, facilidade de manutenção e escalabilidade.

---

## ✅ Funcionalidades

### Usuário
- Cadastro e login com autenticação por e-mail e senha
- Visualização da página home com seções informativas
- Acesso à listagem de ONGs parceiras cadastradas

### Administrador
- Login com redirecionamento automático para painel admin
- Painel de gerenciamento de ONGs (CRUD completo)
  - Criar, editar, deletar e buscar ONGs por nome
  - ONGs cadastradas aparecem automaticamente na home
- Painel de gerenciamento de usuários
  - Buscar usuário por e-mail
  - Deletar usuário

---

## 🛠 Tecnologias

### Backend
| Tecnologia | Versão | Uso |
|---|---|---|
| Java | 17+ | Linguagem principal |
| Spring Boot | 3.x | Framework web |
| Spring Data JPA | 3.x | Persistência de dados |
| Hibernate | 6.x | ORM |
| PostgreSQL / MySQL | — | Banco de dados relacional |
| Lombok | — | Redução de boilerplate |
| Maven | — | Gerenciador de dependências |

### Frontend
| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.x | Interface do usuário |
| Vite | 5.x | Bundler e dev server |
| React Router DOM | 6.x | Navegação entre telas |
| CSS Modules | — | Estilização por componente |
| Fetch API | — | Comunicação com o backend |

---

## 🏗 Arquitetura

O backend segue a arquitetura **DDD (Domain-Driven Design)** combinada com os princípios **SOLID**:

```
┌─────────────────────────────────────────┐
│             controller/                  │  ← Recebe requisições HTTP
├─────────────────────────────────────────┤
│             application/                 │  ← Casos de uso e contratos
│   ├── usecase/                           │
│   ├── port/                              │
│   ├── dto/                               │
│   └── mapper/                            │
├─────────────────────────────────────────┤
│             domain/entity/               │  ← Regras de negócio puras
├─────────────────────────────────────────┤
│             infra/persistence/           │  ← Implementações JPA
├─────────────────────────────────────────┤
│             config/                      │  ← CORS, segurança, beans
└─────────────────────────────────────────┘
```

### Princípios SOLID aplicados

- **S** — Cada classe tem uma única responsabilidade
- **O** — Troca de banco de dados sem alterar regras de negócio
- **L** — Qualquer implementação de Port pode substituir outra
- **I** — Ports declaram apenas o que o UseCase precisa
- **D** — UseCases dependem de interfaces, não de implementações JPA

---

## 📁 Estrutura do Projeto

```
Reciclagem_Sustentável/
│
├── backend/
│   └── src/main/java/com/edu/senac/reciclagem/backend/
│       ├── controller/
│       │   ├── UserController.java
│       │   ├── OngController.java
│       │   └── AdminController.java
│       │
│       ├── application/
│       │   ├── dto/
│       │   │   ├── users/
│       │   │   │   ├── UserRequest.java
│       │   │   │   └── UserResponse.java
│       │   │   ├── LoginRequest.java
│       │   │   ├── LoginResponse.java
│       │   │   ├── OngRequest.java
│       │   │   └── OngResponse.java
│       │   ├── port/
│       │   │   ├── UserRepositoryPort.java
│       │   │   └── OngRepositoryPort.java
│       │   └── usecase/
│       │       ├── user/
│       │       │   ├── CreateUserUseCase.java
│       │       │   ├── GetUserUseCase.java
│       │       │   ├── UpdateUserUseCase.java
│       │       │   ├── DeleteUserUseCase.java
│       │       │   └── LoginUseCase.java
│       │       └── ong/
│       │           ├── CreateOngUseCase.java
│       │           ├── GetOngUseCase.java
│       │           ├── UpdateOngUseCase.java
│       │           └── DeleteOngUseCase.java
│       │
│       ├── domain/entity/
│       │   ├── User.java
│       │   ├── Ong.java
│       │   └── Role.java
│       │
│       ├── infra/persistence/
│       │   ├── UserJpaRepository.java
│       │   ├── UserRepositoryImpl.java
│       │   ├── OngJpaRepository.java
│       │   └── OngRepositoryImpl.java
│       │
│       └── config/
│           └── CorsConfig.java
│
└── frontend/
    └── reciclagem-app/
        └── src/
            ├── pages/
            │   ├── Login.jsx
            │   ├── Cadastro.jsx
            │   ├── Home.jsx
            │   ├── Admin.jsx
            │   ├── Ongs.jsx
            │   └── Users.jsx
            ├── services/
            │   └── userService.js
            └── css/
                ├── Login.css
                ├── Cadastro.css
                ├── Home.css
                └── Options.css
```

---

## 🚀 Como Executar

### Pré-requisitos

- Java 17+
- Node.js 18+
- Maven
- PostgreSQL ou MySQL rodando localmente

### Backend

```bash
# Clone o repositório
git clone https://github.com/Daviss77/Reciclagem_Sustent-vel.git

# Acesse a pasta do backend
cd Reciclagem_Sustent-vel/backend

# Configure o banco de dados em:
# src/main/resources/application.properties

# Execute o projeto
./mvnw spring-boot:run
```

**Configuração do `application.properties`:**
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/reciclagem
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

O backend sobe em: `http://localhost:8080`

### Frontend

```bash
# Acesse a pasta do frontend
cd Reciclagem_Sustent-vel/frontend/reciclagem-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend sobe em: `http://localhost:5173`

### Criando o usuário Admin

Após cadastrar um usuário normalmente pelo frontend, execute o SQL abaixo no banco para promovê-lo a administrador:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'seu-email@exemplo.com';
```

---

## 📡 Endpoints da API

### Usuários — `/users`

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/users` | Cadastrar novo usuário |
| `POST` | `/users/login` | Autenticar usuário |
| `GET` | `/users` | Listar todos os usuários |
| `GET` | `/users/{id}` | Buscar usuário por ID |
| `PUT` | `/users/{id}` | Atualizar usuário |
| `DELETE` | `/users/{id}` | Deletar usuário |

### ONGs — `/ongs`

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/ongs` | Cadastrar nova ONG |
| `GET` | `/ongs` | Listar todas as ONGs |
| `GET` | `/ongs?name={nome}` | Buscar ONG por nome |
| `GET` | `/ongs/{id}` | Buscar ONG por ID |
| `PUT` | `/ongs/{id}` | Atualizar ONG |
| `DELETE` | `/ongs/{id}` | Deletar ONG |

### Admin — `/admin`

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/admin/users` | Listar todos os usuários |
| `GET` | `/admin/users/search?email=` | Buscar usuário por e-mail |
| `DELETE` | `/admin/users/{id}` | Deletar usuário |

---

## 🔄 Fluxo da Aplicação

```
Login
  ├── role: USER  → Home (visualização pública)
  └── role: ADMIN → Painel Admin
                        ├── Ongs → CRUD completo de ONGs
                        └── Users → Busca e remoção de usuários

Home
  ├── Seções informativas (Sobre, Tipos, Benefícios, Dicas, Contato)
  └── ONGs Parceiras → busca dinâmica do banco de dados
```

---

## 👥 Integrantes

| Nome |
|---|
| Ana Beatriz Martins Bezerra |
| Davi da Silva Santana |
| Matheus de Magalhães Palhares |
| Melissa Gonçalves Mendes |
| Arthur Rodrigues Portela |

---

<div align="center">
  <p>Projeto Integrador — Análise e Desenvolvimento de Sistemas</p>
  <p><strong>SENAC SP</strong></p>
</div>

