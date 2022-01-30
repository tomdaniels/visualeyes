type ColourInfo = {
  colour: string;
  hex: string;
};

type ColourScheme = {
  primary: ColourInfo;
  secondary: ColourInfo;
  accent: ColourInfo;
};

const THEME: ColourScheme = {
  // use the hex property when browser doesnt match UI
  // source: https://chakra-ui.com/docs/theming/theme#colors
  primary: {
    hex: '#9F7AEA',
    colour: 'purple',
  },
  secondary: {
    hex: '#0BC5EA',
    colour: 'cyan',
  },
  accent: {
    colour: 'yellow',
    hex: '#FEFCBF',
  },
};

export default THEME;
