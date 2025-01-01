import {ThemeOptions} from '@mui/material/styles';

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
        'A10': 'rgba(0,166,147, 10)',
        'A20': 'rgba(0,166,147, 20)',
        'A40': 'rgba(0,166,147, 40)',
        'A60': 'rgba(0,166,147, 60)',
        'A80': 'rgba(0,166,147, 80)',
        dark: '#038d7f',
    },
    secondary: {
        main: '#ffffff',
        'A10': 'rgba(255,255,255, 10)',
        'A20': 'rgba(255,255,255, 20)',
        'A40': 'rgba(255,255,255, 40)',
        'A60': 'rgba(255,255,255, 60)',
        'A80': 'rgba(255,255,255, 80)',
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
        main: '#ffffff',
        contrastText: '#FFFFFF',
        'A10': 'rgba(255,255,255, 10)',
        'A20': 'rgba(255,255,255, 20)',
        'A40': 'rgba(255,255,255, 40)',
        'A60': 'rgba(255,255,255, 60)',
        'A80': 'rgba(255,255,255, 80)',
    },

};

export default muiDarkTheme;