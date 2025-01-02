'use client';

import {Switch} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useThemeStore} from "@/theme";

const MaterialUISwitch = styled(Switch)(({theme}) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: theme.palette.common.white,
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: 'url(\'/svg/moon.svg\')',
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.A40 : theme.palette.secondary.A40,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main,
        width: 32,
        height: 32,
        '&:before': {
            content: '\'\'',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url(\'/svg/sun.svg\')',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.A40 : theme.palette.secondary.A40,
        borderRadius: 20 / 2,
    },
}));

export const ThemeChanger = () => {
    const {theme, toggleTheme} = useThemeStore();
    const isDark = theme === 'light';
    return (
        <MaterialUISwitch
            checked={isDark}
            onChange={() => toggleTheme()}
        />
    );
};
