import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import React from "react";
import { highlightText } from "@/helpers/textHighlight";

interface DetailsProps {
  heading: string;
  paragraph: string;
  highlights: string[];
}

export default function Details({
  heading,
  paragraph,
  highlights
}: DetailsProps) {
  return (
    <div className="flex flex-col md:max-w-[57%] gap-4 lg:gap-7 px-4 lg:px-6 pb-5 lg:pb-7 pt-3 lg:pt-5">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
        {highlightText(heading, highlights).reduce((prev, curr) => (
          <React.Fragment key={prev.key || curr.key}>
            {prev} {curr}
          </React.Fragment>
        ))}
      </h1>
      <p className="text-xs lg:text-sm">{paragraph}</p>
      <Link className="w-max text-blue-900" href={"mailto:info@disowelabs.com"}>
        <span className="flex items-center gap-1 md:text-lg lg:text-2xl ">
          <p>Let&apos;s have a chat</p>
          <CircleArrowRight
            strokeWidth={1.5}
            className="-rotate-45"
            size={22}
          />
        </span>
      </Link>
    </div>
  );
}
