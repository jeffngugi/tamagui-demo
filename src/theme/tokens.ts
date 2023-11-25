import { createTokens } from 'tamagui';

export const tokens = createTokens({
    color: {
        // background
        backgroundDark: '#171719',
        backgroundLight: '#FFFFFF',


        // text
        textDark: '#969CB2',
        textLight: '#717997',


        // contrast
        contrastDark: '#23232B',
        contrastLight: '#E6E5EF',


        // accent
        accentDark: '#434343',
        accentLight: '#B0B0B0',
        yellowa: '#FFFF00',


        // shared
        blue: '#2666DE',
        blueOpacity: 'rgba(38, 102, 222, 0.50)',
        white: '#FFFFFF',
        overlay: 'rgba(0, 0, 0, 0.50)',
        transparent: 'transparent',
        success: '#12a454',
        successOpacity: 'rgba(18, 164, 84, 0.5)',
        danger: '#e83f5b',
        dangerOpacity: 'rgba(232, 63, 91, 0.5)',
    },
    space: {
        base: 0,
        xs: 2,
        sm: 4,
        md: 8,
        true: 8,
        space: 10
      },
      size: {
        base: 0,
        xs: 2,
        sm: 4,
        md: 8,
        true: 8,
        height:50
      },
      radius: {
        base: 0,
        xs: 2,
        sm: 4,
        md: 8,
        radius: 10
      },
      zIndex: {
        base: 0,
        xs: 2,
        sm: 4,
        md: 8,
        zi: 10
      },
})