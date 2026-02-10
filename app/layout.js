import './globals.css';

export const metadata = {
  title: 'Stax | Discipline over hype',
  description:
    'Track your $SKR consistency with milestone progress, streak rituals, and anti-speculative social mechanics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
