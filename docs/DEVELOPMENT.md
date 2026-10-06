# Development Guide

## 🚀 Getting Started

### Prerequisites
- Ruby 2.7 or higher
- Bundler
- Git
- Node.js (optional, for frontend tooling)

### First Time Setup

```bash
# Clone repository
git clone https://github.com/neuralnishan/neuralnishan.github.io.git
cd neuralnishan.github.io

# Install dependencies
bundle install

# Start development server
# Windows
scripts\dev.bat

# Linux/Mac
./scripts/dev.sh

# Visit http://localhost:4000
```

## 📝 Writing Content

### Creating a Blog Post

1. Create file: `source/posts/YYYY-MM-DD-title-of-post.md`
2. Add front matter:
```yaml
---
layout: single
title: "Your Post Title"
date: 2026-04-16
author_profile: true
categories:
  - Category1
  - Category2
tags:
  - Tag1
  - Tag2
excerpt: "Brief description of your post"
---

Your post content here...
```

### Creating a Project

1. Create file: `source/projects/project-name.md`
2. Add front matter:
```yaml
---
layout: single
title: "Project Title"
date: 2026-04-16
author_profile: true
categories:
  - AI
  - ML
tags:
  - Azure
  - Python
excerpt: "Project description"
---

Project details...
```

### Creating an Achievement

1. Create file: `source/achievements/YYYY-MM-DD-achievement-title.md`
2. Add front matter:
```yaml
---
layout: single
title: "Achievement Title"
date: 2026-04-16
author_profile: true
excerpt: "Achievement description"
---

Achievement details...
```

## 🎨 Styling & Customization

### CSS Files Organization

**Source Files:**
- `source/_sass/` - SCSS source files
- `assets/css/` - Compiled CSS

**Main Stylesheets:**
- `modern-professional.css` - Core styles & color palette
- `modern-layout-enhancements.css` - Layout improvements
- `animations-interactive.css` - Animations
- `landing-page-refinements.css` - Landing page specific
- `modern-footer.css` - Footer styling

### Customizing Colors

Edit `assets/css/modern-professional.css`:
```css
:root {
  --primary: #0f766e;              /* Main color */
  --primary-dark: #134e4a;
  --primary-light: #14b8a6;
  --secondary: #6366f1;            /* Secondary color */
  --accent: #f59e0b;               /* Accent color */
}
```

### Adding Custom Styles

Create new CSS file in `assets/css/` and link in `_includes/head.html`:
```html
<link rel="stylesheet" href="{{ base_path }}/assets/css/custom.css">
```

## 🧩 Components

### Using Includes

Include components in your content:
```liquid
{% raw %}{% include hero-section.html %}{% endraw %}
{% raw %}{% include skills-section.html %}{% endraw %}
```

### Creating New Components

1. Create file in `source/_includes/component-name.html`
2. Use in layouts/posts:
```liquid
{% raw %}{% include component-name.html %}{% endraw %}
```

## 🗂️ Data Management

### Using Data Files

Data files in `source/_data/`:

**navigation.yml** - Site navigation
```yaml
main:
  - title: "Blog"
    url: /year-archive/
    icon: "📝"
```

**authors.yml** - Author information
```yaml
author_name:
  name: Full Name
  email: email@example.com
  bio: Biography
```

**Access in templates:**
```liquid
{% for link in site.data.navigation.main %}
  {{ link.title }}
{% endfor %}
```

## 🔄 Workflow

### Development Cycle

1. **Create/Edit** content in `source/`
2. **Dev server** auto-reloads at http://localhost:4000
3. **Preview** changes in browser
4. **Commit** changes to Git
5. **Push** to GitHub (auto-deploys)

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-new-project

# Make changes
# Edit files, add content

# Stage changes
git add .

# Commit
git commit -m "Add new project"

# Push
git push origin feature/add-new-project

# Create Pull Request on GitHub
```

## 🧪 Testing

### Local Testing

1. Run dev server: `scripts\dev.bat`
2. Check http://localhost:4000
3. Test all pages and links
4. Check mobile responsiveness
5. Verify animations

### Build Testing

```bash
# Production build
scripts\build.bat

# Check build output
ls -la _site/

# Verify no errors in build log
```

## 🐛 Troubleshooting

### Site Won't Build

```bash
# Clean cache
rm -rf .jekyll-cache/
rm -rf _site/

# Reinstall dependencies
bundle install

# Try build again
bundle exec jekyll build --config config/_config.yml
```

### Styles Not Showing

1. Clear browser cache (Ctrl+Shift+R)
2. Restart dev server
3. Check CSS file links in `_includes/head.html`
4. Verify no CSS syntax errors

### Content Not Appearing

1. Check front matter YAML syntax
2. Verify file naming (dates, no spaces)
3. Check collection name in `_config.yml`
4. Review file location in correct folder

## 📱 Mobile Testing

```bash
# Get local IP
ipconfig getifaddr en0  # Mac
ipconfig                 # Windows

# Access from mobile on same network
http://[YOUR_IP]:4000
```

## 🚢 Deployment

### GitHub Pages (Automatic)

1. Commit and push to main branch
2. GitHub automatically builds
3. Wait 1-2 minutes
4. Site updates at neuralnishan.github.io

### Manual Deployment

```bash
# Build production
scripts\build.bat

# Upload _site/ contents to web server
# Or use deployment tool of choice
```

## 🔐 Security

### Important Notes

- Don't commit sensitive credentials
- Use `.gitignore` for local files
- Keep dependencies updated
- Review external dependencies

### Update Dependencies

```bash
# Ruby gems
bundle update

# Node packages
npm update

# Check for vulnerabilities
bundle audit
npm audit
```

## 📊 Performance Optimization

1. **Images**: Compress before adding
2. **CSS**: Already minified on build
3. **JavaScript**: Keep minimal
4. **Caching**: Browser caching enabled
5. **CDN**: Use for Font Awesome

## 🎯 Best Practices

✅ Keep commits atomic and well-documented
✅ Write descriptive commit messages
✅ Test locally before pushing
✅ Use feature branches for new work
✅ Keep dependencies updated
✅ Write meaningful front matter
✅ Use semantic HTML
✅ Follow naming conventions
✅ Comment complex code
✅ Test mobile responsiveness

## 📞 Support Resources

- [Jekyll Documentation](https://jekyllrb.com/)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [GitHub Pages](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Happy developing! 🚀**
