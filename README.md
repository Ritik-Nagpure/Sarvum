# Sarvum 🧩

Sarvum is a modular Node.js + TypeScript monorepo designed to host multiple microservices under a unified Express server. Each service is independently authenticated, database-isolated, and domain-specific, while sharing a centralized payment system.

## 🚀 Services

| Service      | Description                                      | DB Type   |
|--------------|--------------------------------------------------|-----------|
| `vastra`     | Clothing e-commerce: products, orders, users     | PostgreSQL |
| `rides`      | Car rental platform: vehicles, bookings          | PostgreSQL |
| `astrobit`   | AI-powered chatbot: NLP, responses               | PostgreSQL |
| `codegears`  | Chat & call app: messaging, WebRTC               | PostgreSQL |
| `arya`       | AI assistant backend: flexible, schema-less      | MongoDB    |
| `habla`      | Real-time communication layer                    | TBD        |
| `payments`   | Centralized payment service                      | PostgreSQL |

## 🧱 Architecture

- **Express + TypeScript** backend
- **Prisma ORM** with PostgreSQL & MongoDB
- **Modular routing** per service
- **JWT-based authentication**
- **Centralized payment handling**
- **Render deployment-ready**

## 📁 Project Structure

```
.
└── sarvum /
    ├── public           # Static files and content to share 
    ├── src              # Service logic 
    ├── prisma           # DB schemas 
    ├── docs             # Architecture & API documentation 
    ├── .env             # Environment variables 
    ├── package.json     # Dependencies 
    ├── tsconfig.json    # TypeScript config 
    └── dist             # Compiled output
```

Code

## 🛠 Setup

1. Clone the repo  
2. Install dependencies: `npm install`  
3. Set up `.env` with DB and API keys  
4. Generate Prisma clients:  
   ```bash
   npx prisma generate
   ```
5. Start dev server:

    ```bash
    npm run serve
    ```

## 📦 Deployment

Sarvum is optimized for deployment on Render. See docs/deployment.md for CI/CD setup.  

Below are some links to utilize the deployed service for free.
1. [Sarvum API Link](https://sarvum.onrender.com/)
2. [Sarvum ElasticSearch + Kibana]()
3. [Sarvum Grafana Link](https://sarvum.grafana.net/)


## 📚 Documentation
- Architecture: `docs/architecture.md`
- Service APIs: `docs/services/*/api.md`
- Workflows: `docs/services/*/workflows.md`
