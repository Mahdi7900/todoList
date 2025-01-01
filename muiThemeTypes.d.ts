import type {CSSProperties} from 'react';

declare module '@mui/material/styles' {
    interface Palette {
        eastBay: Palette['primary'];
    }

    interface PaletteOptions {
        eastBay: PaletteOptions['primary'];
    }

    interface PaletteColor {
        A10?: string;
        A20?: string;
        A40?: string;
        A60?: string;
        A80?: string;
    }

    interface SimplePaletteColorOptions {
        A10?: string;
        A20?: string;
        A40?: string;
        A60?: string;
        A80?: string;
    }

    interface TypographyVariants {
        xxs_regular: CSSProperties;
        xxs_medium: CSSProperties;
        xxs_bold: CSSProperties;
        xxs_heavy: CSSProperties;
        xxs_fat: CSSProperties;

        xss_regular: CSSProperties;
        xss_medium: CSSProperties;
        xss_bold: CSSProperties;
        xss_heavy: CSSProperties;
        xss_fat: CSSProperties;

        xs_regular: CSSProperties;
        xs_medium: CSSProperties;
        xs_bold: CSSProperties;
        xs_heavy: CSSProperties;
        xs_fat: CSSProperties;

        sm_regular: CSSProperties;
        sm_medium: CSSProperties;
        sm_bold: CSSProperties;
        sm_heavy: CSSProperties;
        sm_fat: CSSProperties;

        base_regular: CSSProperties;
        base_medium: CSSProperties;
        base_bold: CSSProperties;
        base_heavy: CSSProperties;
        base_fat: CSSProperties;

        lg_regular: CSSProperties;
        lg_medium: CSSProperties;
        lg_bold: CSSProperties;
        lg_heavy: CSSProperties;
        lg_fat: CSSProperties;

        xl_regular: CSSProperties;
        xl_medium: CSSProperties;
        xl_bold: CSSProperties;
        xl_heavy: CSSProperties;
        xl_fat: CSSProperties;

        '2xl_regular': CSSProperties;
        '2xl_medium': CSSProperties;
        '2xl_bold': CSSProperties;
        '2xl_heavy': CSSProperties;
        '2xl_fat': CSSProperties;

        '3xl_regular': CSSProperties;
        '3xl_medium': CSSProperties;
        '3xl_bold': CSSProperties;
        '3xl_heavy': CSSProperties;
        '3xl_fat': CSSProperties;

        '4xl_regular': CSSProperties;
        '4xl_medium': CSSProperties;
        '4xl_bold': CSSProperties;
        '4xl_heavy': CSSProperties;
        '4xl_fat': CSSProperties;

        '5xl_regular': CSSProperties;
        '5xl_medium': CSSProperties;
        '5xl_bold': CSSProperties;
        '5xl_heavy': CSSProperties;
        '5xl_fat': CSSProperties;

        '6xl_regular': CSSProperties;
        '6xl_medium': CSSProperties;
        '6xl_bold': CSSProperties;
        '6xl_heavy': CSSProperties;
        '6xl_fat': CSSProperties;

        '7xl_regular': CSSProperties;
        '7xl_medium': CSSProperties;
        '7xl_bold': CSSProperties;
        '7xl_heavy': CSSProperties;
        '7xl_fat': CSSProperties;

        '8xl_regular': CSSProperties;
        '8xl_medium': CSSProperties;
        '8xl_bold': CSSProperties;
        '8xl_heavy': CSSProperties;
        '8xl_fat': CSSProperties;

        '9xl_regular': CSSProperties;
        '9xl_medium': CSSProperties;
        '9xl_bold': CSSProperties;
        '9xl_heavy': CSSProperties;
        '9xl_fat': CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {


        xxs_regular: CSSProperties;
        xxs_medium: CSSProperties;
        xxs_bold: CSSProperties;
        xxs_heavy: CSSProperties;
        xxs_fat: CSSProperties;

        xss_regular: CSSProperties;
        xss_medium: CSSProperties;
        xss_bold: CSSProperties;
        xss_heavy: CSSProperties;
        xss_fat: CSSProperties;

        xs_regular?: CSSProperties;
        xs_medium?: CSSProperties;
        xs_bold?: CSSProperties;
        xs_heavy?: CSSProperties;
        xs_fat?: CSSProperties;

        sm_regular?: CSSProperties;
        sm_medium?: CSSProperties;
        sm_bold?: CSSProperties;
        sm_heavy?: CSSProperties;
        sm_fat?: CSSProperties;

        base_regular?: CSSProperties;
        base_medium?: CSSProperties;
        base_bold?: CSSProperties;
        base_heavy?: CSSProperties;
        base_fat?: CSSProperties;

        lg_regular?: CSSProperties;
        lg_medium?: CSSProperties;
        lg_bold?: CSSProperties;
        lg_heavy?: CSSProperties;
        lg_fat?: CSSProperties;

        xl_regular?: CSSProperties;
        xl_medium?: CSSProperties;
        xl_bold?: CSSProperties;
        xl_heavy?: CSSProperties;
        xl_fat?: CSSProperties;

        '2xl_regular'?: CSSProperties;
        '2xl_medium'?: CSSProperties;
        '2xl_bold'?: CSSProperties;
        '2xl_heavy'?: CSSProperties;
        '2xl_fat'?: CSSProperties;

        '3xl_regular'?: CSSProperties;
        '3xl_medium'?: CSSProperties;
        '3xl_bold'?: CSSProperties;
        '3xl_heavy'?: CSSProperties;
        '3xl_fat'?: CSSProperties;

        '4xl_regular'?: CSSProperties;
        '4xl_medium'?: CSSProperties;
        '4xl_bold'?: CSSProperties;
        '4xl_heavy'?: CSSProperties;
        '4xl_fat'?: CSSProperties;

        '5xl_regular'?: CSSProperties;
        '5xl_medium'?: CSSProperties;
        '5xl_bold'?: CSSProperties;
        '5xl_heavy'?: CSSProperties;
        '5xl_fat'?: CSSProperties;

        '6xl_regular'?: CSSProperties;
        '6xl_medium'?: CSSProperties;
        '6xl_bold'?: CSSProperties;
        '6xl_heavy'?: CSSProperties;
        '6xl_fat'?: CSSProperties;

        '7xl_regular'?: CSSProperties;
        '7xl_medium'?: CSSProperties;
        '7xl_bold'?: CSSProperties;
        '7xl_heavy'?: CSSProperties;
        '7xl_fat'?: CSSProperties;

        '8xl_regular'?: CSSProperties;
        '8xl_medium'?: CSSProperties;
        '8xl_bold'?: CSSProperties;
        '8xl_heavy'?: CSSProperties;
        '8xl_fat'?: CSSProperties;

        '9xl_regular'?: CSSProperties;
        '9xl_medium'?: CSSProperties;
        '9xl_bold'?: CSSProperties;
        '9xl_heavy'?: CSSProperties;
        '9xl_fat'?: CSSProperties;
    }

}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        eastBay: true;
        inherit: false;
        default: false;
    }
}

// Update the Button's color options to include a third option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        eastBay: true;
        inherit: false;
    }

    interface ButtonPropsVariantOverrides {
        shadow: true;
        fill: true;
    }
}
declare module '@mui/material/InputBase' {
    interface InputBasePropsSizeOverrides {
        large: true;
    }
}
declare module '@mui/material/InputLabel' {
    interface InputLabelPropsSizeOverrides {
        large: true;
        medium: true;
        normal: false;
    }
}
declare module '@mui/material/TextField' {
    interface TextFieldPropsSizeOverrides {
        large: true;
    }

    interface TextFieldPropsColorOverrides {
        eastBay: true;
    }
}


// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: true;
        h5: true;
        h6: true;
        body1: true;
        body2: true;
        subtitle1: true;
        subtitle2: true;
        button: true;
        caption: true;
        overline: true;

        xxs_regular: true;
        xxs_medium: true;
        xxs_bold: true;
        xxs_heavy: true;
        xxs_fat: true;

        xss_regular: true;
        xss_medium: true;
        xss_bold: true;
        xss_heavy: true;
        xss_fat: true;

        xs_regular: true;
        xs_medium: true;
        xs_bold: true;
        xs_heavy: true;
        xs_fat: true;

        sm_regular: true;
        sm_medium: true;
        sm_bold: true;
        sm_heavy: true;
        sm_fat: true;

        base_regular: true;
        base_medium: true;
        base_bold: true;
        base_heavy: true;
        base_fat: true;

        lg_regular: true;
        lg_medium: true;
        lg_bold: true;
        lg_heavy: true;
        lg_fat: true;

        xl_regular: true;
        xl_medium: true;
        xl_bold: true;
        xl_heavy: true;
        xl_fat: true;

        '2xl_regular': true;
        '2xl_medium': true;
        '2xl_bold': true;
        '2xl_heavy': true;
        '2xl_fat': true;

        '3xl_regular': true;
        '3xl_medium': true;
        '3xl_bold': true;
        '3xl_heavy': true;
        '3xl_fat': true;

        '4xl_regular': true;
        '4xl_medium': true;
        '4xl_bold': true;
        '4xl_heavy': true;
        '4xl_fat': true;

        '5xl_regular': true;
        '5xl_medium': true;
        '5xl_bold': true;
        '5xl_heavy': true;
        '5xl_fat': true;

        '6xl_regular': true;
        '6xl_medium': true;
        '6xl_bold': true;
        '6xl_heavy': true;
        '6xl_fat': true;

        '7xl_regular': true;
        '7xl_medium': true;
        '7xl_bold': true;
        '7xl_heavy': true;
        '7xl_fat': true;

        '8xl_regular': true;
        '8xl_medium': true;
        '8xl_bold': true;
        '8xl_heavy': true;
        '8xl_fat': true;

        '9xl_regular': true;
        '9xl_medium': true;
        '9xl_bold': true;
        '9xl_heavy': true;
        '9xl_fat': true;
    }
}
