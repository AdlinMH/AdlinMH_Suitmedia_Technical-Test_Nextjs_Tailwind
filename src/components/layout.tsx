"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

import buttonTheme from '@/themes/button'

export function Layout({ children }: { children: React.ReactNode }) {
  const theme = {
    button: { ...buttonTheme },
  };

  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}

export default Layout;
