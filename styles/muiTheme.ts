'use client';

import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';
import muiComponentTheme from './muiComponentTheme';
import muiLightTheme from './muiLightTheme';
import muiDarkTheme from './muiDarkTheme';
import modam from "./font/modam";


const palette: Record<'light' | 'dark', ThemeOptions['palette']> = {
    light: muiLightTheme,
    dark: muiDarkTheme,
};

const muiTheme = (mode: 'light' | 'dark', agent?: string) => {
    return responsiveFontSizes(createTheme({
        direction: 'rtl',

        palette: palette[mode],

        components: muiComponentTheme(agent),

        typography: {
            fontFamily: modam.style.fontFamily,

            xxs_regular: {
                fontSize: '0.5rem',
                fontWeight: '400',
                lineHeight: '1rem',
            },
            xxs_medium: {
                fontSize: '0.5rem',
                fontWeight: '500',
                lineHeight: '1rem',
            },
            xxs_bold: {
                fontSize: '0.5rem',
                fontWeight: '700',
                lineHeight: '1rem',
            },
            xxs_heavy: {
                fontSize: '0.5rem',
                fontWeight: '800',
                lineHeight: '1rem',
            },
            xxs_fat: {
                fontSize: '0.5rem',
                fontWeight: '900',
                lineHeight: '1rem',
            },
            xss_regular: {
                fontSize: '0.625rem',
                fontWeight: '400',
                lineHeight: '1rem',
            },
            xss_medium: {
                fontSize: '0.625rem',
                fontWeight: '500',
                lineHeight: '1rem',
            },
            xss_bold: {
                fontSize: '0.625rem',
                fontWeight: '700',
                lineHeight: '1rem',
            },
            xss_heavy: {
                fontSize: '0.625rem',
                fontWeight: '800',
                lineHeight: '1rem',
            },
            xss_fat: {
                fontSize: '0.625rem',
                fontWeight: '900',
                lineHeight: '1rem',
            },

            xs_regular: {
                fontSize: '0.75rem',
                fontWeight: '400',
                lineHeight: '1rem',
            },
            xs_medium: {
                fontSize: '0.75rem',
                fontWeight: '500',
                lineHeight: '1rem',
            },
            xs_bold: {
                fontSize: '0.75rem',
                fontWeight: '700',
                lineHeight: '1rem',
            },
            xs_heavy: {
                fontSize: '0.75rem',
                fontWeight: '800',
                lineHeight: '1rem',
            },
            xs_fat: {
                fontSize: '0.75rem',
                fontWeight: '900',
                lineHeight: '1rem',
            },

            sm_regular: {
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '1.25rem',
            },
            sm_medium: {
                fontSize: '0.875rem',
                fontWeight: '500',
                lineHeight: '1.25rem',
            },
            sm_bold: {
                fontSize: '0.875rem',
                fontWeight: '700',
                lineHeight: '1.25rem',
            },
            sm_heavy: {
                fontSize: '0.875rem',
                fontWeight: '800',
                lineHeight: '1.25rem',
            },
            sm_fat: {
                fontSize: '0.875rem',
                fontWeight: '900',
                lineHeight: '1.25rem',
            },

            base_regular: {
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.5rem',
            },
            base_medium: {
                fontSize: '1rem',
                fontWeight: '500',
                lineHeight: '1.5rem',
            },
            base_bold: {
                fontSize: '1rem',
                fontWeight: '700',
                lineHeight: '1.5rem',
            },
            base_heavy: {
                fontSize: '1rem',
                fontWeight: '800',
                lineHeight: '1.5rem',
            },
            base_fat: {
                fontSize: '1rem',
                fontWeight: '900',
                lineHeight: '1.5rem',
            },

            lg_regular: {
                fontSize: '1.125rem',
                fontWeight: 'normal',
                lineHeight: '1.75rem',
            },
            lg_medium: {
                fontSize: '1.125rem',
                fontWeight: '500',
                lineHeight: '1.75rem',
            },
            lg_bold: {
                fontSize: '1.125rem',
                fontWeight: '700',
                lineHeight: '1.75rem',
            },
            lg_heavy: {
                fontSize: '1.125rem',
                fontWeight: '800',
                lineHeight: '1.75rem',
            },
            lg_fat: {
                fontSize: '1.125rem',
                fontWeight: '900',
                lineHeight: '1.75rem',
            },

            xl_regular: {
                fontSize: '1.25rem',
                fontWeight: '400',
                lineHeight: '1.75rem',
            },
            xl_medium: {
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '1.75rem',
            },
            xl_bold: {
                fontSize: '1.25rem',
                fontWeight: '700',
                lineHeight: '1.75rem',
            },
            xl_heavy: {
                fontSize: '1.25rem',
                fontWeight: '800',
                lineHeight: '1.75rem',
            },
            xl_fat: {
                fontSize: '1.25rem',
                fontWeight: '900',
                lineHeight: '1.75rem',
            },

            '2xl_regular': {
                fontSize: '1.5rem',
                fontWeight: '400',
                lineHeight: '2rem',
            },
            '2xl_medium': {
                fontSize: '1.5rem',
                fontWeight: '500',
                lineHeight: '2rem',
            },
            '2xl_bold': {
                fontSize: '1.5rem',
                fontWeight: '700',
                lineHeight: '2rem',
            },
            '2xl_heavy': {
                fontSize: '1.5rem',
                fontWeight: '800',
                lineHeight: '2rem',
            },
            '2xl_fat': {
                fontSize: '1.5rem',
                fontWeight: '900',
                lineHeight: '2rem',
            },

            '3xl_regular': {
                fontSize: '1.875rem',
                fontWeight: '400',
                lineHeight: '2.25rem',
            },
            '3xl_medium': {
                fontSize: '1.875rem',
                fontWeight: '500',
                lineHeight: '2.25rem',
            },
            '3xl_bold': {
                fontSize: '1.875rem',
                fontWeight: '700',
                lineHeight: '2.25rem',
            },
            '3xl_heavy': {
                fontSize: '1.875rem',
                fontWeight: '800',
                lineHeight: '2.25rem',
            },
            '3xl_fat': {
                fontSize: '1.875rem',
                fontWeight: '900',
                lineHeight: '2.25rem',
            },

            '4xl_regular': {
                fontSize: '2.25rem',
                fontWeight: '400',
                lineHeight: '2.5rem',
            },
            '4xl_medium': {
                fontSize: '2.25rem',
                fontWeight: '500',
                lineHeight: '2.5rem',
            },
            '4xl_bold': {
                fontSize: '2.25rem',
                fontWeight: '700',
                lineHeight: '2.5rem',
            },
            '4xl_heavy': {
                fontSize: '2.25rem',
                fontWeight: '800',
                lineHeight: '2.5rem',
            },
            '4xl_fat': {
                fontSize: '2.25rem',
                fontWeight: '900',
                lineHeight: '2.5rem',
            },

            '5xl_regular': {
                fontSize: '3rem',
                fontWeight: '400',
                lineHeight: '1',
            },
            '5xl_medium': {
                fontSize: '3rem',
                fontWeight: '500',
                lineHeight: '1',
            },
            '5xl_bold': {
                fontSize: '3rem',
                fontWeight: '700',
                lineHeight: '1',
            },
            '5xl_heavy': {
                fontSize: '3rem',
                fontWeight: '800',
                lineHeight: '1',
            },
            '5xl_fat': {
                fontSize: '3rem',
                fontWeight: '900',
                lineHeight: '1',
            },

            '6xl_regular': {
                fontSize: '3.75rem',
                fontWeight: '400',
                lineHeight: '1',
            },
            '6xl_medium': {
                fontSize: '3.75rem',
                fontWeight: '500',
                lineHeight: '1',
            },
            '6xl_bold': {
                fontSize: '3.75rem',
                fontWeight: '700',
                lineHeight: '1',
            },
            '6xl_heavy': {
                fontSize: '3.75rem',
                fontWeight: '800',
                lineHeight: '1',
            },
            '6xl_fat': {
                fontSize: '3.75rem',
                fontWeight: '900',
                lineHeight: '1',
            },

            '7xl_regular': {
                fontSize: '4.5rem',
                fontWeight: '400',
                lineHeight: '1',
            },
            '7xl_medium': {
                fontSize: '4.5rem',
                fontWeight: '500',
                lineHeight: '1',
            },
            '7xl_bold': {
                fontSize: '4.5rem',
                fontWeight: '700',
                lineHeight: '1',
            },
            '7xl_heavy': {
                fontSize: '4.5rem',
                fontWeight: '800',
                lineHeight: '1',
            },
            '7xl_fat': {
                fontSize: '4.5rem',
                fontWeight: '900',
                lineHeight: '1',
            },

            '8xl_regular': {
                fontSize: '6rem',
                fontWeight: '400',
                lineHeight: '1',
            },
            '8xl_medium': {
                fontSize: '6rem',
                fontWeight: '500',
                lineHeight: '1',
            },
            '8xl_bold': {
                fontSize: '6rem',
                fontWeight: '700',
                lineHeight: '1',
            },
            '8xl_heavy': {
                fontSize: '6rem',
                fontWeight: '800',
                lineHeight: '1',
            },
            '8xl_fat': {
                fontSize: '6rem',
                fontWeight: '900',
                lineHeight: '1',
            },

            '9xl_regular': {
                fontSize: '8rem',
                fontWeight: '400',
                lineHeight: '1',
            },
            '9xl_medium': {
                fontSize: '8rem',
                fontWeight: '500',
                lineHeight: '1',
            },
            '9xl_bold': {
                fontSize: '8rem',
                fontWeight: '700',
                lineHeight: '1',
            },
            '9xl_heavy': {
                fontSize: '8rem',
                fontWeight: '800',
                lineHeight: '1',
            },
            '9xl_fat': {
                fontSize: '8rem',
                fontWeight: '900',
                lineHeight: '1',
            },
        },
    }));
};

export default muiTheme;