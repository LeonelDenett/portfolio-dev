import '../styles/globals.css'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/quicksand"
import CssBaseline from '@mui/material/CssBaseline';


// Theme
let theme = createTheme({
  typography: {
    fontFamily: [
      'quicksand'
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
