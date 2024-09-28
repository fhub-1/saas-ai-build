"use client";

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { Toaster } from "./ui/sonner";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider      
    enableSystem
    attribute='class'
    defaultTheme='system'
    disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </NextThemeProvider>
  );
}


function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
     />
  )
}