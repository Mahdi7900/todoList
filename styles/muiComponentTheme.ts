'use client';

import {PaletteColor, Theme} from "@mui/material";
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
                contained: ({theme, ownerState}) => ({
                    '&:hover': {
                        backgroundColor: (theme.palette[ownerState.color || 'primary'] as PaletteColor).main,
                    },
                }),
                outlined: ({theme, ownerState}) => ({
                    border:
                        `2px solid ${ownerState.color === 'secondary'
                            ? theme.palette.secondary.A10
                            : (theme.palette[ownerState.color || 'primary'] as PaletteColor).A10}`,
                    '&:hover': {
                        border: `2px solid ${ownerState.color === 'secondary'
                            ? theme.palette.secondary.A20
                            : (theme.palette[ownerState.color || 'primary'] as PaletteColor).A20}`,
                    },
                }),
            },
            variants: [
                {
                    props: {variant: 'contained', color: 'success'},
                    style: ({theme}) => ({
                        color: theme.palette.common.white,
                    }),
                },
                {
                    props: {variant: 'contained', color: 'eastBay'},
                    style: ({theme}) => ({
                        color: theme.palette.common.white,
                    }),
                },
                {
                    props: {variant: 'fill', color: 'primary'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.primary.A10,
                        color: theme.palette.primary.main,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.primary.A20,
                        }
                    }),
                },
                {
                    props: {variant: 'fill', color: 'secondary'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.secondary.A10,
                        color: theme.palette.secondary.main,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.secondary.A20,
                        }
                    }),
                },
                {
                    props: {variant: 'fill', color: 'eastBay'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.eastBay.A10,
                        color: theme.palette.eastBay.main,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.eastBay.A20,
                        }
                    }),
                },
                {
                    props: {variant: 'fill', color: 'error'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.error.A10,
                        color: theme.palette.error.main,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.error.A20,
                        }
                    }),
                },
                {
                    props: {variant: 'fill', color: 'success'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.success.A10,
                        color: theme.palette.success.main,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.success.A20,
                        }
                    }),
                },
                {
                    props: {variant: 'fill', color: 'warning'},
                    style: ({theme}) => ({
                        border: 'unset',
                        backgroundColor: theme.palette.warning.A10,
                        color: theme.palette.warning.dark,
                        '&:hover': {
                            border: 'unset',
                            backgroundColor: theme.palette.warning.A20,
                        }
                    }),
                },
                {
                    props: {size: 'small'},
                    style: ({theme}) => ({
                        ...theme.typography.sm_medium,
                    }),
                },
                {
                    props: {size: 'medium'},
                    style: ({theme}) => ({
                        ...theme.typography.base_medium,
                    }),
                },
                {
                    props: {size: 'large'},
                    style: ({theme}) => ({
                        ...theme.typography.xl_medium,
                    }),
                },
            ],
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#0A00470D',
                    borderBottomWidth: '2px',
                    borderLeftWidth: '2px',
                    borderRadius: 150,
                }
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                listbox: {
                    maxHeight: '30vh',
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: ({theme}) => ({
                    backgroundColor: theme.palette.background.default,
                })
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: ({theme, ownerState}) => ({
                    '& .MuiOutlinedInput-notchedOutline legend': {
                        height: '18px',
                        visibility: 'visible',
                        maxWidth: '100%',
                    },
                    '& .MuiOutlinedInput-notchedOutline legend span': {
                        opacity: 1,
                        color: (theme.palette[ownerState.color || 'primary'] as PaletteColor).main,
                    }
                }),
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    direction: 'ltr',
                },
            },
        },
    }
};

export default muiComponentTheme;