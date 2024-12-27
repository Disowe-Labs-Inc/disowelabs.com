import { DisoweLogoColor } from "@/icons";

import ButtonCTA from "./button-cta";
import MobileMenuContent from "./mobile-menu-content";

const MobileNavigation = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center w-full mt-10 py-4 px-10 rounded-full">
      <DisoweLogoColor width={150} height={40} />
      <MobileMenuContent />
      <ButtonCTA />
    </div>
  );
};

export default MobileNavigation;
