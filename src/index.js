import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    colors: {
        brand: {
            100: '#25262e',
            200: '#3b3c47',
            300: '#1b1c21',
            400: '#81e6d9'
        },
        hover: {
            100: 'rgba(20, 87, 110, 0.5)'
        }
    },
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
