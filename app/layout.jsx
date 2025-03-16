import { Montserrat, Macondo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const macondo = Macondo({
  variable: "--font-macondo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Next.js",
  description: "Learn Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${macondo.variable}`}>
        {children}
      </body>
    </html>
  );
}
