'use client';

import {CssBaseline, ThemeProvider} from "@mui/material";
import type {Theme} from '@mui/material/styles';
import React from "react";
import {prefixer} from 'stylis';
import NextAppDirEmotionCacheProvider from '../emotionCache/EmotionCache';

export const MuiThemeWrapper = ({children, theme}: { children: React.ReactNode, theme: Theme }) => {
    return (
        <NextAppDirEmotionCacheProvider options={{
            key: 'mui',
            stylisPlugins: [prefixer],
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
};