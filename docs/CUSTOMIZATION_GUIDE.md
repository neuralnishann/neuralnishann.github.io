# 🎨 Design Customization Reference

Quick reference guide for customizing your modernized portfolio.

## Color Palette Reference

### Current Colors
```css
:root {
  /* Primary Colors */
  --primary: #0f766e;              /* Teal */
  --primary-dark: #134e4a;         /* Dark Teal */
  --primary-light: #14b8a6;        /* Light Teal */
  --primary-lighter: #ccfbf1;      /* Very Light Teal */
  
  /* Secondary Colors */
  --secondary: #6366f1;            /* Indigo */
  --secondary-light: #e0e7ff;      /* Light Indigo */
  
  /* Accent Colors */
  --accent: #f59e0b;               /* Amber */
  --accent-light: #fef3c7;         /* Light Amber */
  
  /* Status Colors */
  --success: #10b981;              /* Green */
  --warning: #f59e0b;              /* Yellow */
  --error: #ef4444;                /* Red */
}
```

## Alternative Color Schemes

### Blue Professional
```css
--primary: #1e40af;        /* Deep Blue */
--primary-light: #60a5fa;  /* Sky Blue */
--secondary: #7c3aed;      /* Purple */
--accent: #f59e0b;         /* Amber */
```

### Purple Tech
```css
--primary: #7c3aed;        /* Purple */
--primary-light: #a78bfa;  /* Light Purple */
--secondary: #06b6d4;      /* Cyan */
--accent: #ec4899;         /* Pink */
```

### Green Growth
```css
--primary: #059669;        /* Green */
--primary-light: #10b981;  /* Light Green */
--secondary: #0891b2;      /* Cyan */
--accent: #f59e0b;         /* Amber */
```

### Orange Innovation
```css
--primary: #ea580c;        /* Orange */
--primary-light: #fb923c;  /* Light Orange */
--secondary: #7c3aed;      /* Purple */
--accent: #06b6d4;         /* Cyan */
```

## How to Apply Color Changes

### Method 1: Edit CSS Variables
1. Open `assets/css/modern-professional.css`
2. Find the `:root` section (lines 1-30)
3. Change hex color values
4. Save and refresh browser

### Method 2: Full Theme Override
Create a new file: `assets/css/custom-theme.css`
```css
:root {
  --primary: #YOUR_COLOR;
  --primary-dark: #YOUR_DARK_COLOR;
  --primary-light: #YOUR_LIGHT_COLOR;
  --primary-lighter: #YOUR_VERY_LIGHT_COLOR;
  --secondary: #YOUR_SECONDARY;
  --secondary-light: #YOUR_SECONDARY_LIGHT;
  --accent: #YOUR_ACCENT;
}
```

Then add to `_includes/head.html`:
```html
<link rel="stylesheet" href="{{ base_path }}/assets/css/custom-theme.css">
```

## Font Customization

### Current Fonts
- System fonts: SF Pro Display, Segoe UI, Roboto, Helvetica, Arial
- Code font: Monaco, Courier New, monospace

### To Add Google Fonts

1. Edit `_includes/head.html` and add:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

2. Then update `modern-professional.css`:
```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

## Animation Speed Adjustments

### Modify in `animations-interactive.css`

```css
/* Slow animations (0.8s instead of 0.5s) */
.card {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Fast animations (0.2s instead of 0.5s) */
.card {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Preset Animation Speeds
```css
--fast: 0.2s     /* Quick micro-interactions */
--normal: 0.5s   /* Default transitions */
--slow: 0.8s     /* Emphasize animations */
--very-slow: 1.2s /* Prominent animations */
```

## Spacing & Sizing

### Current Spacing Scale
```css
Space Units:
- 0.5rem = 8px
- 0.75rem = 12px
- 1rem = 16px
- 1.5rem = 24px
- 2rem = 32px
- 3rem = 48px
- 4rem = 64px
```

### To Increase Padding
Edit card padding in `modern-professional.css`:
```css
.card {
  padding: 1.5rem;  /* Change from 1.5rem to 2rem */
}
```

## Border & Radius Customization

### Current Values
```css
Border Radius:
- 4px    = buttons, small elements
- 6px    = inputs, form elements
- 8px    = cards, sections
- 10px   = larger cards
- 12px   = hero, major sections
- 20px   = pills, badges
- 24px   = full badges
```

To make everything more rounded:
```css
/* In modern-professional.css */
.btn { border-radius: 12px; }      /* From 8px */
.card { border-radius: 16px; }     /* From 12px */
.skill-tag { border-radius: 24px; } /* Already rounded */
```

## Shadow Effects

### Current Shadow Levels
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
```

### To Increase Shadow Intensity
```css
/* More dramatic shadows */
--shadow-lg: 0 15px 30px rgba(0, 0, 0, 0.25);
```

## Gradient Customization

### Hero Gradient (Edit in hero-section.html)
```css
background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, #ec4899 100%);
```

### Card Gradients (Edit in modern-professional.css)
```css
.card-icon {
  background: linear-gradient(135deg, var(--primary-light), var(--secondary-light));
}
```

### Button Gradients
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
}
```

## Typography Adjustments

### Font Sizes
```css
h1 { font-size: 2.5rem; }   /* Increase: 2.75rem */
h2 { font-size: 2rem; }     /* Increase: 2.25rem */
h3 { font-size: 1.5rem; }   /* Increase: 1.75rem */
body { font-size: 1rem; }   /* Default */
```

### Font Weights
```css
Light:    400
Normal:   500
Medium:   600
Bold:     700
Extra:    800
```

## Component-Specific Tweaks

### Make Cards More Prominent
```css
.card {
  box-shadow: var(--shadow-xl);  /* From var(--shadow-sm) */
  border-radius: 16px;            /* From 12px */
  padding: 2rem;                  /* From 1.5rem */
}
```

### Enhance Button Styling
```css
.btn {
  letter-spacing: 0.05em;  /* More spaced */
  font-weight: 700;        /* Bolder */
  padding: 0.85rem 1.75rem; /* Bigger */
}
```

### Customize Badges
```css
.badge {
  padding: 0.5rem 1.25rem;    /* Larger */
  border-radius: 50px;         /* More rounded */
  font-weight: 700;            /* Bolder */
}
```

## Dark Mode Tweaks

### To Make Dark Mode Different
```css
html.dark {
  --bg: #0a0e27;            /* Darker background */
  --card: #111827;          /* Darker cards */
  --text: #f8fafc;          /* Brighter text */
}
```

## Performance Optimization Tips

1. **Reduce animations**: Change durations to 0.2s
2. **Minimize transitions**: Remove unnecessary hover effects
3. **Optimize images**: Compress profile pictures
4. **Cache CSS**: CSS files are already minified

## Mobile-First Customization

### Adjust Breakpoints (in responsive CSS sections)
```css
@media (max-width: 1199px) { /* Tablets */
  /* Changes here */
}

@media (max-width: 768px) { /* Mobile */
  /* Changes here */
}

@media (max-width: 480px) { /* Small mobile */
  /* Changes here */
}
```
