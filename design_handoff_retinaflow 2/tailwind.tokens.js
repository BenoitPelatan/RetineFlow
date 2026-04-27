// Drop-in extension for tailwind.config.js
// Usage:
//   const rf = require('./design_handoff_retinaflow/tailwind.tokens.js');
//   module.exports = { theme: { extend: rf.extend } };

module.exports = {
  extend: {
    colors: {
      ink: {
        900: '#0B1B2B',
        700: '#1F3142',
        500: '#3C4A5A',
        300: '#7B8794',
        100: '#E2E7EC',
      },
      surface: '#FFFFFF',
      bg:      '#FBFCFD',
      rule:    '#E2E7EC',
      primary: {
        DEFAULT: '#0B5FA5',
        900: '#093F6F',
        700: '#0A538F',
        500: '#0B5FA5',
        300: '#7DA8C8',
        100: '#DCE8F1',
        tint: '#E1EBF3',
        ink:  '#FFFFFF',
      },
      success:  '#1E7F5A',
      warning:  '#B26A00',
      critical: '#A8202F',
      info:     '#1F4B8A',
    },
    fontFamily: {
      display: ["'Inter Tight'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      body:    ["'Inter Tight'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      mono:    ["'JetBrains Mono'", 'ui-monospace', "'SF Mono'", 'Menlo', 'monospace'],
    },
    fontSize: {
      'display-xl': ['88px', { lineHeight: '1.0',  letterSpacing: '-0.03em', fontWeight: 500 }],
      'display-l':  ['56px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: 500 }],
      'title-m':    ['28px', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: 500 }],
      'body-l':     ['18px', { lineHeight: '1.55', letterSpacing: '0',       fontWeight: 400 }],
      'body-m':     ['15px', { lineHeight: '1.55', letterSpacing: '0',       fontWeight: 400 }],
      'caption':    ['12px', { lineHeight: '1.4',  letterSpacing: '0.06em',  fontWeight: 500 }],
      'mono-data':  ['14px', { lineHeight: '1.4',  letterSpacing: '0',       fontWeight: 500 }],
    },
    borderRadius: {
      control: '2px',
      surface: '0',
    },
    transitionDuration: {
      fast: '120ms',
    },
    boxShadow: {
      none: 'none',
    },
  },
};
