'use client'
import { ReactNode } from 'react';
import theme from '@/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import GlobalStylesDefinition from "@/theme/GlobalStylesDefinition";

export default function ThemeRegistry({ children }: { children: ReactNode | ReactNode[] }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStylesDefinition />
            {children}
        </ThemeProvider>
    )
}
