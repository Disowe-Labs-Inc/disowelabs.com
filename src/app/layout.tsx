import "@/styles/globals.css";
import { landingPageMetadata } from "@/data/metadata";
import { inter } from "@/styles/fonts";

export const metadata = landingPageMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} global-background-color`}>
        {children}
      </body>
    </html>
  );
}
