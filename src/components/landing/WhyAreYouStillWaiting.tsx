import { Button } from "../common";

const content = {
  heading: "Why are you still waiting?",
  paragraph:
    "Your vision deserves action. Partner with Disowe Labs today to turn your ideas into reality and create something extraordinary!",
  button: {
    content: "Contact us",
    link: "mailto:info@disowelabs.com"
  }
};

const WhyAreYouStillWaiting = () => {
  return (
    <div className="my-10">
      <div className="bg-gradient-to-r from-[#0B057B] via-[#223DDA] to-[#284CF2] py-14 rounded-3xl flex flex-col justify-center items-center">
        <h2 className="md:text-6xl text-4xl font-bold text-white text-center">{content.heading}</h2>
        <p className="md:max-w-xl max-w-xs text-sm md:text-base text-center text-white py-5">
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
