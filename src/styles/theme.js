import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#90caf9' }, // Blue color
        secondary: { main: '#f48fb1' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#b0b0b0' },
    },
});