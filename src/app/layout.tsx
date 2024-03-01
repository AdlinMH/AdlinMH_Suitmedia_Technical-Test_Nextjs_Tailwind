import "../styles/globals.css";

import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import { myFont } from '@/styles/local-font'

export const metadata: Metadata = {
  title: "NextJS Tailwind Course Landing Page",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>

      <body className={myFont.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
