import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Providers } from './providers';
import dynamic from 'next/dynamic';

// Import LevelNavigator with client-side only rendering
const LevelNavigator = dynamic(() => import('./components/LevelNavigator'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Project Control",
  description: "A cyberpunk hacking game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased overflow-hidden m-0 p-0"
      >
        <Providers>
              {children}
          {/* Level navigation for easy access */}
          <LevelNavigator />
        </Providers>
      </body>
    </html>
  );
}
