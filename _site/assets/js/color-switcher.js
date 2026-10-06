/* ===================================================================
   COLOR THEME SWITCHER - Simplified Version
   Handles color theme selection and persistence
   =================================================================== */

(function () {
  const STORAGE_KEY = 'color-theme';
  const STORAGE_VERSION_KEY = 'color-theme-version';
  const DEFAULT_THEME = 'ocean';
  const STORAGE_VERSION = 'ocean-default-v1';

  // Color theme definitions
  const colorThemes = {
    default: {
      primary: '#52adc8',
      secondary: '#7a8288',
      accent: '#f89406',
      light: '#62c462',
      danger: '#ee5f5b',
      name: 'Default'
    },
    'purple-pink': {
      primary: '#a78bfa',
      secondary: '#f06595',
      accent: '#c084fc',
      light: '#e879f9',
      danger: '#ec4899',
      name: 'Purple-Pink'
    },
    'red-green': {
      primary: '#ff6b6b',
      secondary: '#51cf66',
      accent: '#ff6b6b',
      light: '#51cf66',
      danger: '#ff6b6b',
      name: 'Red-Green'
    },
    ocean: {
      primary: '#00d4ff',
      secondary: '#0095ff',
      accent: '#00d4ff',
      light: '#00d4ff',
      danger: '#0095ff',
      name: 'Ocean'
    },
    sunset: {
      primary: '#ff6b6b',
      secondary: '#ffa500',
      accent: '#ff6b6b',
      light: '#ffa500',
      danger: '#ff6b6b',
      name: 'Sunset'
    },
    forest: {
      primary: '#51cf66',
      secondary: '#1e7e3d',
      accent: '#51cf66',
      light: '#51cf66',
      danger: '#1e7e3d',
      name: 'Forest'
    },
    vibrant: {
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ff00ff',
      light: '#00ffff',
      danger: '#ff00ff',
      name: 'Vibrant'
    },
    cherry: {
      primary: '#e74c3c',
      secondary: '#c0392b',
      accent: '#e74c3c',
      light: '#e74c3c',
      danger: '#c0392b',
      name: 'Cherry'
    },
    mint: {
      primary: '#1abc9c',
      secondary: '#16a085',
      accent: '#1abc9c',
      light: '#1abc9c',
      danger: '#16a085',
      name: 'Mint'
    },
    lavender: {
      primary: '#9b59b6',
      secondary: '#8e44ad',
      accent: '#9b59b6',
      light: '#9b59b6',
      danger: '#8e44ad',
      name: 'Lavender'
    },
    gold: {
      primary: '#f39c12',
      secondary: '#d68910',
      accent: '#f39c12',
      light: '#f39c12',
      danger: '#d68910',
      name: 'Gold'
    },
    coral: {
      primary: '#ff7675',
      secondary: '#ff5252',
      accent: '#ff7675',
      light: '#ff7675',
      danger: '#ff5252',
      name: 'Coral'
    },
    cyan: {
      primary: '#00bcd4',
      secondary: '#0097a7',
      accent: '#00838f',
      light: '#4dd0e1',
      danger: '#00838f',
      name: 'Cyan'
    },
    neon: {
      primary: '#39ff14',
      secondary: '#ff10f0',
      accent: '#00ffff',
      light: '#7fff00',
      danger: '#ff1493',
      name: 'Neon'
    },
    electric: {
      primary: '#00ff00',
      secondary: '#00ffff',
      accent: '#ff00ff',
      light: '#00ff00',
      danger: '#ff0000',
      name: 'Electric'
    },
    modern: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#d946ef',
      light: '#a78bfa',
      danger: '#ef4444',
      name: 'Modern'
    },
    'sunset-glow': {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#fdb833',
      light: '#ffa502',
      danger: '#ff4500',
      name: 'Sunset Glow'
    },
    'deep-space': {
      primary: '#0f3460',
      secondary: '#16213e',
      accent: '#e94560',
      light: '#533483',
      danger: '#e94560',
      name: 'Deep Space'
    },
    tropical: {
      primary: '#00d4d4',
      secondary: '#00ffa3',
      accent: '#ff006e',
      light: '#00f5ff',
      danger: '#ff006e',
      name: 'Tropical'
    }
  };

  /**
   * Apply color theme to document
   */
  function applyColorTheme(themeName) {
    const theme = colorThemes[themeName];
    
    if (!theme) {
      console.error('Theme not found:', themeName);
      return;
    }
    
    const root = document.documentElement;

    // Set CSS custom properties
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-light', theme.light);
    root.style.setProperty('--color-danger', theme.danger);
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-dark', lightenColor(theme.primary, -22));
    root.style.setProperty('--primary-light', lightenColor(theme.primary, 12));
    root.style.setProperty('--primary-lighter', lightenColor(theme.primary, 38));
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--secondary-light', lightenColor(theme.secondary, 34));
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-light', lightenColor(theme.accent, 34));
    root.style.setProperty('--primary-accent', theme.primary);
    root.style.setProperty('--primary-accent-dark', lightenColor(theme.primary, -18));

    // Update dynamic styles
    updateLinkColors(theme);

    // Store preference
    try {
      localStorage.setItem(STORAGE_KEY, themeName);
      localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
      console.log('Theme saved:', themeName);
    } catch (e) {
      console.error('Error saving theme preference:', e);
    }
  }

  /**
   * Update link and text colors dynamically
   */
  function updateLinkColors(theme) {
    // Create or update style element for dynamic colors
    let styleEl = document.getElementById('dynamic-color-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'dynamic-color-styles';
      document.head.appendChild(styleEl);
      console.log('Created dynamic-color-styles element');
    }

    const primaryRgb = hexToRgb(theme.primary);
    const secondaryRgb = hexToRgb(theme.secondary);

    const styles = `
      :root {
        --color-primary: ${theme.primary};
        --color-secondary: ${theme.secondary};
        --color-accent: ${theme.accent};
        --color-light: ${theme.light};
        --color-danger: ${theme.danger};
      }

      a {
        color: ${theme.primary} !important;
      }

      a:hover {
        color: ${theme.secondary} !important;
      }

      /* Bold text styling */
      b, strong, .bold, [style*="font-weight: bold"], [style*="font-weight:bold"] {
        color: ${theme.primary} !important;
        font-weight: 700 !important;
      }

      /* Heading styling */
      h1, h2, h3, h4, h5, h6 {
        color: ${theme.primary} !important;
      }

      h1 strong, h1 b,
      h2 strong, h2 b,
      h3 strong, h3 b,
      h4 strong, h4 b,
      h5 strong, h5 b,
      h6 strong, h6 b {
        color: ${theme.primary};
      }

      /* Page heading */
      .page__content h2 {
        color: ${theme.secondary};
      }

      .page__content h2 strong,
      .page__content h2 b {
        color: ${theme.secondary};
      }

      .archive__item-title {
        color: ${theme.primary};
      }

      .archive__item-title a {
        color: ${theme.primary} !important;
      }

      .archive__item-title a:hover {
        color: ${theme.secondary} !important;
      }

      .archive__item-title strong,
      .archive__item-title b {
        color: ${theme.primary};
      }

      .sidebar .widget-title {
        color: ${theme.primary};
      }

      .sidebar .widget-title strong,
      .sidebar .widget-title b {
        color: ${theme.primary};
      }

      /* Button styling */
      .btn--info {
        background-color: ${theme.primary};
      }

      .btn--success {
        background-color: ${theme.light};
      }

      .btn--warning {
        background-color: ${theme.accent};
      }

      .btn--danger {
        background-color: ${theme.danger};
      }

      /* General button and link styling */
      button, .btn, input[type="button"], input[type="submit"] {
        background-color: ${theme.primary};
        color: #fff;
        border-color: ${theme.primary};
      }

      button:hover, .btn:hover, input[type="button"]:hover, input[type="submit"]:hover {
        background-color: ${theme.secondary};
        border-color: ${theme.secondary};
      }

      /* Table header styling */
      table th {
        color: ${theme.primary} !important;
        font-weight: 700 !important;
        background: rgba(${primaryRgb}, 0.08) !important;
        border-color: rgba(${primaryRgb}, 0.3) !important;
      }

      /* Social share buttons */
      .share-btn, .social-share a {
        color: ${theme.primary} !important;
        border-color: ${theme.primary} !important;
      }

      .share-btn:hover, .social-share a:hover {
        background-color: ${theme.primary} !important;
        color: #fff !important;
      }

      /* Paragraph bold text */
      p strong, p b {
        color: ${theme.primary};
      }

      /* List bold text */
      li strong, li b {
        color: ${theme.primary};
      }

      /* Blockquote styling */
      blockquote strong, blockquote b {
        color: ${theme.secondary};
      }

      /* Mark/highlight styling */
      mark {
        background-color: rgba(${primaryRgb}, 0.2);
        color: ${theme.primary};
      }

      /* Light mode navigation styling */
      .masthead__menu-item a {
        color: ${theme.primary};
      }

      .masthead__menu-item a:hover {
        color: ${theme.secondary};
      }

      .greedy-nav a:hover {
        color: ${theme.primary};
      }

      .nav__list a {
        color: ${theme.primary};
      }

      .nav__list a:hover {
        background: rgba(${primaryRgb}, 0.1);
        color: ${theme.secondary};
        box-shadow: -2px 0 0 ${theme.primary};
      }

      .nav__list .active {
        color: ${theme.primary};
        box-shadow: 0 4px 12px ${theme.primary}40;
      }

      .nav__list .active:hover {
        color: ${theme.secondary};
      }

      .sidebar .nav__list a {
        color: ${theme.primary};
      }

      .sidebar .nav__list a:hover {
        background: rgba(${primaryRgb}, 0.1);
        color: ${theme.secondary};
        box-shadow: -2px 0 0 ${theme.primary};
      }

      /* Light mode sidebar styling */
      .sidebar {
        border-color: rgba(${primaryRgb}, 0.2);
      }

      .sidebar:hover {
        border-color: rgba(${primaryRgb}, 0.3);
        box-shadow: 0 12px 40px rgba(${primaryRgb}, 0.15);
      }

      .author__name {
        color: ${theme.primary};
      }

      .sidebar:hover .author__name,
      .author__name:hover {
        color: ${theme.secondary};
      }

      .author__bio {
        color: #666;
      }

      .sidebar:hover .author__bio {
        color: ${theme.primary};
      }

      .sidebar h3 {
        color: ${theme.primary};
      }

      .sidebar h3:before {
        background: ${theme.primary};
      }

      .author__urls a {
        background: rgba(${primaryRgb}, 0.08);
        color: ${theme.primary};
        border-color: rgba(${primaryRgb}, 0.2);
      }

      .author__urls a:hover {
        background: rgba(${primaryRgb}, 0.16);
        color: #fff;
        border-color: ${theme.primary};
      }

      /* Light mode text styling */
      .page__content {
        color: #333;
      }

      .page__content strong,
      .page__content b {
        color: ${theme.primary};
        font-weight: 700;
      }

      .sidebar strong,
      .sidebar b {
        color: ${theme.primary};
        font-weight: 700;
      }

      table {
        color: #333;
      }

      table strong,
      table b,
      table td strong,
      table td b,
      table th strong,
      table th b {
        color: ${theme.primary} !important;
        font-weight: 700 !important;
      }

      /* Light mode table bold text */
      table strong, 
      table b,
      table td strong,
      table td b,
      table th strong,
      table th b {
        color: ${theme.primary} !important;
        font-weight: 700 !important;
      }

      /* Control buttons theme styling */
      .color-switcher-toggle {
        border-color: ${theme.primary} !important;
        color: #000 !important;
        background: rgba(${primaryRgb}, 0.12) !important;
        box-shadow: 0 6px 18px rgba(${primaryRgb}, 0.15) !important;
      }

      .color-switcher-toggle:hover {
        background: rgba(${primaryRgb}, 0.2) !important;
        box-shadow: 0 4px 12px rgba(${primaryRgb}, 0.25) !important;
      }

      .accessibility-toggle {
        border-color: ${theme.primary} !important;
        color: #000 !important;
        background: rgba(${primaryRgb}, 0.12) !important;
        box-shadow: 0 6px 18px rgba(${primaryRgb}, 0.15) !important;
      }

      .accessibility-toggle:hover {
        background: rgba(${primaryRgb}, 0.2) !important;
        box-shadow: 0 4px 12px rgba(${primaryRgb}, 0.25) !important;
      }

      .theme-toggle-float {
        border-color: ${theme.primary} !important;
        color: #000 !important;
        background: rgba(${primaryRgb}, 0.12) !important;
        box-shadow: 0 6px 18px rgba(${primaryRgb}, 0.15) !important;
      }

      .theme-toggle-float:hover {
        background: rgba(${primaryRgb}, 0.2) !important;
        box-shadow: 0 4px 12px rgba(${primaryRgb}, 0.25) !important;
      }

      /* DARK MODE STYLING */
      html.dark a {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark a:hover {
        color: ${lightenColor(theme.secondary, 18)};
      }

      /* Dark mode bold text - lighter colors for contrast */
      html.dark b,
      html.dark strong,
      html.dark .bold,
      html.dark [style*="font-weight: bold"],
      html.dark [style*="font-weight:bold"] {
        color: ${lightenColor(theme.primary, 18)};
        font-weight: 700;
      }

      /* Dark mode headings */
      html.dark h1,
      html.dark h2,
      html.dark h3,
      html.dark h4,
      html.dark h5,
      html.dark h6 {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark h1 strong, html.dark h1 b,
      html.dark h2 strong, html.dark h2 b,
      html.dark h3 strong, html.dark h3 b,
      html.dark h4 strong, html.dark h4 b,
      html.dark h5 strong, html.dark h5 b,
      html.dark h6 strong, html.dark h6 b {
        color: ${lightenColor(theme.primary, 18)};
      }

      /* Dark mode page heading */
      html.dark .page__content h2 {
        color: ${lightenColor(theme.secondary, 18)};
      }

      html.dark .page__content h2 strong,
      html.dark .page__content h2 b {
        color: ${lightenColor(theme.secondary, 18)};
      }

      html.dark .archive__item-title {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .archive__item-title a {
        color: ${lightenColor(theme.primary, 18)} !important;
      }

      html.dark .archive__item-title a:hover {
        color: ${lightenColor(theme.secondary, 18)} !important;
      }

      html.dark .archive__item-title strong,
      html.dark .archive__item-title b {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar .widget-title {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar .widget-title strong,
      html.dark .sidebar .widget-title b {
        color: ${lightenColor(theme.primary, 18)};
      }

      /* Dark mode button styling */
      html.dark .btn--info {
        background-color: #111;
        color: #f4f4f5;
      }

      html.dark .btn--success {
        background-color: #111;
        color: #f4f4f5;
      }

      html.dark .btn--warning {
        background-color: #111;
        color: #f4f4f5;
      }

      html.dark .btn--danger {
        background-color: #111;
        color: #f4f4f5;
      }

      /* General dark mode button styling */
      html.dark button, 
      html.dark .btn, 
      html.dark input[type="button"], 
      html.dark input[type="submit"] {
        background-color: #111;
        color: #f4f4f5;
        border-color: #2a2a2a;
      }

      html.dark button:hover, 
      html.dark .btn:hover, 
      html.dark input[type="button"]:hover, 
      html.dark input[type="submit"]:hover {
        background-color: #1a1a1a;
        border-color: #3a3a3a;
      }

      /* Dark mode table header styling */
      html.dark table th {
        color: #f4f4f5 !important;
        font-weight: 700 !important;
        background: #0c0c0c !important;
        border-color: #2a2a2a !important;
      }

      /* Dark mode social share buttons */
      html.dark .share-btn, 
      html.dark .social-share a {
        color: #f4f4f5 !important;
        border-color: #2a2a2a !important;
      }

      html.dark .share-btn:hover, 
      html.dark .social-share a:hover {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
      }

      /* Dark mode paragraph bold text */
      html.dark p strong,
      html.dark p b {
        color: ${lightenColor(theme.primary, 18)};
      }

      /* Dark mode list bold text */
      html.dark li strong,
      html.dark li b {
        color: ${lightenColor(theme.primary, 18)};
      }

      /* Dark mode blockquote styling */
      html.dark blockquote strong,
      html.dark blockquote b {
        color: ${lightenColor(theme.secondary, 18)};
      }

      /* Dark mode mark/highlight styling */
      html.dark mark {
        background-color: #1a1a1a;
        color: #f4f4f5;
      }

      /* Dark mode page content */
      html.dark .page__content {
        color: #e8f4f8;
      }

      html.dark .page__content strong,
      html.dark .page__content b {
        color: ${lightenColor(theme.primary, 18)};
        font-weight: 700;
      }

      /* Dark mode table styling */
      html.dark table {
        background: #000 !important;
        border-collapse: collapse;
      }

      html.dark thead {
        background: #0a0a0a !important;
      }

      html.dark thead th {
        background: #0c0c0c !important;
        color: #f4f4f5 !important;
        border: 1px solid #2a2a2a !important;
      }

      html.dark tbody td {
        color: #e8f4f8 !important;
        border: 1px solid #222 !important;
        background: #0a0a0a !important;
      }

      html.dark tbody tr:hover td {
        background: #111 !important;
      }

      html.dark tbody tr:nth-child(even) td {
        background: #050505 !important;
      }

      html.dark tbody tr:nth-child(even):hover td {
        background: #111 !important;
      }

      html.dark table caption {
        color: #f4f4f5 !important;
      }

      html.dark table strong,
      html.dark table b,
      html.dark table td strong,
      html.dark table td b,
      html.dark table th strong,
      html.dark table th b {
        color: ${lightenColor(theme.primary, 18)} !important;
        font-weight: 700 !important;
      }

      html.dark table em {
        color: ${lightenColor(theme.secondary, 18)} !important;
      }

      html.dark table i {
        color: ${lightenColor(theme.secondary, 18)} !important;
      }

      /* Dark mode navigation styling */
      html.dark .masthead__menu-item a {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .masthead__menu-item a:hover {
        color: ${lightenColor(theme.secondary, 18)};
      }

      html.dark .greedy-nav a:hover {
        color: ${lightenColor(theme.secondary, 18)};
      }

      html.dark .nav__list a {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .nav__list a:hover {
        background: #151515;
        color: ${lightenColor(theme.secondary, 18)};
        box-shadow: -2px 0 0 #3a3a3a;
      }

      html.dark .nav__list .active {
        color: ${lightenColor(theme.primary, 18)};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
      }

      html.dark .nav__list .active:hover {
        color: ${lightenColor(theme.secondary, 18)};
      }

      /* Dark mode sidebar styling */
      html.dark .sidebar {
        background: rgba(10, 10, 10, 0.92);
        border-color: #232323;
      }

      html.dark .sidebar:hover {
        background: rgba(14, 14, 14, 0.96);
        border-color: #2c2c2c;
      }

      html.dark .author__avatar img {
        border-color: #2a2a2a;
      }

      html.dark .sidebar:hover .author__avatar .avatar-spin img {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
      }

      html.dark .author__name {
        color: ${lightenColor(theme.primary, 18)} !important;
        text-shadow: none !important;
        font-weight: 800 !important;
        -webkit-text-fill-color: ${lightenColor(theme.primary, 18)} !important;
      }

      html.dark .sidebar:hover .author__name {
        text-shadow: none !important;
      }

      html.dark .author__bio {
        color: #e8f4f8;
      }

      html.dark .sidebar h3 {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar h3:before {
        background: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar .widget-title {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar .widget-title strong,
      html.dark .sidebar .widget-title b {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .author__urls a {
        background: #111;
        color: #e4e4e7;
        border-color: #27272a;
      }

      html.dark .author__urls a:hover {
        background: #1a1a1a;
        color: #ffffff;
        border-color: #3a3a3a;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
      }

      html.dark .author__urls-wrapper .btn {
        background: #111;
        color: #ffffff;
        border-color: #2a2a2a;
      }

      html.dark .author__urls-wrapper .btn:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
      }

      html.dark .sidebar .nav__list a {
        color: ${lightenColor(theme.primary, 18)};
      }

      html.dark .sidebar .nav__list a:hover {
        background: #151515;
        color: ${lightenColor(theme.secondary, 18)};
        box-shadow: -2px 0 0 #3a3a3a;
      }

      html.dark .sidebar strong,
      html.dark .sidebar b {
        color: ${lightenColor(theme.primary, 18)};
      }

      /* Dark mode control buttons theme styling */
      html.dark .color-switcher-toggle {
        border-color: #2a2a2a !important;
        color: #fff !important;
        background: #111 !important;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35) !important;
      }

      html.dark .color-switcher-toggle:hover {
        background: #1a1a1a !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
      }

      html.dark .accessibility-toggle {
        border-color: #2a2a2a !important;
        color: #fff !important;
        background: #111 !important;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35) !important;
      }

      html.dark .accessibility-toggle:hover {
        background: #1a1a1a !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
      }

      html.dark .theme-toggle-float {
        border-color: #2a2a2a !important;
        color: #fff !important;
        background: #111 !important;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35) !important;
      }

      html.dark .theme-toggle-float:hover {
        background: #1a1a1a !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
      }

    `;

    styleEl.textContent = styles;
    console.log('Styles applied to dynamic-color-styles element. Theme primary color:', theme.primary);
  }

  function hexToRgb(color) {
    const normalized = color.replace('#', '');
    const safe = normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized;
    const num = parseInt(safe, 16);
    return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
  }

  /**
   * Lighten a hex color by a given percentage
   */
  function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  /**
   * Initialize color switcher
   */
  function initColorSwitcher() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    console.log('Initializing color switcher... Found', colorOptions.length, 'buttons');
    
    if (colorOptions.length === 0) {
      console.log('No color buttons found, retrying...');
      setTimeout(initColorSwitcher, 100);
      return;
    }

    // Get stored theme or use default
    let savedTheme = DEFAULT_THEME;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
      if (stored && colorThemes[stored]) {
        // Migrate visitors who still have an old auto-saved default theme.
        if ((!storedVersion && stored === 'default') || (storedVersion === 'neon-default-v1' && stored === 'neon')) {
          savedTheme = DEFAULT_THEME;
        } else {
          savedTheme = stored;
        }
      }
    } catch (e) {
      console.error('Error reading theme preference:', e);
    }

    console.log('Applying saved theme:', savedTheme);
    
    // Apply saved theme on load
    applyColorTheme(savedTheme);

    // Mark the current theme button
    colorOptions.forEach(btn => {
      const themeName = btn.dataset.theme;
      btn.setAttribute('aria-pressed', themeName === savedTheme ? 'true' : 'false');
    });

    // Add click handlers to each button
    colorOptions.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const themeName = btn.dataset.theme;
        
        console.log('Color button clicked:', themeName);
        
        if (!colorThemes[themeName]) {
          console.error('Theme not found:', themeName);
          return;
        }
        
        // Update button states
        colorOptions.forEach(b => {
          b.setAttribute('aria-pressed', 'false');
        });
        btn.setAttribute('aria-pressed', 'true');
        
        // Apply the new theme
        applyColorTheme(themeName);
        savedTheme = themeName;
        
        console.log('Theme applied:', themeName);
      });
    });
    
    console.log('Color switcher initialized successfully');
  }

  /**
   * Announce theme change to screen readers
   */
  function announceThemeChange(themeName) {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.textContent = 'Color theme changed to ' + themeName;

    document.body.appendChild(announcement);

    setTimeout(() => {
      announcement.remove();
    }, 1000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initColorSwitcher);
  } else {
    initColorSwitcher();
  }
})();
