import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IDynamicButton {
  href: string;
  text: string;
  variant: "color" | "white";
  showIcon?: boolean;
}

const Button = ({ href, text, variant, showIcon = false }: IDynamicButton) => {
  return (
    <Link href={href}>
      <button
        className={`
            transition group flex h-10 items-center justify-center rounded-full
            ${
              variant === "white"
                ? "p-0"
                : "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600"
            } 
            font-medium duration-300 hover:shadow-blue-600/30
          `}
      >
        <div
          className={`
              flex h-full w-full px-4 items-center justify-center gap-2 rounded-full transition duration-300 ease-in-out
              ${
                variant === "white"
                  ? "bg-white text-blue-700 hover:bg-transparent hover:border hover:border-white hover:text-white"
                  : "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white"
              }
            `}
        >
          {text}
          {showIcon && <ArrowRight className="w-4 h-4" />}
        </div>
      </button>
    </Link>
  );
};

export default Button;
