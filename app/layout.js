import './globals.css';
import { Manrope, Syne } from 'next/font/google';

const titleFont = Syne({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['700', '800'],
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Stax | Seeker Dapp Store Coming Soon',
  description: 'Stax is coming soon to Seeker Dapp Store.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
