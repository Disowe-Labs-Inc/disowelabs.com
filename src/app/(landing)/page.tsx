import {
  Hero,
  About,
  WhyAreYouStillWaiting,
  Services,
  ContactUs
}
  from "@/components/landing";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyAreYouStillWaiting />
      <Services />
      <ContactUs />
    </div>
  );
}
