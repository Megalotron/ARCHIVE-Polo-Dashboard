import CustomCard from "../../utils/customCard";

import WarningIcon from "../../../assets/icon/warning.svg";

import CalandarIcon from "../../../assets/icon/calandar.svg";
import LaptopIcon from "../../../assets/icon/laptop.svg";
import WeightIcon from "../../../assets/icon/weight.svg";

type LastSuspisciousPackagesWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The LastSuspiciousPackagesWidget widget to the logs of the data.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function LastSuspisciousPackagesWidget({
  style,
}: LastSuspisciousPackagesWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Last Suspiscious Packages"
      style={{ className: style?.className }}
    >
      <div className="h-full pt-5">
        <CustomCard
          style={{
            padding: "p-0",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <CustomCard
              style={{
                backgroundColor: "bg-gray-200",
                padding: "p-1.5",
                roundedCorners: "rounded-lg",
              }}
            >
              <img
                alt="CalandarIcon"
                src={CalandarIcon}
                className="h-5 cursor-pointer"
              />
            </CustomCard>
            <CustomCard
              style={{
                backgroundColor: "bg-gray-200",
                padding: "p-1.5",
                roundedCorners: "rounded-lg",
              }}
            >
              <img
                alt="LaptopIcon"
                src={LaptopIcon}
                className="h-5 cursor-pointer"
              />
            </CustomCard>
            <CustomCard
              style={{
                backgroundColor: "bg-gray-200",
                padding: "p-1.5",
                roundedCorners: "rounded-lg",
              }}
            >
              <img
                alt="WeightIcon"
                src={WeightIcon}
                className="h-5 cursor-pointer"
              />
            </CustomCard>
            <div className="w-5" />
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">22:28</p>
            <p className="text-sm font-bold leading-4 ">98.127.12.6</p>
            <p className="w-5 text-sm font-bold leading-4 ">ARP</p>
            <div className="w-5 h-5"></div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">22:20</p>
            <p className="text-sm font-bold leading-4 ">22.111.13.2</p>
            <p className="w-5 text-sm font-bold leading-4 ">ARP</p>
            <div className="w-5 h-5"></div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">22:14</p>
            <p className="text-sm font-bold leading-4 ">18.112.08.1</p>
            <p className="w-5 text-sm font-bold leading-4 ">ARP</p>
            <div className="w-5 h-5">
              <img
                alt="WarningIcon"
                src={WarningIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">22:11</p>
            <p className="text-sm font-bold leading-4 ">98.117.16.4</p>
            <p className="w-5 text-sm font-bold leading-4 ">UDP</p>
            <div className="w-5 h-5">
              <img
                alt="WarningIcon"
                src={WarningIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">22:06</p>
            <p className="text-sm font-bold leading-4 ">98.127.12.6</p>
            <p className="w-5 text-sm font-bold leading-4 ">ARP</p>
            <div className="w-5 h-5"></div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">21:58</p>
            <p className="text-sm font-bold leading-4 ">18.112.08.1</p>
            <p className="w-5 text-sm font-bold leading-4 ">TCP</p>
            <div className="w-5 h-5"></div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">21:47</p>
            <p className="text-sm font-bold leading-4 ">22.111.13.2</p>
            <p className="w-5 text-sm font-bold leading-4 ">TCP</p>
            <div className="w-5 h-5">
              <img
                alt="WarningIcon"
                src={WarningIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">21:40</p>
            <p className="text-sm font-bold leading-4 ">98.117.16.4</p>
            <p className="w-5 text-sm font-bold leading-4 ">UDP</p>
            <div className="w-5 h-5"></div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full space-x-20">
            <p className="w-5 text-sm font-bold leading-4 ">21:36</p>
            <p className="text-sm font-bold leading-4 ">48.113.14.3</p>
            <p className="w-5 text-sm font-bold leading-4 ">ARP</p>
            <div className="w-5 h-5">
              <img
                alt="WarningIcon"
                src={WarningIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <div className="flex flex-row justify-center w-full pt-8">
          <CustomCard
            style={{
              backgroundColor: "bg-black hover:opacity-70",
              padding: "pb-2.5  pr-4 pl-4",
              roundedCorners: "rounded-lg",
              className: "cursor-pointer h-8",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xl font-bold leading-4 text-white">...</p>
            </div>
          </CustomCard>
        </div>
      </div>
    </CustomCard>
  );
}

export default LastSuspisciousPackagesWidget;
