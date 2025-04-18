# fc-configurator

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+ or yarn v1.22+
- Git

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/sachinlathiya/fc-configurator.git
cd fc-configurator
```

2. Create `.env` files from examples:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. Install dependencies:
```bash
cd backend && npm install
cd ../frontend && npm install
```

4. Running the Application in Dev Envirnment:
```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

## App Urls
```bash
# Frontend
http://localhost:5173/

# Backend Api Url
http://localhost:5000/api

