import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/provider/theme-provider";
import Footer from "@/components/footer";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PerceptAI",
  description:
    "PerceptAI is a vision intelligence platform that helps teams build, test, and deploy object recognition models for images and video in minutes — without complex training pipelines or heavy setup.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manRope.variable} ${raleway.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
          attribute={"class"}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
