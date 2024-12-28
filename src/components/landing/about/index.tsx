import { InfoCard001, InfoCard002 } from "@/components/common";

const About = () => {
  return (
    <div>
      {/* For MD and larger screens - Grid Layout */}
      <div className="hidden md:grid h-full w-full gap-4 grid-cols-8 grid-rows-4">
        <InfoCard001
          className="col-span-3 row-span-2"
          bgColor="#284CF2"
          heading="What we can offer you."
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.adipiscing elit.Lorem ipsum dolor sit"
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Software Development"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-001.png"
          infoHeading="Web, Mobile App | AI"
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Digital Marketing & Designing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-002.png"
          infoHeading="Social Media Marketing | Brand Designing | UX Designing "
        />
        <InfoCard002
          className="col-span-3 row-span-2"
          bgColor="white"
          heading="Cloud Solutions"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur "
          imgUrl="/images/disowelabs-img-003.png"
          infoHeading="Cloud migrations"
        />
      </div>

      {/* For smaller screens - Column Layout */}
      <div className="md:hidden flex flex-col space-y-4 w-full p-4">
        <InfoCard001
          className="w-full"
          bgColor="#284CF2"
          heading="What we can offer you."
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.adipiscing elit.Lorem ipsum dolor sit"
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Software Development"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-001.png"
          infoHeading="Web, Mobile App | AI"
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Digital Marketing & Designing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-002.png"
          infoHeading="Social Media Marketing | Brand Designing | UX Designing "
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Cloud Solutions"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur "
          imgUrl="/images/disowelabs-img-003.png"
          infoHeading="Cloud migrations"
        />
      </div>
    </div>
  );
};

export default About;
