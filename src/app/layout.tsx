import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'LifeEnergy',
  description: 'Installation and maintenance of solar panels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Force Vercel edge to serve the SVG & PNG with cache buster */}
        <link rel="icon" href="/logo.svg?v=4" type="image/svg+xml" />
        <link rel="alternate icon" href="/logo.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png?v=4" />
      </head>
      <body className="antialiased text-slate-800 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}