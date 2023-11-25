import { createTamagui } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { createInterFont } from '@tamagui/font-inter';
import { animations } from './src/theme/animation';
import { tokens } from './src/theme/tokens';
import { themes } from './src/theme/themes';




  const headingFont = createInterFont();
    const bodyFont = createInterFont();


const tamaguiConfig = createTamagui({
    animations,
    defaultTheme: 'light',
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont
    },
    tokens,
    themes

    
})

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
