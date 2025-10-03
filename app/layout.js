import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prohesis - Prediction Market",
  description: "A sleek prediction market with a macOS-inspired silky UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900`}>
        <div className="min-h-screen flex flex-col backdrop-blur-2xl bg-white/70 shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
