import "@/styles/globals.css";
import { LandingPageMetadata } from "@/data";
import { inter } from "@/styles/fonts";
import { Container, Footer, Navigation } from "@/components/common";
import CombinedProviders from "@/context";

export const metadata = LandingPageMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} global-background-color`}>
        <CombinedProviders>
          <Container>
            <Navigation />
            {children}
            <Footer />
          </Container>
        </CombinedProviders>
      </body>
    </html>
  );
}
