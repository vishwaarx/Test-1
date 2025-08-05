# Form Handler App

A modern, responsive Node.js/Express application with Docker containerization that handles form submissions via AJAX. Features a beautiful UI with real-time form validation and seamless user experience.

## 🚀 Features

- ✅ **Modern UI**: Beautiful gradient design with smooth animations
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✅ **AJAX Form Submission**: No page reload, real-time feedback
- ✅ **Form Validation**: Both client-side and server-side validation
- ✅ **Docker Containerization**: Production-ready with security best practices
- ✅ **Health Checks**: Built-in health monitoring
- ✅ **Error Handling**: Comprehensive error handling and user feedback

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Git** - [Download Git](https://git-scm.com/downloads)
- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Docker** - [Download Docker](https://www.docker.com/products/docker-desktop/)

## 🛠️ Installation & Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <your-repository-url>
cd form-handler-app

# Or if you're starting from scratch, create the project structure
mkdir form-handler-app
cd form-handler-app
```

### Step 2: Install Dependencies

#### Option A: Local Development (Recommended for Development)

```bash
# Install all dependencies (including dev dependencies)
npm install

# Verify installation
npm list
```

#### Option B: Docker (Recommended for Production)

```bash
# Build the Docker image
docker build -t form-handler-app .

# Verify the image was created
docker images | grep form-handler-app
```

## 🏃‍♂️ Running the Application

### Option 1: Local Development

```bash
# Start the development server with auto-reload
npm run dev

# Or start the production server
npm start
```

**Access the application at:** http://localhost:3000

### Option 2: Docker (Production Ready)

```bash
# Run the container in the background
docker run -d -p 3000:3000 --name form-app form-handler-app

# Check if the container is running
docker ps

# View application logs
docker logs form-app
```

**Access the application at:** http://localhost:3000

### Option 3: Quick Start Script (Windows PowerShell)

```powershell
# Run the quick start script
.\start.ps1
```

## 🧪 Testing the Application

### 1. Health Check
```bash
# Test the health endpoint
curl http://localhost:3000/health

# Expected response:
# {"status":"OK","timestamp":"2025-08-05T05:05:47.042Z"}
```

### 2. Form Submission Test
1. Open http://localhost:3000 in your browser
2. Fill out the contact form
3. Submit the form
4. Verify you receive a success message

### 3. API Testing
```bash
# Test the form submission API directly
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message!"
  }'
```

## 📁 Project Structure

```
form-handler-app/
├── public/                 # Static frontend files
│   ├── index.html         # Main HTML form
│   ├── style.css          # CSS styles and animations
│   └── main.js            # Frontend JavaScript (AJAX)
├── server.js              # Express.js backend server
├── package.json           # Node.js dependencies and scripts
├── Dockerfile             # Docker configuration
├── .dockerignore          # Docker build exclusions
├── start.ps1             # PowerShell quick-start script
└── README.md             # This documentation
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Start production server
npm start

# Check for linting issues
npm run lint

# Run tests (if configured)
npm test
```

## 🐳 Docker Commands

```bash
# Build the Docker image
docker build -t form-handler-app .

# Run container in foreground
docker run -p 3000:3000 form-handler-app

# Run container in background
docker run -d -p 3000:3000 --name form-app form-handler-app

# Stop the container
docker stop form-app

# Remove the container
docker rm form-app

# View container logs
docker logs form-app

# Access container shell
docker exec -it form-app sh

# Remove the Docker image
docker rmi form-handler-app
```

## 🌐 API Endpoints

### GET /
- **Description**: Serves the main HTML form
- **Response**: HTML page

### POST /submit
- **Description**: Handles form submissions
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello world!"
  }
  ```
- **Success Response**:
  ```json
  {
    "success": true,
    "message": "Thank you John Doe! Your message has been received successfully."
  }
  ```
- **Error Response**:
  ```json
  {
    "success": false,
    "message": "All fields are required"
  }
  ```

### GET /health
- **Description**: Health check endpoint
- **Response**:
  ```json
  {
    "status": "OK",
    "timestamp": "2025-08-05T05:05:47.042Z"
  }
  ```

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port number |

## 🔒 Security Features

- **Non-root Docker user**: Container runs as non-root user for security
- **Input validation**: Server-side validation for all form inputs
- **Error handling**: Comprehensive error handling without exposing internals
- **Health checks**: Built-in health monitoring
- **CORS protection**: Express.js built-in security

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using port 3000
netstat -ano | findstr :3000

# Kill the process or use a different port
set PORT=3001 && npm start
```

#### 2. Docker Build Fails
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t form-handler-app .
```

#### 3. Container Won't Start
```bash
# Check container logs
docker logs form-app

# Check container status
docker ps -a

# Restart the container
docker restart form-app
```

#### 4. Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development Notes

- **Frontend**: Vanilla JavaScript with modern ES6+ features
- **Backend**: Express.js with JSON middleware
- **Styling**: CSS3 with gradients and animations
- **Container**: Alpine Linux for minimal image size
- **Security**: Non-root user, input validation, error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Express.js and Node.js
- Containerized with Docker
- Styled with modern CSS3
- Icons and emojis for better UX

---

**Happy Coding! 🚀** 