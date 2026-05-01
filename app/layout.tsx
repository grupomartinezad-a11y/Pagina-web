import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://socialdigitalpro2024.com"),
  title: {
    default: "Social Digital Pro 2024",
    template: "%s · Social Digital Pro 2024",
  },
  description:
    "Social Digital Pro 2024 SAS - digital marketing agency specialised in PPC, social media marketing and content writing.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
