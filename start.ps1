# Form Handler App - Quick Start Script
Write-Host "🚀 Starting Form Handler App..." -ForegroundColor Green

# Build the Docker image
Write-Host "📦 Building Docker image..." -ForegroundColor Yellow
docker build -t form-handler-app .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Image built successfully!" -ForegroundColor Green
    
    # Run the container
    Write-Host "🐳 Starting container..." -ForegroundColor Yellow
    docker run -d -p 3000:3000 --name form-app form-handler-app
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Container started successfully!" -ForegroundColor Green
        Write-Host "🌐 Application is running at: http://localhost:3000" -ForegroundColor Cyan
        Write-Host "🏥 Health check: http://localhost:3000/health" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "To stop the container, run: docker stop form-app" -ForegroundColor Gray
        Write-Host "To remove the container, run: docker rm form-app" -ForegroundColor Gray
    } else {
        Write-Host "❌ Failed to start container" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Failed to build image" -ForegroundColor Red
} 