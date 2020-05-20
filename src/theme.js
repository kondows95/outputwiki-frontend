import { createMuiTheme } from '@material-ui/core/styles';
import secondary from '@material-ui/core/colors/orange';
import primary from '@material-ui/core/colors/blueGrey';

//const theme = createMuiTheme();
export default createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1120, //changed 960 to 1120
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        useNextVariants: true,
        fontSize: 13,
        button: {
            textTransform: 'none',
        },
        fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    },
    palette: {
        //primary: primary,
        primary: { main: primary['900'] },
        secondary: secondary,
        //secondary: {main: secondary["500"]},
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
        },
        MuiCheckbox: {
            color: 'primary',
        },
        MuiRadio: {
            color: 'primary',
        },
        MuiSwitch: {
            color: 'primary',
        },
    },
});
