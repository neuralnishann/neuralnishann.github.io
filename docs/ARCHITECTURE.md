# System Architecture

## 🏛️ Overall Architecture

```
┌─────────────────────────────────────────────────┐
│         GitHub Pages / Web Server               │
│  (Hosts compiled _site/ directory)              │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│         Build Pipeline                          │
│  ┌─────────────┐  ┌──────────────┐             │
│  │   Jekyll    │→ │ Liquid       │             │
│  │   Builder   │  │ Processor    │             │
│  └─────────────┘  └──────────────┘             │
│         ↓                ↓                      │
│  ┌─────────────────────────────┐               │
│  │ Sass Compiler               │               │
│  │ (SCSS → CSS)                │               │
│  └─────────────────────────────┘               │
└──────────────┬───────────────────────────────────┘
               │
               ↓
┌──────────────────────────────────────────────────┐
│      Source Directory Structure                  │
│ ┌────────────────────────────────────────────┐  │
│ │ source/                                    │  │
│ │ ├─ _data/       (YAML/JSON data)          │  │
│ │ ├─ _includes/   (Reusable components)     │  │
│ │ ├─ _layouts/    (Page templates)          │  │
│ │ ├─ _sass/       (SCSS source)             │  │
│ │ ├─ pages/       (Static pages)            │  │
│ │ ├─ posts/       (Blog posts)              │  │
│ │ ├─ projects/    (Project collection)      │  │
│ │ ├─ achievements/ (Achievements)           │  │
│ │ └─ index.md     (Homepage)                │  │
│ └────────────────────────────────────────────┘  │
└───────────────┬───────────────────────────────────┘
                │
                ↓
      ┌─────────────────────┐
      │ Assets & Static     │
      ├─────────────────────┤
      │ assets/             │
      │ ├─ css/             │
      │ ├─ images/          │
      │ ├─ fonts/           │
      │ └─ js/              │
      │                     │
      │ static/             │
      │ ├─ files/           │
      │ ├─ images/          │
      │ └─ documents/       │
      └─────────────────────┘
```

## 🔧 Technology Stack

### Core
- **Jekyll** - Static site generator
- **Liquid** - Template language
- **Markdown** - Content format
- **YAML** - Configuration & data

### Styling
- **SCSS** - CSS preprocessor
- **CSS3** - Modern styling
- **Font Awesome** - Icons (CDN)

### Frontend
- **HTML5** - Semantic markup
- **CSS Grid/Flexbox** - Modern layouts
- **CSS Animations** - Smooth transitions
- **Responsive Design** - Mobile-first

### Build Tools
- **Bundler** - Ruby dependency management
- **Sass** - SCSS compilation
- **Jekyll Plugins** - Extended functionality

### Deployment
- **GitHub Pages** - Hosting
- **Git** - Version control
- **GitHub Actions** (optional) - CI/CD

## 📊 Data Flow

### Content Creation Flow

```
Markdown/HTML Content
        │
        ↓
Jekyll Parser
    (Front Matter)
        │
        ↓
Liquid Processor
    (Render Templates)
        │
        ↓
Sass Compiler
    (CSS Generation)
        │
        ↓
Asset Pipeline
    (Copy Images, Fonts)
        │
        ↓
Minification
    (Production)
        │
        ↓
Generated HTML Files
        │
        ↓
Deployed to _site/
```

### Request Flow (User Perspective)

```
User Request
     │
     ↓
Browser DNS Lookup
     │
     ↓
GitHub Pages Server
     │
     ↓
Serve _site/ Files
     ├─ HTML
     ├─ CSS (cached)
     ├─ Images (cached)
     └─ JavaScript
     │
     ↓
Render in Browser
     │
     ↓
User Views Page
```

## 🗂️ Collection Architecture

### Collection Structure

```
Collections (Jekyll):
├─ posts/          → /blog/:year/:month/:day/:slug/
├─ projects/       → /projects/:slug/
├─ achievements/   → /achievements/:slug/
├─ teaching/       → /teaching/:slug/
├─ portfolio/      → /portfolio/:slug/
└─ talks/          → /talks/:slug/

Each Collection:
├─ Content Files (YAML front matter + Markdown)
├─ Layouts (from source/_layouts/)
└─ Auto-generated permalinks
```

### Permalink Strategy

```
Post:           /blog/2026/04/16/post-title/
Project:        /projects/project-name/
Achievement:    /achievements/cert-name/
Page:           /page-name/
```

## 🎨 Theme Architecture

### Color System

```
Color Variables (_config):
├─ Primary Colors
│  ├─ --primary              (#0f766e - Main)
│  ├─ --primary-dark         (#134e4a - Dark variant)
│  ├─ --primary-light        (#14b8a6 - Light variant)
│  └─ --primary-lighter      (#ccfbf1 - Very light)
│
├─ Secondary Colors
│  ├─ --secondary            (#6366f1 - Accent)
│  └─ --secondary-light      (#e0e7ff - Light accent)
│
├─ Utility Colors
│  ├─ --success              (#10b981)
│  ├─ --warning              (#f59e0b)
│  └─ --error                (#ef4444)
│
└─ Dark Mode Colors
   ├─ --dark-bg              (#0f172a)
   ├─ --dark-card            (#1e293b)
   ├─ --dark-border          (#334155)
   └─ --dark-text            (#f1f5f9)
```

### Typography System

```
Font Scale (rem):
├─ H1: 2.5rem
├─ H2: 2rem
├─ H3: 1.5rem
├─ Body: 1rem
├─ Small: 0.9rem
└─ Tiny: 0.85rem

Font Weights:
├─ Light: 400
├─ Normal: 500
├─ Medium: 600
├─ Bold: 700
└─ Extra: 800
```

### Component Architecture

```
Components (Includes):
├─ hero-section.html          (Landing hero)
├─ skills-section.html        (Skills grid)
├─ achievement-card.html      (Card template)
├─ author-profile.html        (Author card)
├─ navigation/                (Nav components)
├─ footer/                    (Footer components)
└─ [other reusable components]

Layouts:
├─ default.html               (Base layout)
├─ single.html               (Content pages)
├─ archive.html              (Archive/list)
└─ [specialized layouts]
```

## 🔄 Build Process Details

### Development Build

```
Source Files (source/)
        │
        ├─→ Sass Compiler → Full CSS (unminified)
        │
        ├─→ Markdown Parser → Intermediate HTML
        │
        ├─→ Liquid Processor
        │   ├─ Render includes
        │   ├─ Render layouts
        │   └─ Process variables
        │
        └─→ Asset Copier
            ├─ Copy images
            ├─ Copy fonts
            └─ Copy JS

Output: Full _site/ (faster rebuild)
```

### Production Build

```
Source Files (source/)
        │
        ├─→ Sass Compiler → Minified CSS
        │
        ├─→ Markdown Parser → Minified HTML
        │
        ├─→ Liquid Processor (same as dev)
        │
        ├─→ Asset Optimization
        │   ├─ Minify HTML
        │   ├─ Compress images
        │   └─ Uglify JS
        │
        └─→ Cache Busting
            ├─ Add version hashes
            └─ Update references

Output: Optimized _site/ (fast loading)
```

## 📈 Scalability

### Current Capacity

- **Posts**: Unlimited (pagination at 10/page)
- **Collections**: 6 custom collections
- **Pages**: Unlimited static pages
- **Build time**: < 5 seconds (typical)
- **Site size**: Grows with content

### Growth Path

```
Phase 1 (Current):
├─ Single-author blog
├─ Portfolio showcase
├─ Achievement tracking
└─ ~50 content items

Phase 2 (Expandable):
├─ Add multiple authors
├─ Increase collection types
├─ Add search functionality
└─ ~500 content items

Phase 3 (Enterprise):
├─ Categorized archives
├─ Advanced filtering
├─ Comment system
└─ ~5000 content items
```

## 🔐 Security Architecture

### Content Security

```
Layers:
├─ YAML Front Matter Validation
├─ Markdown Processing
├─ Liquid Template Safety
└─ Output Sanitization
```

### Build Security

```
Measures:
├─ No database access
├─ Static files only
├─ No server-side processing
├─ No external dependencies at runtime
└─ HTTPS on GitHub Pages
```

## 🚀 Performance Architecture

### Optimization Strategies

```
Static Files:
├─ Pre-compiled CSS (no runtime compilation)
├─ Pre-generated HTML (no server rendering)
├─ Cached assets (browser cache)
└─ CDN delivery (Font Awesome)

Loading Optimization:
├─ Minimal JavaScript
├─ Lazy loading images
├─ Optimized font loading
└─ Efficient CSS selectors

Rendering Optimization:
├─ GPU-accelerated animations
├─ Efficient CSS Grid layouts
├─ Optimized font-size calculations
└─ Hardware acceleration
```

## 🎯 Deployment Architecture

### GitHub Pages Flow

```
Git Repository
     │
     ├─→ Push to main branch
     │
     └─→ GitHub Actions Trigger
         │
         ├─→ Checkout code
         ├─→ Install dependencies
         ├─→ Build Jekyll
         ├─→ Run tests (optional)
         │
         └─→ Deploy to GitHub Pages
             │
             └─→ Serve on neuralnishan.github.io
```

### Environment Management

```
Development:
├─ Local machine
├─ config/_config.yml
├─ Fast rebuild
└─ Live reload

Production:
├─ GitHub Pages
├─ Optimized build
├─ CDN cached
└─ HTTPS enabled
```

## 📊 Monitoring & Maintenance

### Health Checks

- Build status (GitHub Actions)
- Link validation
- Performance metrics (PageSpeed)
- Mobile compatibility

### Maintenance Tasks

```
Regular:
├─ Update Ruby gems (weekly)
├─ Update Node packages (weekly)
├─ Security audits (monthly)
└─ Performance review (quarterly)

As Needed:
├─ Add new content
├─ Update designs
├─ Fix bugs
└─ Optimize performance
```

---

**This architecture is designed for scalability, maintainability, and enterprise-grade reliability!**
