import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "realpo",
  description: "A simple blog starter",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          inter.variable
        )}
      >
        <QueryProvider>
          <AuthProvider>
            <ThemeContextProvider>
              <ThemeProvider>
              <Header />
                <main className="min-h-dvh container">{children}</main>
                <footer className="text-center py-4 mt-2 text-muted-foreground">
                  &copy;2024. All rights reserved
                </footer>
              </ThemeProvider>
            </ThemeContextProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
