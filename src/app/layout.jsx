import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { Root } from "./root";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tinnitus Support",
  description:
    "This tinnitus counseling tool offers evidence-based recommendations for providers managing tinnitus patients. It helps assess tinnitus impact, provide coping strategies, and offer counseling materials to improve emotional health and quality of life. A resource from leading researchers and educators, it's a work in progress, not a one-size-fits-all solution, but a helpful guide for developing treatment protocols.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Root>{children}</Root>
        </AuthProvider>
      </body>
    </html>
  );
}
