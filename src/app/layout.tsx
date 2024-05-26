import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { HeaderController } from "@/components/HeaderController";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "SkyFitnessPro",
  description: "fitness app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReduxProvider>
        <body className={roboto.className}>
          <HeaderController />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
