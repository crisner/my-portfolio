import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const poppins = Poppins({ weight: ['200', '400', '600'], subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Portfolio",
  description: "Renisha Christie's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
