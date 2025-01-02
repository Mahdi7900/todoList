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
        'A10': 'rgba(0,166,147, 0.1)',
        'A20': 'rgba(0,166,147, 0.2)',
        'A40': 'rgba(0,166,147, 0.4)',
        'A60': 'rgba(0,166,147, 0.6)',
        'A80': 'rgba(0,166,147, 0.8)',
        dark: '#038d7f',
    },
    secondary: {
        main: '#ffffff',
        'A10': 'rgba(255,255,255, 0.1)',
        'A20': 'rgba(255,255,255, 0.2)',
        'A40': 'rgba(255,255,255, 0.4)',
        'A60': 'rgba(255,255,255, 0.6)',
        'A80': 'rgba(255,255,255, 0.8)',
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
        main: '#ffffff',
        contrastText: '#FFFFFF',
        'A10': 'rgba(255,255,255, 0.1)',
        'A20': 'rgba(255,255,255, 0.2)',
        'A40': 'rgba(255,255,255, 0.4)',
        'A60': 'rgba(255,255,255, 0.6)',
        'A80': 'rgba(255,255,255, 0.8)',
    },

};

export default muiDarkTheme;