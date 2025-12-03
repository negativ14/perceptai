import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/provider/theme-provider";
import CTA from "@/components/cta";
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
  title: "Dragoneye",
  description:
    "Dragoneye is a startup (backed by Y Combinator, Winter 2024 batch) that builds a computer-vision platform for image & live video (or video input) object detection and custom model creation — with minimal technical overhead.",
  icons: {
    icon: "/logo_img.png",
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
          <CTA />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
