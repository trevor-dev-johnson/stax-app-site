import "./globals.css";
import { Manrope, Syne } from "next/font/google";

const titleFont = Syne({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["700", "800"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Stax — Build Your Stax | Non-Custodial Seeker Dapp",
  description:
    "Stax is a non-custodial Seeker dapp that helps you build the habit of saving crypto. Read-only by design. No charts, no transaction signing, no speculation.",
  icons: {
    icon: "/staxLogo.png",
    shortcut: "/staxLogo.png",
    apple: "/staxLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
