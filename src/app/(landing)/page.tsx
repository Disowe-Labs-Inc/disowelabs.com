import {
  Hero,
  About,
  WhyAreYouStillWaiting,
  ContactUs
} from "@/components/landing";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyAreYouStillWaiting />
      <ContactUs />
    </div>
  );
}
