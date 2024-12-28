import { InfoCard001, InfoCard002 } from "@/components/common";

const About = () => {
  return (
    <div>
      {/* For MD and larger screens - Grid Layout */}
      <div className="hidden md:grid h-full w-full gap-4 grid-cols-8 grid-rows-4">
        <InfoCard001
          className="col-span-3 row-span-2"
          heading="What we can offer you."
          para="We deliver tailored solutions in software development, digital marketing, and cloud services to help your business thrive and innovate."
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Software Development"
          para="We create innovative web, mobile, and AI-driven solutions. We deliver seamless, user-friendly software tailored to your business needs, helping you stand out in the digital world."
          imgUrl="/images/disowelabs-img-001.png"
          infoHeading="Web, Mobile App | AI"
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Digital Marketing & Designing"
          para="We elevate your brand with expert social media marketing, creative brand design, and intuitive UX design. We craft strategies and designs that connect, engage, and inspire."
          imgUrl="/images/disowelabs-img-002.png"
          infoHeading="Social Media Marketing | Brand Designing | UX Designing "
        />
        <InfoCard002
          className="col-span-3 row-span-2"
          bgColor="white"
          heading="Cloud Solutions"
          para="We simplify cloud migrations, ensuring secure, efficient transitions. We help your business leverage the cloud for scalability and innovation."
          imgUrl="/images/disowelabs-img-003.png"
          infoHeading="Cloud migrations"
        />
      </div>

      {/* For smaller screens - Column Layout */}
      <div className="md:hidden flex flex-col space-y-4 w-full p-4">
        <InfoCard001
          className="w-full"
          heading="What we can offer you."
          para="We deliver tailored solutions in software development, digital marketing, and cloud services to help your business thrive and innovate."
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Software Development"
          para="We create innovative web, mobile, and AI-driven solutions. We deliver seamless, user-friendly software tailored to your business needs, helping you stand out in the digital world."
          imgUrl="/images/disowelabs-img-001.png"
          infoHeading="Web, Mobile App | AI"
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Digital Marketing & Designing"
          para="We elevate your brand with expert social media marketing, creative brand design, and intuitive UX design. We craft strategies and designs that connect, engage, and inspire."
          imgUrl="/images/disowelabs-img-002.png"
          infoHeading="Social Media Marketing | Brand Designing | UX Designing "
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Cloud Solutions"
          para="We simplify cloud migrations, ensuring secure, efficient transitions. We help your business leverage the cloud for scalability and innovation."
          imgUrl="/images/disowelabs-img-003.png"
          infoHeading="Cloud migrations"
        />
      </div>
    </div>
  );
};

export default About;
