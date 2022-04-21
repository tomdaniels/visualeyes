type ColourInfo = {
  colour: string;
  hex: string;
  light: string;
};

type ColourScheme = {
  primary: ColourInfo;
  secondary: Omit<ColourInfo, 'light'>;
  accent: Omit<ColourInfo, 'light'>;
  ghost: Omit<ColourInfo, 'light'>
};

const THEME: ColourScheme = {
  // use the hex property when browser doesnt match UI
  // source: https://chakra-ui.com/docs/theming/theme#colors
  primary: {
    hex: '#9F7AEA',
    light: '#B794F4',
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
  ghost: {
    colour: 'ghost',
    hex: '#F8F8FF'
  }
};

export default THEME;
