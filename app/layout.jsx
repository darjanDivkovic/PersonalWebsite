import ReactLenis from 'lenis/react'
import localFont from 'next/font/local';

import './globals.css'

const RALEWAY_REGULAR_FONT = localFont({
    src: "./assets/fonts/Raleway-Regular.woff2",
    weight: "400",
    variable: "--font-raleway",
})

const SK_MODERNIST_BOLD_FONT = localFont({
    src: "./assets/fonts/Sk-Modernist-Bold.woff2",
    weight: "400",
    variable: "--font-modernist",
})

const PACIFICO_FONT = localFont({
  src: "./assets/fonts/Pacifico-Regular.woff2",
  weight: "400",
  variable: "--font-pacifico"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Darjan Developer</title>
      </head>
      <body className={`${RALEWAY_REGULAR_FONT.variable} ${SK_MODERNIST_BOLD_FONT.variable} ${PACIFICO_FONT.variable}`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}