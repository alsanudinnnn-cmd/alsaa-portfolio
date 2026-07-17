import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renielyn Lenon — Freelance Web Developer",
  description: "Portfolio of Renielyn Lenon, a freelance Laravel and WordPress developer creating thoughtful, dependable digital products.",
  openGraph: { title: "Renielyn Lenon — Freelance Web Developer", description: "Selected work, experience and contact details for Renielyn Lenon.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
