import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./header";
import { Toaster } from "@/components/ui/toaster";
import Theme2 from "./theme2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYPTECH-upload",
  description: "Organization collaboration service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ConvexClientProvider>
      <html lang="en">
        <body className={inter.className && "min-h-screen"}>


          <Toaster />
          <Header />
          {children}
          <Theme2 />
        </body>
      </html>
    </ConvexClientProvider>

  );
}