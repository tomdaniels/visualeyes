type ColourInfo = {
  colour: string;
  hex: string;
};

type ColourScheme = {
  primary: ColourInfo;
  secondary: ColourInfo;
};

const THEME: ColourScheme = {
  // keep browser & chakra consistent
  // source: https://chakra-ui.com/docs/theming/theme#colors
  primary: {
    hex: '#9F7AEA',
    colour: 'purple',
  },
  secondary: {
    hex: '#0BC5EA',
    colour: 'cyan',
  },
};

export default THEME;
