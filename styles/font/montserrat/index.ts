import localFont from 'next/font/local';

const montserrat = localFont({
    src: [
        {
            path: './Montserrat-VariableFont_wght.ttf',
            style: 'normal',
        },
    ],
    display: 'swap',
});

export default montserrat;
