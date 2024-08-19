"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import StartProjectBtn from "./start-a-project-btn";

const ButtonCTA = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hidden md:flex">
        <StartProjectBtn />
      </div>

      <div className="flex md:hidden">
        {isMenuOpen && (
          <button onClick={handleMenu}>
            <X size={24} />
          </button>
        )}

        {!isMenuOpen && (
          <button onClick={handleMenu}>
            <Menu size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonCTA;
