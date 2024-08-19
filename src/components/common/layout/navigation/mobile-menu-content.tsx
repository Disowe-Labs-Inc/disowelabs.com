"use client";

import { useNavigation } from "@/context/navigation-context";

const MobileMenuContent = () => {
  const { isDrawerOpen } = useNavigation();

  if (isDrawerOpen) {
    return <div>mobile menu</div>;
  }
};

export default MobileMenuContent;
