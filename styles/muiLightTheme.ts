import { colorAlpha } from './util';
import { ThemeOptions } from '@mui/material/styles';

const muiLightTheme: ThemeOptions['palette'] = {
    mode: 'light',
    background: {
        default: '#F1F4FD',
    },
    primary: {
        main: '#00A693',
        'A10': colorAlpha('#00A693', 10),
        'A20': colorAlpha('#00A693', 20),
        'A40': colorAlpha('#00A693', 40),
        'A60': colorAlpha('#00A693', 60),
        'A80': colorAlpha('#00A693', 80),
        dark: '#038d7f',
    },
    secondary: {
        main: '#0A0047',
        'A10': colorAlpha('#0A0047', 10),
        'A20': colorAlpha('#0A0047', 20),
        'A40': colorAlpha('#0A0047', 40),
        'A60': colorAlpha('#0A0047', 60),
        'A80': colorAlpha('#0A0047', 80),
        dark: '#06002B',
    },
    error: {
        main: '#FF3124',
        'A10': colorAlpha('#FF3124', 10),
        'A20': colorAlpha('#FF3124', 20),
        'A40': colorAlpha('#FF3124', 40),
        'A60': colorAlpha('#FF3124', 60),
        'A80': colorAlpha('#FF3124', 80),
        dark: '#E4180B',
    },
    eastBay: {
        main: '#635E79',
        dark: '#3E3758',
        light: '#635E79',
        contrastText: '#FFFFFF',
        'A10': colorAlpha('#635e79', 10),
        'A20': colorAlpha('#635E79', 20),
        'A40': colorAlpha('#635E79', 40),
        'A60': colorAlpha('#635E79', 60),
        'A80': colorAlpha('#635E79', 80),
    },
};

export default muiLightTheme;