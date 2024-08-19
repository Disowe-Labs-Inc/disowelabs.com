import { ReactNode } from "react";
import { NavigationProvider } from "./navigation-context";

const CombinedProviders = ({ children }: { children: ReactNode }) => {
  return <NavigationProvider>{children}</NavigationProvider>;
};

export default CombinedProviders;
