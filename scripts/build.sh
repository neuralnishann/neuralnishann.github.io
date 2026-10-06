#!/bin/bash
# Build script for production
# Enterprise-grade Jekyll build

set -e

echo "🏗️  Starting production build..."

# Clean previous builds
echo "📦 Cleaning previous build artifacts..."
rm -rf _site/
rm -rf .jekyll-cache/

# Install dependencies
echo "📥 Installing dependencies..."
bundle install --path vendor/bundle

# Build site
echo "🔨 Building Jekyll site..."
bundle exec jekyll build --config config/_config.yml

# Verify build
if [ -d "_site" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build statistics:"
    du -sh _site/
else
    echo "❌ Build failed!"
    exit 1
fi
