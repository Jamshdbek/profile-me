import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Next.js Script
import "./globals.css";
import { Footer } from "@/app/components/footer";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamshid Portfolio",
  description: "Personal portfolio website of Jamshid Ibrokhimov",
  authors: [{ name: "Jamshidbek Ibrokhimov" }],
  keywords:
    "jamshid ibroximov ibro uz web developer frontend react developer jsx react developer ibro.uz ibro ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NPJYTM9SF8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NPJYTM9SF8', { page_path: window.location.pathname });
        `}
      </Script>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
