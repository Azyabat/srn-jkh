import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features";
import StyledComponentsRegistry from "../../lib/registry";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Портал МОЙ ЖКХ | 2025",
  description: "Портал МОЙ ЖКХ г.о. Саранск",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
