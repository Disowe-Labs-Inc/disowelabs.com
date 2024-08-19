import Image from "next/image";
import Details from "./Details";
import Label from "./label";

const content = {
  labelText: "Updating with the latest",
  heading: "Bring your dream software into Reality.",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  highlights: ["Reality."]
};

const Hero = () => {
  return (
    <div className="bg-card rounded-3xl my-10">
      <Label text={content.labelText} />
      <div className="flex flex-col md:flex-row">
        <Details
          heading={content.heading}
          paragraph={content.paragraph}
          highlights={content.highlights}
        />
        <div className="flex justify-end">
          <Image
            src="/images/hero.svg"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
