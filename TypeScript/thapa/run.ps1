# Run a TypeScript file: compile with tsconfig, output to dist, then execute
# Usage: .\run.ps1 object
# or: .\run.ps1 array_operation

param(
    [string]$FileName = "object"
)

Write-Host "Building project..." -ForegroundColor Cyan
npm run build

$jsFile = "dist\$FileName.js"

if (Test-Path $jsFile) {
    Write-Host "Running $jsFile..." -ForegroundColor Green
    node $jsFile
} else {
    Write-Host "Error: $jsFile not found. Make sure the file exists in src/" -ForegroundColor Red
}
