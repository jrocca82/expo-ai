import { extendTheme } from "native-base";

const newColorTheme = {
  brand: {},
};

export const customTheme = extendTheme({
  colors: newColorTheme,
});

type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
