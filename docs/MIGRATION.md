# Content Migration Guide

This guide walks you through migrating all content from the root-level collection directories to the new enterprise `source/` structure.

## 📋 Overview

### What's Moving
```
OLD STRUCTURE          →    NEW STRUCTURE
_pages/                →    source/pages/
_posts/                →    source/posts/
_projects/             →    source/projects/
_achievements/         →    source/achievements/
_portfolio/            →    source/portfolio/
_teaching/             →    source/teaching/
_talks/                →    source/talks/
_data/                 →    source/_data/
_includes/             →    source/_includes/
_layouts/              →    source/_layouts/
_sass/                 →    source/_sass/
_drafts/               →    source/_drafts/
```

### Why This Matters
- **Organization**: All content in one place
- **Scalability**: Easy to manage as site grows
- **Clarity**: Clear separation from generated files
- **Maintenance**: Simpler to maintain and deploy

---

## ⚠️ Before You Start

### Prerequisites
- [ ] Git repository up to date
- [ ] No uncommitted changes
- [ ] Backup of important files
- [ ] Test build successful

### Safety First
```bash
# 1. Commit current state
git add .
git commit -m "Pre-migration backup"

# 2. Create feature branch for migration
git checkout -b feature/migrate-to-source-structure

# 3. Verify build works
scripts\build.bat
```

### Verify Current Build
```bash
# Windows
scripts\build.bat

# Linux/Mac
./scripts/build.sh

# Should complete without errors
# Check _site/ directory exists with content
```

---

## 🚀 Step-by-Step Migration

### Phase 1: Static Collections (No Dependencies)

These collections have no internal dependencies and can be migrated safely.

#### Step 1A: Migrate _sass/

```bash
# Copy SCSS files
cp -r _sass/* source/_sass/

# Verify copy
ls source/_sass/

# Test build (shouldn't change output yet)
bundle exec jekyll build --config config/_config.yml

# If successful, delete old
rm -rf _sass/

# Commit
git add .
git commit -m "Migrate SCSS to source/_sass"
```

#### Step 1B: Migrate _data/

```bash
# Copy data files
cp -r _data/* source/_data/

# Verify
ls source/_data/

# Test build
bundle exec jekyll build --config config/_config.yml

# Delete old
rm -rf _data/

# Commit
git add .
git commit -m "Migrate data files to source/_data"
```

#### Step 1C: Migrate _layouts/

```bash
# Copy layout files
cp -r _layouts/* source/_layouts/

# Verify
ls source/_layouts/

# Test build
bundle exec jekyll build --config config/_config.yml

# Delete old
rm -rf _layouts/

# Commit
git add .
git commit -m "Migrate layouts to source/_layouts"
```

#### Step 1D: Migrate _includes/

```bash
# Copy include files
cp -r _includes/* source/_includes/

# Verify
ls source/_includes/

# Test build (critical - includes affect all pages)
bundle exec jekyll build --config config/_config.yml

# Check _site/ for correct output
ls -la _site/

# Delete old
rm -rf _includes/

# Commit
git add .
git commit -m "Migrate includes to source/_includes"
```

### Phase 2: Content Collections

These collections contain actual content and should be migrated carefully.

#### Step 2A: Migrate _drafts/

```bash
# Copy drafts
cp -r _drafts/* source/_drafts/

# Verify
ls source/_drafts/

# Test build
bundle exec jekyll build --config config/_config.yml

# Delete old (drafts don't affect build)
rm -rf _drafts/

# Commit
git add .
git commit -m "Migrate drafts to source/_drafts"
```

#### Step 2B: Migrate _pages/

```bash
# Copy pages
cp -r _pages/* source/pages/

# Verify count
ls source/pages/ | wc -l
ls _pages/ | wc -l  # Should match

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify in output
ls -la _site/ | grep -E "about|cv|projects"

# Check one page renders correctly
ls -la _site/about/

# Delete old only after verification
rm -rf _pages/

# Commit
git add .
git commit -m "Migrate pages to source/pages"
```

#### Step 2C: Migrate _posts/

```bash
# Copy posts
cp -r _posts/* source/posts/

# Verify
ls source/posts/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify posts accessible
ls -la _site/blog/  # Or year-archive if configured

# Delete old
rm -rf _posts/

# Commit
git add .
git commit -m "Migrate posts to source/posts"
```

#### Step 2D: Migrate _projects/

```bash
# Copy projects
cp -r _projects/* source/projects/

# Verify
ls source/projects/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify projects collection works
ls -la _site/projects/

# Delete old
rm -rf _projects/

# Commit
git add .
git commit -m "Migrate projects to source/projects"
```

#### Step 2E: Migrate _achievements/

```bash
# Copy achievements
cp -r _achievements/* source/achievements/

# Verify
ls source/achievements/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify achievements collection
ls -la _site/achievements/

# Delete old
rm -rf _achievements/

# Commit
git add .
git commit -m "Migrate achievements to source/achievements"
```

#### Step 2F: Migrate _portfolio/

```bash
# Copy portfolio
cp -r _portfolio/* source/portfolio/

# Verify
ls source/portfolio/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify portfolio
ls -la _site/portfolio/

# Delete old
rm -rf _portfolio/

# Commit
git add .
git commit -m "Migrate portfolio to source/portfolio"
```

#### Step 2G: Migrate _teaching/

```bash
# Copy teaching
cp -r _teaching/* source/teaching/

# Verify
ls source/teaching/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify teaching
ls -la _site/teaching/

# Delete old
rm -rf _teaching/

# Commit
git add .
git commit -m "Migrate teaching to source/teaching"
```

#### Step 2H: Migrate _talks/

```bash
# Copy talks
cp -r _talks/* source/talks/

# Verify
ls source/talks/

# Test build
bundle exec jekyll build --config config/_config.yml

# Verify talks
ls -la _site/talks/

# Delete old
rm -rf _talks/

# Commit
git add .
git commit -m "Migrate talks to source/talks"
```

---

## ✅ Post-Migration Verification

### Full Build Test

```bash
# Clean build
rm -rf _site/
rm -rf .jekyll-cache/

# Build with new config
bundle exec jekyll build --config config/_config.yml

# Check for errors
echo $?  # Should be 0

# Verify key directories exist
ls -la _site/ | head -20
```

### Content Verification

Check that all content is accessible:

```bash
# Blog posts
ls -la _site/blog/

# Projects
ls -la _site/projects/

# Achievements  
ls -la _site/achievements/

# Pages
ls -la _site/about/
ls -la _site/cv/
ls -la _site/experience/

# Teaching
ls -la _site/teaching/

# Talks
ls -la _site/talks/

# Portfolio
ls -la _site/portfolio/
```

### Dev Server Test

```bash
# Start dev server with new config
bundle exec jekyll serve --config config/_config.yml

# Visit http://localhost:4000
# Check:
# - Homepage loads
# - Navigation works
# - All pages accessible
# - Styles applied
# - Dark mode works
# - Mobile responsive
```

---

## 🔧 Troubleshooting

### Build Fails After Migration

**Problem:** Jekyll can't find files
```bash
# Solution: Check paths in _config.yml
cat config/_config.yml | grep -A 5 "collections:"

# Should show: source/ paths
```

**Problem:** Collections not showing
```bash
# Check collection names match
grep "output: true" config/_config.yml

# Verify directories exist
ls source/projects/
ls source/achievements/
```

### Content Missing After Build

**Problem:** Pages not showing up
```bash
# Check front matter in files
head -20 source/pages/about.md

# Verify permalink format
grep "permalink:" source/pages/*.md | head -5
```

**Problem:** CSS not applying
```bash
# Check CSS files in assets
ls -la assets/css/

# Verify they're linked in head.html
grep "stylesheet" source/_includes/head.html
```

### Links Broken After Migration

**Problem:** Internal links broken
```bash
# Find broken links
grep -r "{% post_url" source/

# Update syntax if needed
# Old: {% post_url 2025-01-01-post-name %}
# New: /blog/2025/01/01/post-name/
```

---

## 📊 Migration Checklist

### Pre-Migration
- [ ] Current state committed to git
- [ ] Current build succeeds
- [ ] Feature branch created
- [ ] Backup exists

### Migration Phase
- [ ] _sass/ migrated
- [ ] _data/ migrated
- [ ] _layouts/ migrated
- [ ] _includes/ migrated
- [ ] _drafts/ migrated
- [ ] _pages/ migrated
- [ ] _posts/ migrated
- [ ] _projects/ migrated
- [ ] _achievements/ migrated
- [ ] _portfolio/ migrated
- [ ] _teaching/ migrated
- [ ] _talks/ migrated

### Post-Migration Testing
- [ ] Build succeeds
- [ ] All collections show in _site/
- [ ] Dev server starts
- [ ] Homepage displays
- [ ] All pages accessible
- [ ] Styles applied correctly
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All links work

### Final Steps
- [ ] Create Pull Request
- [ ] Code review (if applicable)
- [ ] Merge to main
- [ ] Update .gitignore
- [ ] Delete any old config backup
- [ ] Update documentation

---

## 🎯 Git Commands Reference

### During Migration

```bash
# See what's changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Migrate [collection] to source/"

# View commit history
git log --oneline -10

# See what changed in a file
git diff --staged source/pages/

# Revert last commit (if needed)
git reset --soft HEAD~1
```

### After Completing Migration

```bash
# View all commits in branch
git log --oneline feature/migrate-to-source-structure..main

# Create Pull Request
git push origin feature/migrate-to-source-structure

# Merge branch (after review)
git checkout main
git merge feature/migrate-to-source-structure

# Delete old branch
git branch -d feature/migrate-to-source-structure
```

---

## 📝 Notes on Specific Files

### index.md
- Location: `source/index.md` (at root of source, not in subdirectory)
- Don't move into `source/pages/`
- This is the homepage

### _drafts/ Directory
- Drafts are not published by default
- Move contents to `source/_drafts/`
- Safe to migrate anytime

### Asset Paths
- Images stay in `assets/images/`
- Update any hardcoded paths if needed
- Reference using `{{ site.baseurl }}/assets/...`

### Data Files
- Critical for site function
- Migrate carefully
- Test after migration

---

## ⏱️ Timeline Estimate

| Task | Time |
|------|------|
| Pre-migration setup | 5 min |
| _sass/ migration | 2 min |
| _data/ migration | 2 min |
| _layouts/ migration | 2 min |
| _includes/ migration | 2 min |
| _drafts/ migration | 1 min |
| _pages/ migration | 3 min |
| _posts/ migration | 1 min |
| _projects/ migration | 1 min |
| _achievements/ migration | 1 min |
| _portfolio/ migration | 1 min |
| _teaching/ migration | 1 min |
| _talks/ migration | 1 min |
| Full verification | 10 min |
| **Total** | **36 min** |

---

## 🎉 After Migration Complete

### Update Configuration

If using new structure, you may want to:

1. **Make config/_config.yml the default**
   - Create symbolic link: `ln -s config/_config.yml _config.yml`
   - Or update build scripts to use `--config config/_config.yml`

2. **Update runcommand.txt**
   ```
   Old: bundle exec jekyll serve
   New: scripts\dev.bat
   ```

3. **Update documentation**
   - Point to new structure
   - Update any setup instructions
   - Document the migration

### Clean Up

```bash
# Delete backup of old _config.yml if not using root version
rm _config.yml.bak

# Update .gitignore if needed
echo "_config_old.yml" >> .gitignore

# Create final commit
git add .
git commit -m "Complete migration to source/ structure"
```

### Celebrate! 🎉

Your project now has enterprise-grade structure!

---

## 📞 Help & Support

- **Migration failing?** → Check [STATUS.md](STATUS.md)
- **Build errors?** → See [QUICK_REFERENCE.md](QUICK_REFERENCE.md#-troubleshooting)
- **General questions?** → Check [DEVELOPMENT.md](DEVELOPMENT.md)
- **Architecture questions?** → See [ARCHITECTURE.md](ARCHITECTURE.md)

---

**You've got this! 🚀**

*Migration should be smooth and straightforward. Test after each step.*
