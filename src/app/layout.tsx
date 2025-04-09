import type { Metadata } from "next";
import "./globals.css";
import MenuProvider from "@/contexts/openMenuContext";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Workly",
  description: "",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <MenuProvider>
      <html lang="pt-br">
        <head>

        </head>
        <body>
          {children}
          <ToastContainer/>
          <Footer/>
        </body>
      </html>
    </MenuProvider>
  );
}
