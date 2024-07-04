const Theme = {
  colors: {
    white: '#ffffff',
    black: '#0a0a0a',
    gray0: '#F0F0F0',
    gray1: '#575757',
    Purple: '#452CFF',
  },
  font: 'Poppins',
  Sizes: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.125rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    '2xl': '2rem',
  },
  screenSize: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
};

Theme.device = {
  mobile: `(max-width: ${Theme.screenSize.mobile})`,
  tablet: `(max-width: ${Theme.screenSize.tablet})`,
  desktop: `(max-width: ${Theme.screenSize.desktop})`,
};

export default Theme;
