import { DisoweLogoColor } from "@/icons";
import MenuContent from "./menu-content";
import ButtonCTA from "./button-cta";

const Navigation = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center w-full mt-10 py-4 px-10 rounded-full">
      <DisoweLogoColor width={150} height={40} />
      <MenuContent />
      <ButtonCTA />
    </div>
  );
};

export default Navigation;
