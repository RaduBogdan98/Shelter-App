import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const lightColors = {
    primaryBlue: "#4A7DCB",
    secondaryBlue: "#6EA4F4",
    accentGreen: "#44A783",
    accentOrange: "#F1AB5A",
    dangerRed: "#F46E6E",
    black: "#000000",
    white: "#FFFFFF",
}

const darkColors = {
    primaryBlue: "#4A7DCB",
    secondaryBlue: "#6EA4F4",
    accentGreen: "#44A783",
    accentOrange: "#F1AB5A",
    dangerRed: "#F46E6E",
    black: "#000000",
    white: "#FFFFFF",
}

const colorConfig = colorScheme === 'dark' ? darkColors : lightColors;

export const themeColors = {
    ...colorConfig,
}