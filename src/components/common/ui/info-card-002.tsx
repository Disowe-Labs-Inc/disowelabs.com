import { CloudIcon } from "lucide-react";
import Image from "next/image";

interface IInfoCard002 {
  infoHeading?: string;
  heading: string;
  para: string;
  bgColor: string;
  imgUrl: string;
  className?: string;
  isInfoHeading?: boolean;
}

const InfoCard002 = ({
  infoHeading,
  heading,
  para,
  bgColor,
  imgUrl,
  className = "",
  isInfoHeading = true
}: IInfoCard002) => {
  return (
    <div
      className={`bg-${bgColor} rounded-3xl w-full relative overflow-hidden ${className}`}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="md:w-8/12 lg:w-9/12 flex flex-col justify-center h-full gap-2 md:gap-4 p-6 md:px-10">
          {isInfoHeading && (
            <div className="flex flex-row items-center gap-2 md:gap-3">
              <CloudIcon
                width={16}
                height={16}
                className="text-blue-700 md:w-5 md:h-5"
              />
              <h4 className="text-xs md:text-base font-medium text-blue-700">
                {infoHeading}
              </h4>
            </div>
          )}
          <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
            {heading}
          </h2>
          <p className="text-sm md:leading-4 lg:leading-5 lg:text-base">
            {para}
          </p>
        </div>
        <div className="w-full md:w-4/12 lg:w-3/12 h-48 md:h-full relative flex justify-end">
          <Image
            alt="disowelabs-img-001"
            width={2000}
            height={2000}
            quality={100}
            src={imgUrl}
            className="object-cover object-right-bottom h-full w-full md:object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard002;
