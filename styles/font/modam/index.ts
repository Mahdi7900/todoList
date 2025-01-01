import localFont from 'next/font/local';

const modam = localFont({
    src: [
        {
            path: './ModamFaNum-SemiBold.ttf',
            weight:'700',
            style: 'normal',
        },
        {
            path: './ModamFaNum-Bold.ttf',
            weight:'800',
            style: 'normal',
        },
        {
            path: './ModamFaNum-ExtraBold.ttf',
            weight:'900',
            style: 'normal',
        },
        {
            path: './ModamFaNum-Medium.ttf',
            weight:'500',
            style: 'normal',
        },
        {
            path: './ModamFaNum-Regular.ttf',
            weight:'400',
            style: 'normal',
        },
    ],
    display: 'swap',
});

export default modam;
