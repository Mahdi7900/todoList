'use client';

import {create} from 'zustand';
import {devtools} from 'zustand/middleware';


type ThemeMode = 'dark' | 'light';

interface ThemeStore {
    theme: ThemeMode;
    toggleTheme: (mode?: ThemeMode) => void;
}

export const setThemeInHtmlClass = (mode: ThemeMode): void => {
    if (typeof document === 'undefined') return;
    const bodyEl = document.querySelector('body');
    if (!bodyEl || !mode) return;
    bodyEl.classList[mode === 'dark' ? 'add' : 'remove']('dark');
};

export const useThemeStore = create<ThemeStore>()(
    devtools(
        (set) => ({
            theme: 'light',
            toggleTheme: (mode) => set((state) => {
                const theme = mode ?? state.theme === 'dark' ? 'light' : 'dark';
                return {theme};
            }),
        }),
        {name: 'themeStore'},
    ),
);
