# Professional Portfolio Website

A modern, enterprise-grade portfolio website powered by Jekyll and hosted on GitHub Pages. Designed for data scientists, architects, and tech professionals.

**Live Site:** [neuralnishan.github.io](https://neuralnishann.github.io)  
**Theme:** Modern Professional with Dark/Light Mode Support  
**Build Time:** < 5 seconds  
**Mobile Friendly:** Yes ✓  
**Dark Mode:** Yes ✓

---

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7+ with Bundler
- Git
- (Optional) Node.js for npm packages

### Setup

```bash
# Clone repository
git clone https://github.com/neuralnishan/neuralnishan.github.io.git
cd neuralnishan.github.io

# Install dependencies
bundle install
npm install

# Start development server
# Windows:
scripts\dev.bat

# Linux/Mac:
./scripts/dev.sh

# Visit http://localhost:4000
```

### Build for Production

```bash
# Windows:
scripts\build.bat

# Linux/Mac:
./scripts/build.sh
```

---

## 📁 Project Structure

```
neuralnishan.github.io/
├── config/               # Configuration
├── source/               # All content (Markdown, HTML)
├── assets/               # Compiled CSS, images
├── static/               # Unprocessed files
├── scripts/              # Build automation
├── docs/                 # Documentation
└── _site/                # Build output (generated)
```

See [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) for detailed breakdown.

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md) | Folder organization and conventions |
| [DEVELOPMENT.md](docs/DEVELOPMENT.md) | How to create content and customize |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design and technical details |
| [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md) | Common commands and quick tips |
| [MODERNIZATION_GUIDE.md](MODERNIZATION_GUIDE.md) | Design system and features |
| [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) | How to customize colors and styles |

---

## 🎨 Features

✅ **Modern Design**  
Teal, Indigo, and Amber color scheme with smooth animations

✅ **Dark/Light Mode**  
Automatic theme switching with user preference support

✅ **Responsive**  
Mobile-first design works on all devices

✅ **Fast**  
Static site generation with optimized build process

✅ **Accessible**  
Semantic HTML, keyboard navigation, screen reader support

✅ **SEO Ready**  
Structured data, sitemap, og:tags

---

## 🛠️ Common Tasks

### Add a Blog Post
```bash
# Create: source/posts/2026-04-16-post-title.md
---
layout: single
title: "Post Title"
date: 2026-04-16
categories: [Category1]
tags: [tag1, tag2]
---

Your post content...
```

### Add a Project
```bash
# Create: source/projects/project-name.md
---
layout: single
title: "Project Title"
date: 2026-04-16
excerpt: "Project description"
---

Project details...
```

### Customize Colors
Edit `assets/css/modern-professional.css`:
```css
:root {
  --primary: #0f766e;              /* Main color */
  --secondary: #6366f1;            /* Accent color */
  --accent: #f59e0b;               /* Highlight color */
}
```

### Update Navigation
Edit `source/_data/navigation.yml`:
```yaml
main:
  - title: "Home"
    url: /
  - title: "Blog"
    url: /year-archive/
```

---

## 🚢 Deployment

### GitHub Pages (Automatic)
1. Commit changes to main branch
2. Push to GitHub
3. Wait 1-2 minutes for build
4. Site updates automatically

### Manual Deployment
1. Build locally: `scripts\build.bat`
2. Deploy `_site/` contents to your web server

---

## 🔧 Build System

**Development:**
```bash
scripts\dev.bat      # Starts at localhost:4000
```

**Production:**
```bash
scripts\build.bat    # Optimized build
```

**Features:**
- Automatic dependency installation
- Build error detection
- Live reload in dev mode
- Incremental builds for speed
- Cross-platform (Windows, Linux, Mac)

---

## 📦 Technology Stack

- **Generator:** Jekyll 4.x
- **Templating:** Liquid
- **Styling:** SCSS/CSS3
- **Markup:** Markdown + HTML5
- **Icons:** Font Awesome 6.4
- **Deployment:** GitHub Pages

---

## 📊 Current Content

- ✅ Professional homepage with hero section
- ✅ Skills showcased in 7 categories
- ✅ 10+ Certifications and achievements
- ✅ Portfolio projects showcase
- ✅ Experience and education timeline
- ✅ Teaching materials and talks
- ✅ Dark/light mode toggle

---

## ⚙️ Configuration

Main configuration in `config/_config.yml`:
- Site title, description, URL
- Collection settings and permalinks
- Plugin configuration
- Build options

Customize in `_config.yml` or `source/_data/` files.

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not showing | Clear browser cache (Ctrl+Shift+R) |
| Content not appearing | Check `source/_data/navigation.yml` and front matter |
| Build fails | Run `bundle install` to install dependencies |
| Port 4000 in use | Modify port in build scripts |

See [DEVELOPMENT.md](docs/DEVELOPMENT.md#-troubleshooting) for more.

---

## 📞 Support & Resources

- [Jekyll Documentation](https://jekyllrb.com/)
- [Liquid Template Guide](https://shopify.github.io/liquid/)
- [GitHub Pages Help](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 📝 License

See [LICENSE](LICENSE) file for details.

---

## 🎯 Best Practices

✅ Keep commits atomic and descriptive  
✅ Test locally before pushing  
✅ Use feature branches for major changes  
✅ Keep dependencies updated  
✅ Write meaningful content front matter  
✅ Optimize images before adding  
✅ Use semantic HTML  

---

**Happy building! 🚀**
