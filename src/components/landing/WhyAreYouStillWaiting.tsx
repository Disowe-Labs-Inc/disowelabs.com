import { Button } from "../common";

const content = {
  heading: "Why are you still waiting?",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: {
    content: "Contact us",
    link: "mailto:info@disowelabs.com"
  }
};

const WhyAreYouStillWaiting = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0B057B] via-[#223DDA] to-[#284CF2] py-14 rounded-3xl flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-white">{content.heading}</h2>
        <p className="max-w-xl text-center text-white py-5">
          {content.paragraph}
        </p>
        <Button
          href={content.button.link}
          text={content.button.content}
          variant="white"
          showIcon
        />
      </div>
    </div>
  );
};

export default WhyAreYouStillWaiting;
