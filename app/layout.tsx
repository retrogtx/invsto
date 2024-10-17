import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Pricing Component",
  description: "Frontend Mentor challenge solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
