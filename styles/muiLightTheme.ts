import {ThemeOptions} from '@mui/material/styles';

const muiLightTheme: ThemeOptions['palette'] = {
    mode: 'light',
    background: {
        default: '#F1F4FD',
    },
    primary: {
        main: '#00A693',
        'A10': 'rgba(0,166,147, 0.1)',
        'A20': 'rgba(0,166,147, 0.2)',
        'A40': 'rgba(0,166,147, 0.4)',
        'A60': 'rgba(0,166,147, 0.6)',
        'A80': 'rgba(0,166,147, 0.8)',
        dark: '#038d7f',
    },
    secondary: {
        main: '#0A0047',
        'A10': 'rgba(10,0,71, 0.1)',
        'A20': 'rgba(10,0,71, 0.2)',
        'A40': 'rgba(10,0,71, 0.4)',
        'A60': 'rgba(10,0,71, 0.6)',
        'A80': 'rgba(10,0,71, 0.8)',
        dark: '#06002B',
    },
    error: {
        main: '#FF3124',
        'A10': 'rgba(255,49,36, 0.1)',
        'A20': 'rgba(255,49,36, 0.2)',
        'A40': 'rgba(255,49,36, 0.4)',
        'A60': 'rgba(255,49,36, 0.6)',
        'A80': 'rgba(255,49,36, 0.8)',
        dark: '#E4180B',
    },
    eastBay: {
        main: '#635E79',
        dark: '#3E3758',
        light: '#635E79',
        contrastText: '#FFFFFF',
        'A10': 'rgba(99,94,121, 0.1)',
        'A20': 'rgba(99,94,121, 0.2)',
        'A40': 'rgba(99,94,121, 0.4)',
        'A60': 'rgba(99,94,121, 0.6)',
        'A80': 'rgba(99,94,121, 0.8)',

    },
};

export default muiLightTheme;