// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    //added by me
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FFFFFF',
    600: '#E3E3E3',
    700: '#C7C7C7',
    800: '#ABABAB',
    900: '#8F8F8F',
    1000: "#000000", // manually adjusted

    //before
    // 50: "#f0f0f0", // manually adjusted
    // 100: "#",
    // 200: "e0e0e0#c2c2c2",
    // 300: "#a3a3a3",
    // 400: "#858585",
    // 500: "#666666",
    // 600: "#525252",
    // 700: "#3d3d3d",
    // 800: "#292929",
    // 900: "#141414",
    // 1000: "#000000", // manually adjusted
  },
  primary: {
    // green 
    0: "#198754", //default
    100: '#61E2A6',
    200: '#3FDB93',
    300: '#26CC7F',
    400: '#1FA969',
    500: '#198754',
    600: '#105837',
    700: '#072819',
    800: '#000000',
    900: '#000000'
    // blue
    // 100: "#d3d4de",
    // 200: "#a6a9be",
    // 300: "#7a7f9d",
    // 400: "#4d547d",
    // 500: "#21295c",
    // 600: "#191F45", // manually adjusted
    // 700: "#141937",
    // 800: "#0d1025",
    // 900: "#070812",
  },
  secondary: {
    // yellow
    // 50: "#f0f0f0", // manually adjusted
    // 100: "#fff6e0",
    // 200: "#ffedc2",
    // 300: "#ffe3a3",
    // 400: "#ffda85",
    // 500: "#ffd166",
    // 600: "#cca752",
    // 700: "#997d3d",
    // 800: "#665429",
    // 900: "#332a14",

    DEFAULT: '#10B981',
    50: '#8CF5D2',
    100: '#79F3CB',
    200: '#53F0BC',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FFFFFF',
    600: '#FFFCF5',
    700: '#FFEFCC',
    800: '#CDD4C2',
    900: '#A6B292'
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            ...tokensDark.primary,
            main: tokensDark.primary[400],
            light: tokensDark.primary[400],
          },
          secondary: {
            ...tokensDark.secondary,
            main: tokensDark.secondary[300],
          },
          neutral: {
            ...tokensDark.grey,
            main: tokensDark.grey[500],
          },
          background: {
            default: tokensDark.primary[600],
            alt: tokensDark.primary[500],
          },
        }
        : {
          // palette values for light mode
          primary: {
            ...tokensLight.primary,
            main: tokensDark.grey[50],
            light: tokensDark.grey[100],
          },
          secondary: {
            ...tokensLight.secondary,
            main: tokensDark.secondary[600],
            light: tokensDark.secondary[700],
          },
          neutral: {
            ...tokensLight.grey,
            main: tokensDark.grey[500],
          },
          background: {
            default: tokensDark.grey[0],
            alt: tokensDark.grey[50],
          },
        }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
