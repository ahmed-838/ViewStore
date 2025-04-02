<!-- Schema.org markup for Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "ViewStore E-Commerce Platform",
  "description": "Full-stack e-commerce solution with Next.js, Node.js and DevOps integration",
  "keywords": "ecommerce, nextjs, nodejs, docker, devops",
  "author": {
    "@type": "Person",
    "name": "Ahmed"
  },
  "codeRepository": "https://github.com/ahmed-838/ViewStore",
  "runtimePlatform": "Node.js",
  "softwareHelp": "https://github.com/ahmed-838/ViewStore/issues"
}
</script>

# 🛍️ ViewStore - Professional E-Commerce Platform

<div align="center">
  <img src="./assets/system-architecture.png" width="800" alt="ViewStore Architecture">
  
  <!-- Badges Section -->
  [![GitHub stars](https://img.shields.io/github/stars/ahmed-838/ViewStore?style=for-the-badge&logo=github)](https://github.com/ahmed-838/ViewStore/stargazers)
  [![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)
  [![Node Version](https://img.shields.io/badge/node-%3E%3D18.19.1-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](./CONTRIBUTING.md)
</div>

## 🌟 Key Features
- **Multi-interface System**: Seamless separation between customer store and admin panel
- **Production-Ready**: Dockerized with CI/CD pipelines
- **Real-time Sync**: Instant product updates across platforms
- **Modern Stack**: Built with cutting-edge technologies

## 🛠️ Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&style=flat)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-%2338B2AC?logo=tailwind-css)
![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-0.5.0-%2320232a?logo=react)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-18.19.1-%23339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.2-%23000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-%2347A248?logo=mongodb)

### DevOps
![Docker](https://img.shields.io/badge/Docker-24.0.7-%232496ED?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%232671E5?logo=github-actions)
![Terraform](https://img.shields.io/badge/Terraform-1.6.3-%23843DF7?logo=terraform)

## 🏗️ Project Structure
| Directory | Tech Stack | Port | Description |
|-----------|------------|------|-------------|
| [`/client`](./client) | Next.js 14, TailwindCSS | 3001 | Customer storefront with cart functionality |
| [`/admin`](./admin) | Next.js 14, ShadCN UI | 3333 | Admin dashboard with real-time controls |
| [`/server`](./server) | Node.js, Express, MongoDB | 4444 | REST API with JWT authentication |

## 🔗 Project Links & Resources

<div align="center">
  <a href="https://viewstore.shop">
    <img src="https://img.shields.io/badge/Live_Demo-ViewStore-green?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
  <a href="https://api.viewstore.example.com/docs">
    <img src="https://img.shields.io/badge/API_Documentation-Swagger-blue?style=for-the-badge&logo=swagger" alt="API Docs">
  </a>
  <a href="./CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/Contribute-Guidelines-brightgreen?style=for-the-badge&logo=github" alt="Contribute">
  </a>
</div>

### 🌐 Essential Links
| Resource | Link | Description |
|----------|------|-------------|
| 🚀 Production Deployment | [https://viewstore.shop](https://viewstore.shop) | Main storefront |
| 🔧 Admin Dashboard | [https://admin.viewstore.shop](https://admin.viewstore.shop) | Admin control panel |
| 📚 API Docs | [https://api.viewstore.example.com/docs](https://api.viewstore.example.com/docs) | Interactive API documentation |


### 🔧 Development Resources
| Tool | Link | 
|------|------|
| 🐞 Issue Tracker | [GitHub Issues](https://github.com/ahmed-838/ViewStore/issues) |
| 📦 Package Registry | [ViewStore npm](https://npmjs.com/org/viewstore) |
| 🛠️ CI/CD Pipeline | [GitHub Actions](https://github.com/ahmed-838/ViewStore/actions) |
| 📊 Monitoring | [Grafana Dashboard](#) |



## 🚀 Professional Quick Start

### Prerequisites
- Node.js v18.19.1+ (`node -v`)
- npm v9.2.0+ (`npm -v`)
- MongoDB server running locally or remotely
- Git for version control

### Installation
```bash
# Clone repository
git clone https://github.com/ahmed-838/ViewStore.git
cd ViewStore

# Install dependencies for all services
./scripts/install-all.sh

# Configure environment
cp client/.env.example client/.env
cp admin/.env.example admin/.env
cp server/.env.example server/.env