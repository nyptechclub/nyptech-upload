import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./header";
import Theme2 from "./theme2";
import { ModalProvider } from "./_components/modals/modal-provider";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "next-themes";

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
      <EdgeStoreProvider>

        <body className={inter.className}>

          <Toaster />
          <Header />
          <main className="bg-base-100 text-base-content min-h-screen">
          {children}

          </main>

          <Theme2 />
          <ModalProvider/>
        </body>
        </EdgeStoreProvider>

      </html>
    </ConvexClientProvider>

  );
}