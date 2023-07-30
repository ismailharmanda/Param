export const theme = {
  radius: 8,
  text: {
    fontFamily: 'Mark-Pro',
    size: {
      xxl: {
        fontSize: 32,
        lineHeight: 38.4,
      },
      xl: {
        fontSize: 28,
        lineHeight: 33.6,
      },
      lg: {
        fontSize: 20,
        lineHeight: 21,
      },
      md: {
        fontSize: 16,
        lineHeight: 21,
      },
      sm: {
        fontSize: 14,
        lineHeight: 16.8,
      },
      xs: {
        fontSize: 12,
        lineHeight: 14.4,
      },
      xxs: {
        fontSize: 10,
        lineHeight: 12,
      },
    },
  },
  colors: {
    base: {
      transparent: 'rgba(255, 255, 255, 0)',
      black: '#000000',
      white: '#ffffff',
      dark: '#5A5A5A',
      text: '#C2BBCF',
    },
    primary: {
      regular: 'rgb(74, 8, 135)',
      transparent: 'rgba(74, 8, 135, 0.6)',
    },
    secondary: {
      regular: 'rgb(242,242,249)',
      transparent: 'rgba(242,242,249,0.6)',
    },
    tertiary: {
      regular: 'rgb(62,14,122)',
      transparent: 'rgba(62,14,122,0.6)',
    },
    success: {
      regular: '#006E5E',
    },
    error: {
      regular: '#FF0000',
    },
  },
  shadow: {
    elevation1: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    elevation2: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    elevation3: {
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: {
        width: 0,
        height: 4,
        blur: 4,
      },
      shadowRadius: 7,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    screenHorizontalPadding: 20,
    screenVerticalPadding: 16,
  },
  height: {
    button: 48,
    input: 48,
  },
};
