'use client';

import { Theme } from '@mui/material/styles';
import parser from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';

const muiComponentTheme = (agent?: string): Theme['components'] => {
    const deviceType = parser(agent).device.type || 'desktop';
    const ssrMatchMedia = (query: string) => ({
        matches: mediaQuery.match(query, {
            // The estimated CSS width of the browser.
            width: deviceType === 'mobile' ? '0px' : '1024px',
        }),
    });

    return {
        MuiUseMediaQuery: {
            defaultProps: {
                ssrMatchMedia,
            },
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.16)',
                    backdropFilter: 'blur(2px)',
                },
                paper: ({ theme }) => ({
                    borderRadius: '16px',
                    boxShadow: 'none',
                    borderColor: theme.palette.secondary.A10,
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'unset',
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: 'primary.main',
                },
                track: {
                    border: 'none',
                },
                thumb: ({ theme }) => ({
                    height: 15,
                    width: 15,
                    backgroundColor: theme.palette.common.white,
                    border: '2px solid currentColor',
                }),
                valueLabel: ({ theme }) => ({
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.common.white,
                    borderRadius: '25px',
                }),
                rail: ({ theme }) => ({
                    opacity: 0.1,
                    backgroundColor: theme.palette.secondary.main,
                }),
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'medium',
                variant: 'filled',
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    marginBottom: '.5rem',
                    '& .MuiInputLabel-root': {
                        color: theme.palette.eastBay.A60,
                    },
                }),
            },
            variants: [
                {
                    props: { variant: 'standard' },
                    style: {
                        '&:has(.MuiInputLabel-root)': {
                            marginTop: '0.5rem',
                        },
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: ({ theme }) => ({
                        '& .MuiInputLabel-shrink:not(.Mui-disabled)': {
                            color: `${theme.palette.primary.main} !important`,
                        },
                    }),
                },
                {
                    props: { variant: 'filled' },
                    style: ({ theme }) => ({
                        '&:has(.MuiInputLabel-root)': {
                            marginTop: '1.8rem',
                        },
                        '& .MuiInputLabel-shrink': {
                            transform: 'translate(10px, -30px) scale(0.85) !important',
                        },
                        '& .Mui-focused:not(.Mui-error)': {
                            color: `${theme.palette.secondary.main} !important`,
                        },
                    }),
                },
            ],
        },
        MuiInputLabel: {
            styleOverrides: {
                shrink: ({ theme: { typography } }) => ({
                    fontWeight: typography.lg_medium.fontWeight,
                }),
            },
            variants: [
                {
                    props: { size: 'large' },
                    style: ({ theme: { typography } }) => ({
                        '&:not(.MuiInputLabel-shrink)': {
                            ...typography.lg_medium,
                            transform: 'translate(25px, 20px) scale(1)',
                        },
                    }),
                },
                {
                    props: { size: 'medium' },
                    style: ({ theme: { typography } }) => ({
                        '&:not(.MuiInputLabel-shrink)': {
                            ...typography.base_medium,
                            transform: 'translate(25px, 18px) scale(1)',
                        },
                    }),
                },
                {
                    props: { size: 'small' },
                    style: ({ theme: { typography } }) => ({
                        '&:not(.MuiInputLabel-shrink)': {
                            ...typography.sm_medium,
                            transform: 'translate(16px, 10px) scale(1)',
                        },
                    }),
                },
                {
                    props: { size: 'small', variant: 'filled' },
                    style: {
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(10px, -23px) scale(0.85) !important',
                        },
                    },
                },
                {
                    props: { variant: 'standard' },
                    style: {
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(10px, -10px) scale(0.85) !important',
                        },
                    },
                },
            ],
        },
        MuiInputBase: {
            variants: [
                {
                    props: { size: 'large' },
                    style: ({ theme }) => ({
                        '& input': {
                            ...theme.typography.lg_medium,
                            padding: '20px 25px',
                        },
                    }),
                },
                {
                    props: { size: 'medium' },
                    style: ({ theme }) => ({
                        '& input': {
                            ...theme.typography.base_medium,
                            padding: '18px 25px',
                        },
                    }),
                },
                {
                    props: { size: 'small' },
                    style: ({ theme }) => ({
                        '& input': {
                            ...theme.typography.sm_medium,
                            padding: '10px 15px',
                        },
                    }),
                },
            ],
        },
        MuiInput: {
            styleOverrides: {
                root: () => ({
                    marginTop: '0px !important',
                }),
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': {
                        paddingTop: '14px',
                    },
                },
            },
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
            },
            styleOverrides: {
                root: ({ theme: { palette }, ownerState }) => ({
                    backgroundColor: palette.eastBay.A10,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderStyle: 'solid',

                    ...(ownerState.error
                        ? {
                            borderColor: palette.error.main,
                        }
                        : {
                            '&.Mui-focused': {
                                borderColor: palette[ownerState.color || 'primary'].main,
                            },
                        }),
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.secondary.main
                            : theme.palette.secondary.A80,
                    borderRadius: 10,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid  ${theme.palette.eastBay.A40}`,
                    },
                }),
                notchedOutline: ({ theme, ownerState }) => ({
                    borderWidth: 1,
                    borderColor: theme.palette.eastBay.A20,
                    ...(ownerState.disabled && {
                        borderColor: `${theme.palette.eastBay.A20} !important`,
                    }),
                }),
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: ({ theme: { palette, typography }, ownerState }) => ({
                    // backgroundColor: palette.eastBay.A10,
                    ...(ownerState.error && {
                        marginLeft: '0',
                        position: 'absolute',
                        top: '2.5rem',
                        left: '1rem',
                        width: 'max-content',
                        backgroundColor: palette.error.A10,
                        backdropFilter: 'blur(5px)',
                        border: `1px solid ${palette.error.A10}`,
                        borderRadius: '.5rem',
                        padding: '2px 15px',
                        fontSize: typography.xs_bold.fontSize,
                        fontWeight: typography.xs_bold.fontWeight,
                    }),
                }),
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiCheckbox-root.Mui-checked + .MuiTypography-root': {
                        color: theme.palette.primary.main,
                    },
                    '& .MuiCheckbox-root + .MuiTypography-root': {
                        color: theme.palette.secondary.main,
                        ...theme.typography.base_medium,
                    },
                }),
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: ({ theme }) => ({ color: theme.palette.secondary.A20 }),
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    padding: '10px 20px',
                    borderRadius: '14px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                contained: ({ theme, ownerState }) => ({
                    '&:hover': {
                        backgroundColor: theme.palette[ownerState.color || 'primary'].dark,
                    },
                }),
                outlined: ({ theme, ownerState }) => ({
                    border: `2px solid ${
                        ownerState.color === 'secondary'
                            ? theme.palette.secondary.A10
                            : theme.palette[ownerState.color || 'primary'].main
                    }`,
                    '&:hover': {
                        border: `2px solid ${
                            ownerState.color === 'secondary'
                                ? theme.palette.secondary.A20
                                : theme.palette[ownerState.color || 'primary'].main
                        }`,
                    },
                }),
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: ({ theme }) => ({
                        ...theme.typography.sm_medium,
                    }),
                },
                {
                    props: { size: 'medium' },
                    style: ({ theme }) => ({
                        ...theme.typography.base_medium,
                    }),
                },
                {
                    props: { size: 'large' },
                    style: ({ theme }) => ({
                        ...theme.typography.xl_medium,
                    }),
                },
            ],
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                label: ({ theme }) => ({
                    ...theme.typography.xs_bold,
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }),
                outlined: ({ theme }) => ({
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.A20,
                    '&:hover': {
                        border: `1px solid ${theme.palette.secondary.A40}`,
                    },
                }),
                filled: ({ theme }) => ({
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`,
                    '&:hover': {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.primary.dark,
                    },
                }),
            },
        },
        MuiStepConnector: {
            styleOverrides: {
                line: ({ theme }) => ({
                    borderColor: theme.palette.eastBay.A20,
                    borderLeftWidth: 2,
                    margin: 5,
                }),
            },
        },
        MuiDrawer: {
            styleOverrides: {
                modal: {
                    backdropFilter: 'blur(2px)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                },
                paper: {
                    boxShadow: 'none',
                },
            },
        },
        MuiDialog: {
            variants: [
                {
                    props: { fullScreen: false },
                    style: {
                        '& .MuiPaper-root': {
                            boxShadow: 'unset',
                            borderRadius: '1.25rem',
                            padding: '1rem',
                        },
                        '& .MuiBackdrop-root': {
                            backgroundColor: 'rgba(0, 0, 0, 0.16)',
                            backdropFilter: 'blur(2px)',
                        },
                    },
                },
            ],
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: '0',
                },
            },
        },
    };
};
export default muiComponentTheme;
