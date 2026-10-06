#!/bin/bash
# Development server script
# Enterprise-grade Jekyll development environment

set -e

echo "🚀 Starting development server..."

# Install dependencies
echo "📥 Installing dependencies..."
bundle install --path vendor/bundle

# Start development server
echo "🌐 Starting Jekyll server on http://localhost:4000"
echo "💾 Watching for file changes..."
echo "📝 Press Ctrl+C to stop"

bundle exec jekyll serve \
  --config config/_config.yml \
  --livereload \
  --livereload-port 35729 \
  --source source

echo "✅ Development server stopped"
