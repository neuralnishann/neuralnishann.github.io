# Enterprise-Grade Project Structure

## 📁 Directory Organization

```
neuralnishan.github.io/
│
├── 📄 Root Configuration Files
│   ├── _config.yml                 # Main Jekyll config
│   ├── Gemfile                     # Ruby dependencies
│   ├── Gemfile.lock
│   ├── package.json
│   ├── CNAME                       # GitHub Pages custom domain
│   ├── robots.txt                  # SEO robots configuration
│   ├── README.md                   # Project documentation
│   └── LICENSE                     # License file
│
├── 📁 config/
│   └── _config.yml                 # Enterprise config (source-aware)
│
├── 📁 source/                      # Main content source directory
│   ├── _data/                      # YAML data files
│   │   ├── authors.yml
│   │   ├── cv.json
│   │   ├── navigation.yml
│   │   ├── ui-text.yml
│   │   └── comments/
│   │
│   ├── _includes/                  # Reusable HTML components
│   │   ├── hero-section.html
│   │   ├── skills-section.html
│   │   ├── achievement-card.html
│   │   ├── publication-card.html
│   │   ├── author-profile.html
│   │   ├── footer.html
│   │   ├── masthead.html
│   │   ├── head.html
│   │   └── [other components]
│   │
│   ├── _layouts/                   # Page templates
│   │   ├── default.html
│   │   ├── single.html
│   │   ├── achievements.html
│   │   ├── archive.html
│   │   └── [other layouts]
│   │
│   ├── _sass/                      # SCSS source files
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _base.scss
│   │   └── [other sass files]
│   │
│   ├── pages/                      # Static pages (not using underscore prefix)
│   │   ├── about.md
│   │   ├── education.md
│   │   ├── experience.md
│   │   ├── certification.md
│   │   └── [other pages]
│   │
│   ├── posts/                      # Blog posts
│   │   └── [blog posts in YYYY-MM-DD-title.md format]
│   │
│   ├── projects/                   # Project showcase
│   │   ├── project-1.md
│   │   ├── project-2.md
│   │   └── [project files]
│   │
│   ├── achievements/               # Certifications and achievements
│   │   ├── 2025-01-16-achievement-8.md
│   │   ├── 2025-01-17-achievement-9.md
│   │   └── [achievement files]
│   │
│   ├── portfolio/                  # Portfolio items
│   │   ├── portfolio-1.md
│   │   └── portfolio-2.html
│   │
│   ├── teaching/                   # Teaching materials
│   │   └── [teaching content]
│   │
│   ├── talks/                      # Talks and presentations
│   │   └── [talk files]
│   │
│   ├── _drafts/                    # Draft posts (not published)
│   │   └── post-draft.md
│   │
│   └── index.md                    # Homepage (in source root)
│
├── 📁 assets/                      # Static assets (compiled)
│   ├── css/
│   │   ├── main.scss               # Main stylesheet
│   │   ├── modern-professional.css
│   │   ├── modern-layout-enhancements.css
│   │   ├── animations-interactive.css
│   │   ├── modern-footer.css
│   │   ├── landing-page-refinements.css
│   │   └── [other stylesheets]
│   │
│   ├── images/
│   │   ├── pro_pic_4.png
│   │   ├── pro_pic_6.jpg
│   │   └── [other images]
│   │
│   ├── fonts/
│   │   └── [custom fonts]
│   │
│   ├── js/
│   │   └── [custom scripts]
│   │
│   └── webfonts/
│       └── [font awesome files]
│
├── 📁 static/                      # Static files (not processed)
│   ├── files/
│   │   ├── microsoft/
│   │   │   └── mslogos/
│   │   │       └── azure_certification_logos.png
│   │   └── [other documents]
│   │
│   ├── images/
│   │   └── [static images]
│   │
│   └── documents/
│       └── [static documents]
│
├── 📁 docs/                        # Project documentation
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   └── [documentation files]
│
├── 📁 scripts/                     # Build and automation scripts
│   ├── build.sh                    # Production build (Linux/Mac)
│   ├── dev.sh                      # Development server (Linux/Mac)
│   ├── build.bat                   # Production build (Windows)
│   ├── dev.bat                     # Development server (Windows)
│   └── [other scripts]
│
├── 📁 .github/                     # GitHub specific files
│   └── workflows/
│       └── [CI/CD workflows]
│
├── 📁 vendor/                      # Build artifacts (generated)
│   └── bundle/
│
├── 📁 _site/                       # Build output (generated)
│   └── [compiled website files]
│
├── 📁 .jekyll-cache/               # Jekyll cache (generated)
│
└── 📁 .bundle/                     # Bundle configuration (generated)
```

## 🏗️ Structure Principles

### Separation of Concerns
- **source/** - All content and templates
- **assets/** - Compiled CSS and static assets
- **static/** - Files not processed by Jekyll
- **scripts/** - Build automation
- **config/** - Configuration management

### Naming Conventions
- **Collections**: Use singular names with leading underscore in source
  - `source/achievements/` → Jekyll collection
  - `source/projects/` → Jekyll collection
- **Pages**: No underscore prefix for regular pages
- **Files**: Use kebab-case for file names (e.g., `hero-section.html`)
- **Images**: Descriptive names with extensions (e.g., `pro_pic_6.jpg`)

### File Organization
- **Content files** stay in `source/`
- **Compiled output** goes to `_site/` (auto-generated)
- **Static assets** in `assets/` (processed by Jekyll)
- **Unprocessed files** in `static/` (copied as-is)

## 🚀 Quick Start

### Development
```bash
# Windows
scripts\dev.bat

# Linux/Mac
./scripts/dev.sh
```

### Production Build
```bash
# Windows
scripts\build.bat

# Linux/Mac
./scripts/build.sh
```

## 📋 Configuration Hierarchy

1. **config/_config.yml** - Primary config (source-aware)
   - Points to `source/` directory
   - Has all plugin settings
   - Production-optimized

2. **_config.dev.yml** - Development overrides
   - Can be used for local-only settings

3. **.yml files in source/_data/** - Data files
   - `navigation.yml` - Site navigation
   - `authors.yml` - Author information
   - `cv.json` - CV data

## 🔄 Build Process

1. Jekyll reads config from `config/_config.yml`
2. Source directory: `source/`
3. Output directory: `_site/`
4. Assets processed and compiled
5. Final website ready for deployment

## 📊 Asset Pipeline

```
source/_sass/
  └─ *.scss
    └─ Compiled by Sass
      └─ assets/css/main.css

source/ (pages, posts, etc.)
  └─ Processed by Jekyll
    └─ _site/ (HTML)

assets/
  └─ Copied to _site/assets/

static/
  └─ Copied to _site/ root
```

## 🔐 Security & .gitignore

Files excluded from Git:
- `vendor/` - Ruby dependencies
- `_site/` - Build output
- `.jekyll-cache/` - Cache files
- `.bundle/` - Bundle configuration
- `node_modules/` - Node dependencies
- `.DS_Store` - macOS files
- `Thumbs.db` - Windows files

## 📝 Documentation Files

- **README.md** - Project overview
- **ARCHITECTURE.md** - System architecture
- **CONTRIBUTING.md** - Contribution guidelines
- **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** - Design customization
- **[MODERNIZATION_GUIDE.md](MODERNIZATION_GUIDE.md)** - Modernization features
- **[LANDING_PAGE_FIXES.md](LANDING_PAGE_FIXES.md)** - Landing page improvements
- **PROJECT_STRUCTURE.md** - This file

## ✅ Deployment

### GitHub Pages
1. Commit and push to repository
2. GitHub automatically builds from `main` branch
3. Site deployed to `https://neuralnishan.github.io`

### Custom Domain
- Edit `CNAME` file
- Point domain DNS to GitHub Pages

### Local Deployment
1. Run production build: `scripts\build.bat`
2. Upload `_site/` contents to web server

## 🛠️ Maintenance

### Adding New Content
1. Create file in `source/[collection]/`
2. Follow YAML front matter format
3. Use markdown or HTML content
4. Run `dev.bat` to preview
5. Commit and push

### Updating Styles
1. Edit files in `assets/css/` or `source/_sass/`
2. Changes auto-reload in dev mode
3. Build compiles everything on production

### Managing Dependencies
1. Update `Gemfile` for Ruby packages
2. Run `bundle update` to install
3. Update `package.json` for Node packages
4. Run `npm install` to install

## 📈 Performance

- CSS minified on build
- Image optimization recommended
- Lazy loading for images
- CDN for Font Awesome
- Build cache for faster builds

## 🎯 Enterprise Checklist

✅ Organized directory structure
✅ Separation of concerns
✅ Consistent naming conventions
✅ Automated build scripts
✅ Configuration management
✅ Documentation
✅ Version control ready
✅ Production-optimized
✅ Security best practices
✅ Scalable architecture

---

**This structure supports enterprise-grade development, easy maintenance, and scalable growth!**
