import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Alsa Nudin - Full-Stack Developer & IT Professional",
    description: "Portfolio of Alsa Nudin, a full-stack developer and IT professional creating practical web, IoT and software solutions in Johor, Malaysia.",
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
    },
    openGraph: {
      title: "Alsa Nudin - Full-Stack Developer & IT Professional",
      description: "Selected projects, experience, achievements and contact details for Alsa Nudin.",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "Alsa Nudin - Full-Stack Developer and IT Professional" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Alsa Nudin - Full-Stack Developer & IT Professional",
      description: "Selected projects, experience, achievements and contact details for Alsa Nudin.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
