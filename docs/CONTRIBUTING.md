# Contributing Guide

Welcome! This guide will help you contribute to the portfolio website.

## Getting Started

1. **Fork & Clone**
   ```bash
   git clone https://github.com/[YOUR-USERNAME]/neuralnishan.github.io.git
   cd neuralnishan.github.io
   ```

2. **Install Dependencies**
   ```bash
   bundle install
   npm install
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Make Changes

Create or edit content in the appropriate directory:

- **Blog posts:** `source/posts/YYYY-MM-DD-title.md`
- **Projects:** `source/projects/project-name.md`
- **Pages:** `source/pages/page-name.md`
- **Styles:** `assets/css/` or `source/_sass/`

### 2. Test Locally

```bash
# Start dev server
scripts\dev.bat

# Visit http://localhost:4000
# Make changes and watch auto-reload
```

### 3. Check for Issues

- [ ] No Liquid syntax errors
- [ ] No markdown formatting issues
- [ ] Images properly linked
- [ ] All links work
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] No build warnings

### 4. Commit Changes

```bash
git add .
git commit -m "Add feature: description of what was added"
```

**Commit Message Format:**
```
Type: Description

Details (optional)

Fixes #123 (if fixing an issue)
```

**Types:**
- `feat:` New feature or content
- `fix:` Bug fix
- `style:` Styling changes
- `docs:` Documentation
- `refactor:` Code reorganization
- `perf:` Performance improvements

### 5. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title
- Description of changes
- Related issues (if any)
- Screenshots (if visual changes)

## Content Guidelines

### Blog Posts

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
excerpt: "Brief summary of the post"
toc: true
toc_sticky: true
---
```

**Requirements:**
- Meaningful title
- Proper date format
- Relevant categories/tags
- Good excerpt (50-160 chars)
- Clear structure with headers

### Projects

```yaml
---
layout: single
title: "Project Name"
date: 2026-04-16
categories:
  - AI
  - Cloud
tags:
  - Azure
  - Python
excerpt: "What this project does"
gallery:
  - url: /images/project-image.jpg
    image_path: /images/project-image-thumb.jpg
    alt: "Image description"
---
```

**Requirements:**
- Clear project description
- Technology stack mentioned
- Links to GitHub/demo (if available)
- Meaningful excerpt

### Pages

```yaml
---
layout: single
title: "Page Title"
permalink: /page-url/
author_profile: true
---
```

**Requirements:**
- Descriptive title
- Proper permalink
- Clear content organization

## Coding Standards

### HTML
- Use semantic HTML5
- Lowercase tags and attributes
- Proper indentation (2 spaces)
- Include alt text for images
- Use aria labels for accessibility

### CSS
- Follow naming conventions (kebab-case)
- Use CSS variables for colors
- Group related properties
- Add comments for complex rules
- Test in both light and dark modes

### Markdown
- Use proper heading hierarchy (H1 → H2 → H3)
- Use backticks for code
- Use code blocks with language specification
- Use emphasis sparingly
- Keep line length reasonable

### YAML
- Proper indentation (2 spaces)
- Consistent quoting
- No tabs
- Validate syntax

## Style Guidelines

### Colors
Use the design system colors:
- Primary: `#0f766e` (teal)
- Secondary: `#6366f1` (indigo)
- Accent: `#f59e0b` (amber)
- Success: `#10b981` (green)
- Error: `#ef4444` (red)

### Typography
- H1: 2.5rem
- H2: 2rem
- H3: 1.5rem
- Body: 1rem
- Weights: 400 (normal), 600 (medium), 700 (bold)

### Spacing
Use consistent spacing scale:
- 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

### Components
Reuse existing components when possible:
- Hero section: `{% include hero-section.html %}`
- Skills: `{% include skills-section.html %}`
- Cards: `{% include achievement-card.html %}`

## Testing

### Before Submitting PR

1. **Build locally**
   ```bash
   scripts\build.bat
   ```

2. **Check for errors**
   - No Liquid syntax errors
   - No CSS errors
   - No broken links

3. **Test features**
   - Dark/light mode toggle
   - Responsive on mobile
   - All animations smooth
   - Navigation works

4. **Performance check**
   - Page loads quickly
   - No console errors
   - No layout shifts

## Troubleshooting

### Styles not applying
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server
- Check CSS file is linked in head

### Content not showing
- Check file naming (no spaces, proper dates)
- Verify YAML front matter syntax
- Check file is in correct collection folder

### Build errors
- Run `bundle install` again
- Delete `.jekyll-cache/` folder
- Check Liquid syntax in files

### Port already in use
- Edit scripts to use different port (e.g., 4001)
- Or kill process using port 4000

## Code Review Process

We use a simple review process:

1. **Author** submits PR with description
2. **Reviewers** check:
   - Code quality
   - Follows guidelines
   - Tests pass
   - No conflicts
3. **Comments** on changes needed
4. **Author** makes revisions
5. **Merge** once approved

### Review Checklist

- [ ] Follows style guidelines
- [ ] No syntax errors
- [ ] Properly documented
- [ ] Works locally
- [ ] Mobile responsive
- [ ] Accessible
- [ ] Meaningful commit messages

## Documentation

Help keep docs updated:

1. Update relevant guide if changing functionality
2. Add examples for new features
3. Update README if major changes
4. Keep QUICK_REFERENCE current

## Performance Tips

When contributing content:

- Compress images (< 1MB)
- Lazy load images
- Minimize external requests
- Use CSS for effects (not JS)
- Optimize font loading

## Security

- No hardcoded credentials
- No sensitive personal info
- No external tracking (without disclosure)
- Validate all user input
- Keep dependencies updated

## Questions?

- Check [DEVELOPMENT.md](docs/DEVELOPMENT.md)
- Read [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Check [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md)
- Open an issue for discussions

## Code of Conduct

- Be respectful
- Assume good intent
- Help others learn
- Report problems appropriately
- Keep discussions professional

---

**Thank you for contributing! 🎉**
