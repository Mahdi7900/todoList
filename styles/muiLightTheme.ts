import {ThemeOptions} from '@mui/material/styles';

const muiLightTheme: ThemeOptions['palette'] = {
    mode: 'light',
    background: {
        default: '#F1F4FD',
    },
    primary: {
        main: '#00A693',
        'A10': 'rgba(0,166,147, 10)',
        'A20': 'rgba(0,166,147, 20)',
        'A40': 'rgba(0,166,147, 40)',
        'A60': 'rgba(0,166,147, 60)',
        'A80': 'rgba(0,166,147, 80)',
        dark: '#038d7f',
    },
    secondary: {
        main: '#0A0047',
        'A10': 'rgba(10,0,71, 10)',
        'A20': 'rgba(10,0,71, 20)',
        'A40': 'rgba(10,0,71, 40)',
        'A60': 'rgba(10,0,71, 60)',
        'A80': 'rgba(10,0,71, 80)',
        dark: '#06002B',
    },
    error: {
        main: '#FF3124',
        'A10': 'rgba(255,49,36, 10)',
        'A20': 'rgba(255,49,36, 20)',
        'A40': 'rgba(255,49,36, 40)',
        'A60': 'rgba(255,49,36, 60)',
        'A80': 'rgba(255,49,36, 80)',
        dark: '#E4180B',
    },
    eastBay: {
        main: '#635E79',
        dark: '#3E3758',
        light: '#635E79',
        contrastText: '#FFFFFF',
        'A10': 'rgba(99,94,121, 10)',
        'A20': 'rgba(99,94,121, 20)',
        'A40': 'rgba(99,94,121, 40)',
        'A60': 'rgba(99,94,121, 60)',
        'A80': 'rgba(99,94,121, 80)',

    },
};

export default muiLightTheme;