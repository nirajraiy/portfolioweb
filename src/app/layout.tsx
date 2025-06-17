import Footer from '@/components/constants/Footer';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/constants/Navbar';

export const metadata = {
  title: 'Niraj | Portfolio',
  description: 'FAANG-level Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
         <Footer />
      </body>
    </html>
  );
}