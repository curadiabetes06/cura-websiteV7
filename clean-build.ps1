# Clean and Rebuild Script for Cura Diabetes Website
# Run this if you encounter build errors

Write-Host "🧹 Cleaning build directories..." -ForegroundColor Cyan

# Remove .next directory
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
    Write-Host "✓ Removed .next directory" -ForegroundColor Green
}

# Remove node_modules (optional, uncomment if needed)
# if (Test-Path "node_modules") {
#     Remove-Item -Recurse -Force node_modules
#     Write-Host "✓ Removed node_modules" -ForegroundColor Green
# }

Write-Host ""
Write-Host "🔄 Starting development server..." -ForegroundColor Cyan
Write-Host ""

# Start dev server
npm run dev

