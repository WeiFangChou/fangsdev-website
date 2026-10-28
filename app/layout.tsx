import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fangs.dev"),
  title: {
    default: "Fangs Dev LLC — Websites & Apps Built to Last",
    template: "%s — Fangs Dev LLC",
  },
  description:
    "Fangs Dev LLC is an independent software studio creating reliable websites and apps through thoughtful product strategy, precise design, and disciplined engineering.",
  applicationName: "Fangs Dev",
  keywords: [
    "Fangs Dev",
    "website development",
    "app development",
    "web development United States",
    "software studio",
  ],
  authors: [{ name: "Fangs Dev LLC", url: "https://fangs.dev" }],
  creator: "Fangs Dev LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fangs.dev",
    siteName: "Fangs Dev",
    title: "Fangs Dev LLC — Websites & Apps Built to Last",
    description:
      "Thoughtful design. Disciplined engineering. Websites and apps built for ambitious businesses.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
