// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider, useTheme, createTheme,} from '@nextui-org/react'
import '@/styles/globals.css'
import NavbarComponent from '@/components/Navbar'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  // 2. Use at the root of your app
  const theme = useTheme();
  const [IsDark, setIsDark] = useState(false);

  const lightTheme = createTheme({
    type: 'light',
    theme: {

    }
  })

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
    }
  })

  return (
    <NextUIProvider theme={IsDark ? darkTheme : lightTheme}>
      <NavbarComponent props={{ IsDark, setIsDark }}></NavbarComponent>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
