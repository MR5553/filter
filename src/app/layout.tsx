import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filter",
  description: "Product filter system where you can filter product",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "logo.svg",
        href: "logo.svg"
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "logo-dark.svg",
        href: "logo-dark.svg"
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-stone-100 text-stone-950">
        {children}
      </body>
    </html>
  );
}
