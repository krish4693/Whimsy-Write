import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "whimsyWrite",
  description: "Write what you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="title" content="whimsyWrite" />
        <meta name="description" content="Write what you want" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="whimsyWrite" />
        <meta property="og:description" content="Write what you want" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="enkejufyyteflgo2hlliq6roci.srv.us" />
        <meta property="twitter:url" content="https://enkejufyyteflgo2hlliq6roci.srv.us/" />
        <meta name="twitter:title" content="whimsyWrite" />
        <meta name="twitter:description" content="Write what you want" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/ffa0e03a-d1cd-467f-b5f9-4b1e01f080ff.jpg?token=WmesfXuqdaoPMHjb9ck6R8UidRUbQPOdE51AbS6yj1Y&height=799&width=1200&expires=33269895372" />

        <title>whimsyWrite</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
