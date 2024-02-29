import "../styles/globals.css";

import type { Metadata } from "next";
import { Layout } from "@/components";
import { myFont } from '@/styles/local-font'

export const metadata: Metadata = {
  title: "NextJS Tailwi nd Course Landing Page",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>

      <body className={myFont.className}>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
