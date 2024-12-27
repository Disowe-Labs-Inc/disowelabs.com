"use client";

import { useNavigation } from "@/context/navigation-context";
import { NavigationData } from "@/data/navigation.data";
import Link from "next/link";
import { X } from "lucide-react";
import { DisoweLogoColor } from "@/icons";
import StartProjectBtn from "./start-a-project-btn";

const styles = {
  menuContainer:
    "fixed top-0 left-0 w-full h-full bg-blue-50 z-50 flex flex-col justify-start py-10 px-6 md:hidden",
  header:
    "flex justify-between items-center mb-8 bg-white py-4 px-10 rounded-full",
  linkList: "flex flex-col gap-10 bg-white py-12 px-6 rounded-3xl mt-2",
  link: "flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-medium",
  icon: "w-5 h-5",
  footer: "pt-6 border-t border-gray-200",
  closeButton: "text-black hover:text-red-600 cursor-pointer"
};

const MobileMenuContent = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useNavigation();

  if (!isDrawerOpen) return null;

  return (
    <div className={styles.menuContainer}>
      <div className={styles.header}>
        <DisoweLogoColor width={150} height={40} />
        <button
          className={styles.closeButton}
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} className="text-gray-700" />
        </button>
      </div>
      <div className={styles.linkList}>
        {NavigationData.map((item, id) => (
          <Link className={styles.link} href={item.url} key={id}>
            {item.title}
          </Link>
        ))}
        <div className={styles.footer}>
          <StartProjectBtn />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuContent;
