# Sarvum Setup Guide

## Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- PostgreSQL (local or cloud)
- Redis (optional for caching)
- Git

## Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/your-org/sarvum.git
cd sarvum
```

2. **Install Dependencies** 

Each service has its own folder. Navigate and install:

```bash
cd services/arya
npm install
```
3. **Environment Variables**

Create a .env file in each service folder:

```env
PORT=3001
DB_URL=postgres://user:pass@localhost:5432/arya
JWT_SECRET=your-secret-key
```
4. **Start Services**

Use Docker Compose to spin up all services:

```bash
docker-compose up --build
```
5. **Database Setup**

Run migrations or seed scripts:

```bash
npm run migrate
npm run seed
```
6. **Running Locally**

Access services via http://localhost:<port>
Frontend runs on port 3000 by default
7. **Testing**

    - Unit tests: npm test
    - Integration tests: npm run test:integration

8. **Troubleshooting**
- Port conflicts: Check .env and Docker settings
- Database errors: Ensure PostgreSQL is running and accessible
- Missing env vars: Double-check .env files



---
Let me know if you'd like to tailor this to a specific tech stack or add diagrams and links. I can also help you generate the `README.md` or service-specific docs next.

---
