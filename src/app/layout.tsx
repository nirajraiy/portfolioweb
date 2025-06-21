// import Footer from '@/components/constants/Footer';
// import './globals.css';
// import { ReactNode } from 'react';
// import Navbar from '@/components/constants/Navbar';
// // import Navbar from '@/components/constants/Navbar';

// export const metadata = {
//   title: 'Niraj | Portfolio',
//   description: 'Niraj Portfolio',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main>{children}</main>
//          <Footer />
//       </body>
//     </html>
//   );
// }
import { ReactNode } from 'react';
import Navbar from '@/components/constants/Navbar';
import Footer from '@/components/constants/Footer';
import './globals.css';

export const metadata = {
  title: 'Niraj | Portfolio',
  description: 'Niraj Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="app-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
