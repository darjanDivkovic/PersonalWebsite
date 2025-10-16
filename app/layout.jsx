import ReactLenis from "lenis/react";
import localFont from "next/font/local";
import "./globals.css";

const RALEWAY_REGULAR_FONT = localFont({
  src: "./assets/fonts/Raleway-Regular.woff2",
  weight: "400",
  variable: "--font-raleway",
});

const SK_MODERNIST_BOLD_FONT = localFont({
  src: "./assets/fonts/Sk-Modernist-Bold.woff2",
  weight: "400",
  variable: "--font-modernist",
});

const PACIFICO_FONT = localFont({
  src: "./assets/fonts/Pacifico-Regular.woff2",
  weight: "400",
  variable: "--font-pacifico",
});

export default function RootLayout({ children }) {
  // detect Safari
  const isSafari =
    typeof navigator !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <html lang="en">
      <head>
        <title>Darjan Developer</title>
      </head>
      <body
        className={`${RALEWAY_REGULAR_FONT.variable} ${SK_MODERNIST_BOLD_FONT.variable} ${PACIFICO_FONT.variable}`}
      >
        {isSafari ? (
          // Safari: use native smooth scrolling
          children
        ) : (
          // Other browsers: enable Lenis
          <ReactLenis root>{children}</ReactLenis>
        )}
      </body>
    </html>
  );
}
