import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import './dracula.css'

export const metadata: Metadata = {
  title: "Arianne",
  description: "Personal website of Arianne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Add Highlight.js core script */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
          strategy="beforeInteractive"
        />
        {/* Add language support for Go */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"
          strategy="beforeInteractive"
        />
        {/* Initialize Highlight.js */}
        <Script id="highlight-init" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', (event) => {
              hljs.highlightAll();
            });
          `}
        </Script>
      </body>
    </html>
  );
};
