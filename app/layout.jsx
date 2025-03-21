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
        {/* <h1 className="text-red-600 text-center">Root Layout starts here</h1> */}
        {children}
        {/* <h1 className="text-red-600 text-center">Root Layout ends here</h1> */}
      </body>
    </html>
  );
}
