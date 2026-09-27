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
      <body className="antialiased text-slate-800 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}