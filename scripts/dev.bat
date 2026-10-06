@echo off
REM Development server script (Windows)
REM Enterprise-grade Jekyll development environment

setlocal enabledelayedexpansion

echo Starting development server...

REM Install dependencies
echo Installing dependencies...
call bundle install --path vendor/bundle

REM Start development server
echo Starting Jekyll server on http://localhost:4000
echo Watching for file changes...
echo Press Ctrl+C to stop

call bundle exec jekyll serve ^
  --config config/_config.yml ^
  --livereload ^
  --livereload-port 35729 ^
  --source source

echo Development server stopped

endlocal
