'use client';

import {useThemeStore} from './store';
import {ComponentProps, useRef} from 'react';
import {Theme} from '@mui/material/styles';
import {MuiThemeWrapper} from "@/utils/muiThemeWrapper/MuiThemeWrapper";

export type ThemeModeT = 'light' | 'dark';

type Props = Omit<ComponentProps<typeof MuiThemeWrapper>, 'theme'> & {
    theme: (themeMode: ThemeModeT) => Theme;
    defaultThemeMode: ThemeModeT;
}

const ThemeState = (props: Props) => {
    const initialized = useRef<boolean>(false);

    if (!initialized.current) {
        useThemeStore.setState({theme: props.defaultThemeMode});
        initialized.current = true;
    }

    return (
        <MuiThemeWrapper {...props} theme={props.theme(props.defaultThemeMode)}>
            {props.children}
        </MuiThemeWrapper>
    );
};

export default ThemeState;