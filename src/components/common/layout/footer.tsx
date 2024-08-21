import { DisoweLogoColor } from "@/icons";
import { COPYRIGHTS } from "@/constants";
import { GradientButton } from "@/components/common";

const Footer = () => {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row justify-evenly md:justify-between gap-3 text-center items-center w-full mt-10 py-4 px-10 rounded-3xl md:rounded-full">
        <DisoweLogoColor width={150} height={40} />
        <div className="text-gray-700 text-sm">{COPYRIGHTS}</div>
        <GradientButton
          href="mailto:info@disowelabs.com"
          text="info@disowelabs.com"
        />
      </div>
      <div className="h-10" />
    </>
  );
};

export default Footer;
