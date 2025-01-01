import { colorAlpha } from './util';
import { ThemeOptions } from '@mui/material/styles';

const muiDarkTheme: ThemeOptions['palette'] = {
    mode: 'dark',
    background: {
        default: '#020010',
        paper: '#0e0a21',
    },
    common: {
        white: '#000',
        black: '#fff',
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
        main: '#ffffff',
        'A10': colorAlpha('#ffffff', 20),
        'A20': colorAlpha('#ffffff', 40),
        'A40': colorAlpha('#ffffff', 60),
        'A60': colorAlpha('#ffffff', 80),
        'A80': colorAlpha('#ffffff', 90),
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
        main: '#ffffff',
        contrastText: '#FFFFFF',
        'A10': colorAlpha('#ffffff', 20),
        'A20': colorAlpha('#ffffff', 40),
        'A40': colorAlpha('#ffffff', 60),
        'A60': colorAlpha('#ffffff', 80),
        'A80': colorAlpha('#ffffff', 90),
    },

};

export default muiDarkTheme;