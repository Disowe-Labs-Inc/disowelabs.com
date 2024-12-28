import { InfoCard001, InfoCard002 } from "@/components/common";

const ContactUs = () => {
  return (
    <div>
      {/* For MD and larger screens - Grid Layout */}
      <div className="hidden md:grid h-full w-full gap-4 grid-cols-8 grid-rows-2">
        <InfoCard001
          className="col-span-3 row-span-2"
          heading="Discover who we are"
          para="We are a team of innovators focused on turning your ideas into impactful digital solutions across software, marketing, and cloud services."
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Colombo, Sri Lanka to whole world"
          para="From Colombo, Sri Lanka, Disowe Labs delivers world-class digital solutions, bringing innovation and expertise to clients globally."
          imgUrl="/images/disowelabs-img-004.png"
          isInfoHeading={false}
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
          imgUrl="/images/disowelabs-img-004.png"
          isInfoHeading={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
