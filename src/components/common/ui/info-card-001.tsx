import { DisoweIconWhite } from "@/icons";

interface IInfoCard001 {
  heading: string;
  para: string;
  className?: string;
}

const InfoCard001 = ({
  heading,
  para,
  className = ""
}: IInfoCard001) => {
  return (
    <div className={`py-12 rounded-3xl bg-[#284CF2] ${className}`}>
      <div className={`flex flex-col-reverse lg:flex-row w-full px-10 gap-4 lg:gap-0`}>
        <div className="w-full lg:w-10/12">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl text-wrap">{heading}</h1>
          <p className="text-white mt-5 md:leading-4 md:text-sm lg:leading-5 lg:text-base">{para}</p>
        </div>
        <div className="w-full lg:w-2/12 flex items-start justify-start lg:justify-end">
          <DisoweIconWhite color="white" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard001;
