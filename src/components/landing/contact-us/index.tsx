import { InfoCard001, InfoCard002 } from "@/components/common";

const ContactUs = () => {
  return (
    <div>
      {/* For MD and larger screens - Grid Layout */}
      <div className="hidden md:grid h-full w-full gap-4 grid-cols-8 grid-rows-2">
        <InfoCard001
          className="col-span-3 row-span-2"
          heading="Discover who we are"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.adipiscing elit.Lorem ipsum dolor sit"
        />
        <InfoCard002
          className="col-span-5 row-span-2"
          bgColor="white"
          heading="Colombo, Sri Lanka to whole world"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-004.png"
          isInfoHeading={false}
        />
      </div>

      {/* For smaller screens - Column Layout */}
      <div className="md:hidden flex flex-col space-y-4 w-full p-4">
        <InfoCard001
          className="w-full"
          heading="What we can offer you."
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.adipiscing elit.Lorem ipsum dolor sit"
        />
        <InfoCard002
          className="w-full"
          bgColor="white"
          heading="Software Development"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgUrl="/images/disowelabs-img-004.png"
          isInfoHeading={false}
        />
      </div>
    </div>
  );
};

export default ContactUs;
