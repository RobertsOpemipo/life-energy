import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'LifeEnergy — Installation And Maintenance Of Solar Panels',
  description: 'Clean and renewable power installation systems.',
  icons: {
    icon: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=64&h=64&fit=crop',
  },
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