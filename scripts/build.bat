@echo off
REM Build script for production (Windows)
REM Enterprise-grade Jekyll build

setlocal enabledelayedexpansion

echo Building production site...

REM Clean previous builds
echo Cleaning previous build artifacts...
if exist _site rmdir /s /q _site
if exist .jekyll-cache rmdir /s /q .jekyll-cache

REM Install dependencies
echo Installing dependencies...
call bundle install --path vendor/bundle

REM Build site
echo Building Jekyll site...
call bundle exec jekyll build --config config/_config.yml

REM Verify build
if exist _site (
    echo Build completed successfully!
    echo Build size: 
    for /f %%A in ('dir /s /b _site ^| find /c /v ""') do set count=%%A
    echo Files: !count!
) else (
    echo Build failed!
    exit /b 1
)

endlocal
