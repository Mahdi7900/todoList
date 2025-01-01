import type {Config} from 'tailwindcss'

const colorAlpha = (hex: string, percent: '10' | '20' | '40' | '60' | '80') => {
    const opacityCodes = {
        '80': 'CC',
        '60': '99',
        '40': '66',
        '20': '33',
        '10': '1A',
    };
    return `${hex}${opacityCodes[percent]}`;
};


const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: ({colors}) => ({
                primary: {
                    DEFAULT: '#00A693',
                    dark: '#058073',
                    10: colorAlpha('#00A693', '10'),
                    20: colorAlpha('#00A693', '20'),
                    40: colorAlpha('#00A693', '40'),
                    60: colorAlpha('#00A693', '60'),
                    80: colorAlpha('#00A693', '80'),
                },
                secondary: {
                    DEFAULT: '#0A0047',
                    dark: '#06002B',
                    10: colorAlpha('#0A0047', '10'),
                    20: colorAlpha('#0A0047', '20'),
                    40: colorAlpha('#0A0047', '40'),
                    60: colorAlpha('#0A0047', '60'),
                    80: colorAlpha('#0A0047', '80'),
                },
                eastBay: {
                    DEFAULT: '#635E79',
                    dark: '#3E3758',
                    10: colorAlpha('#635E79', '10'),
                    20: colorAlpha('#635E79', '20'),
                    40: colorAlpha('#635E79', '40'),
                    60: colorAlpha('#635E79', '60'),
                    80: colorAlpha('#635E79', '80'),
                },
                error: {
                    DEFAULT: '#FF3124',
                    dark: '#E4180B',
                    10: colorAlpha('#FF3124', '10'),
                    20: colorAlpha('#FF3124', '20'),
                    40: colorAlpha('#FF3124', '40'),
                    60: colorAlpha('#FF3124', '60'),
                    80: colorAlpha('#FF3124', '80'),
                },
                warning: {
                    DEFAULT: '#FFD23F',
                    5: 'rgba(255, 210, 63, 0.05)',
                    10: 'rgba(255, 210, 63, 0.10)',
                    20: 'rgba(255, 210, 63, 0.20)',
                    30: 'rgba(255, 210, 63, 0.30)',
                    40: 'rgba(255, 210, 63, 0.40)',
                    50: 'rgba(255, 210, 63, 0.50)',
                    60: 'rgba(255, 210, 63, 0.60)',
                    70: 'rgba(255, 210, 63, 0.70)',
                    80: 'rgba(255, 210, 63, 0.80)',
                    90: 'rgba(255, 210, 63, 0.90)',
                },
                success: {
                    DEFAULT: '#24B26E',
                    5: 'rgba(36, 178, 110, 0.05)',
                    10: 'rgba(36, 178, 110, 0.10)',
                    20: 'rgba(36, 178, 110, 0.20)',
                    30: 'rgba(36, 178, 110, 0.30)',
                    40: 'rgba(36, 178, 110, 0.40)',
                    50: 'rgba(36, 178, 110, 0.50)',
                    60: 'rgba(36, 178, 110, 0.60)',
                    70: 'rgba(36, 178, 110, 0.70)',
                    80: 'rgba(36, 178, 110, 0.80)',
                    90: 'rgba(36, 178, 110, 0.90)',
                },
                paper: {
                    dark: '#04001F',
                    light: '#F1F4FD',
                },
                inherit: colors.inherit,
                current: colors.current,
                transparent: colors.transparent,
                slate: colors.slate,
                gray: colors.gray,
                zinc: colors.zinc,
                neutral: colors.neutral,
                stone: colors.stone,
                red: colors.red,
                orange: colors.orange,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,
            }
        ),
        screens: {
            'xxs': '320px',
            'xs': '375px',
            'sm': '425px',
            'md': '900px',
            'lg': '1200px',
            'xl': '1536px',
            '2xl': '1920px',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '2.75rem',
        },
        extend: {
            listStyleImage: {
                emptyCircle: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg clip-path=\'url(%23clip0_2537_6587)\'%3E%3Cpath d=\'M3.72935 8.60297C2.57209 8.33151 1.66849 7.42791 1.39703 6.27065C1.20099 5.43489 1.20099 4.56511 1.39703 3.72935C1.66849 2.57209 2.57209 1.66849 3.72935 1.39703C4.56511 1.20099 5.43489 1.20099 6.27065 1.39703C7.42791 1.66849 8.33151 2.57209 8.60297 3.72935C8.79901 4.56511 8.79901 5.43489 8.60297 6.27065C8.33151 7.42791 7.42792 8.33151 6.27066 8.60297C5.43489 8.79901 4.56511 8.79901 3.72935 8.60297Z\' stroke=\'%236475FF\' stroke-width=\'1.65815\'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=\'clip0_2537_6587\'%3E%3Crect width=\'10\' height=\'10\' fill=\'white\'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")',
            },
            boxShadow: {
                'custom': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }
        }
    },
    plugins: [],
}
export default config
