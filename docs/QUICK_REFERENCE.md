# Quick Reference Guide

## 🚀 Common Commands

### Development
```bash
# Windows
scripts\dev.bat

# Linux/Mac
./scripts/dev.sh
```
Opens development server at `http://localhost:4000` with live reload.

### Production Build
```bash
# Windows
scripts\build.bat

# Linux/Mac
./scripts/build.sh
```
Creates optimized build in `_site/` directory.

### Install Dependencies
```bash
# Ruby gems
bundle install

# Node packages
npm install
```

## 📁 File Locations

| What | Where |
|------|-------|
| Blog Posts | `source/posts/` |
| Projects | `source/projects/` |
| Achievements | `source/achievements/` |
| Pages | `source/pages/` |
| Components | `source/_includes/` |
| Layouts | `source/_layouts/` |
| Styles | `assets/css/` or `source/_sass/` |
| Images | `assets/images/` |
| Data Files | `source/_data/` |
| Configuration | `config/_config.yml` |

## 📝 Common Tasks

### Add a Blog Post
```bash
# Create file
source/posts/2026-04-16-my-post.md

# Add front matter
---
layout: single
title: "Post Title"
date: 2026-04-16
categories: [Category1]
tags: [tag1, tag2]
---

# Write content
```

### Add a Project
```bash
# Create file
source/projects/project-name.md

# Add front matter (same as blog post)
# Write project details
```

### Add an Achievement
```bash
# Create file
source/achievements/2026-04-16-achievement.md

# Add front matter
---
layout: single
title: "Achievement Name"
date: 2026-04-16
excerpt: "Description"
---
```

### Update Navigation
Edit `source/_data/navigation.yml`:
```yaml
main:
  - title: "Page Title"
    url: /page-url/
    icon: "emoji"
```

### Update Author Info
Edit `source/_data/authors.yml` or `_config.yml` author section.

## 🎨 Styling Tips

### Change Colors
1. Open `assets/css/modern-professional.css`
2. Find `:root { }` section
3. Update hex colors
4. Save and refresh browser

### Add Custom CSS
1. Create file in `assets/css/`
2. Add to `_includes/head.html`:
```html
<link rel="stylesheet" href="{{ base_path }}/assets/css/custom.css">
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Styles not showing | Clear cache (Ctrl+Shift+R), restart server |
| Content not appearing | Check file location, verify YAML front matter |
| Build errors | Run `bundle install`, check syntax |
| Slow build | Use `bundle exec jekyll build --incremental` |

## 🔍 Useful Paths

```
Config:           config/_config.yml
Navigation:       source/_data/navigation.yml
Homepage:         source/index.md
Main Styles:      assets/css/modern-professional.css
Components:       source/_includes/
Layouts:          source/_layouts/
Build Output:     _site/
```

## 📊 Project Structure

```
Root Level:
├─ config/           (Configuration)
├─ source/           (All content)
├─ assets/           (Compiled CSS, images)
├─ static/           (Unprocessed files)
├─ scripts/          (Build scripts)
├─ docs/             (Documentation)
└─ _site/            (Build output)
```

## ⚡ Performance Tips

- Compress images before adding (use tinypng.com)
- Use CSS instead of JavaScript
- Minimize external requests
- Optimize font loading

## 🔗 Quick Links

- [Jekyll Docs](https://jekyllrb.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Docs](https://shopify.github.io/liquid/)
- [GitHub Pages](https://pages.github.com/)

## 📋 Deployment Checklist

- [ ] Run production build: `scripts\build.bat`
- [ ] Test at `http://localhost:4000`
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Commit changes: `git add .`
- [ ] Write commit message: `git commit -m "message"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Wait 1-2 minutes for GitHub Pages build

## 🎯 Directory Tree

```
neuralnishan.github.io/
├── config/
│   └── _config.yml
├── source/
│   ├── _data/
│   ├── _includes/
│   ├── _layouts/
│   ├── _sass/
│   ├── pages/
│   ├── posts/
│   ├── projects/
│   ├── achievements/
│   └── index.md
├── assets/
│   ├── css/
│   ├── images/
│   ├── fonts/
│   └── js/
├── static/
│   ├── files/
│   ├── images/
│   └── documents/
├── scripts/
│   ├── build.bat
│   ├── build.sh
│   ├── dev.bat
│   └── dev.sh
├── docs/
├── _site/ (generated)
├── Gemfile
├── package.json
├── README.md
└── CNAME
```

---

**Save this page for quick reference!**
