"use client";

import { Menu, X } from "lucide-react";
import StartProjectBtn from "./start-a-project-btn";
import { useNavigation } from "@/context/navigation-context";
import MobileMenuContent from "./mobile-menu-content";

const ButtonCTA = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useNavigation();

  const handleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="hidden md:flex">
        <StartProjectBtn />
      </div>

      <div className="flex md:hidden">
        <MobileMenuContent />
        {isDrawerOpen && (
          <button onClick={handleMenu}>
            <X size={24} />
          </button>
        )}

        {!isDrawerOpen && (
          <button onClick={handleMenu}>
            <Menu size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonCTA;
