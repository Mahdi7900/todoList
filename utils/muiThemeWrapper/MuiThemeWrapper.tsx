'use client';

import muiTheme from "@/styles/muiTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import NextAppDirEmotionCacheProvider from '../emotionCache/EmotionCache';

export const MuiThemeWrapper = ({children, agent}: { children: React.ReactNode, agent?: string }) => {
    return (
        <NextAppDirEmotionCacheProvider options={{
            key: 'mui',
            stylisPlugins: [prefixer, rtlPlugin],
        }}>
            <ThemeProvider theme={muiTheme(agent)}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
};