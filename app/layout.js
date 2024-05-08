import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Application",
  description: "Weather check application with next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-300 h-screen w-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
