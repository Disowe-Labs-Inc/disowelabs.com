import "@/styles/globals.css";
import { LandingPageMetadata } from "@/data";
import { inter } from "@/styles/fonts";
import { Container, Navigation } from "@/components/common";

export const metadata = LandingPageMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} global-background-color`}>
        <Container>
          <Navigation />
          {children}
        </Container>
      </body>
    </html>
  );
}
