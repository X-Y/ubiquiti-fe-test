import Image from "../Image/Image";
import { Icon } from "@/types/adaptedData";
import React from "react";

type DetailsProps = {
  icon: Icon;
  title: string;
  subtitle: string;
  dataTable: [string, string][];
};

const Details = ({ icon, title, subtitle, dataTable }: DetailsProps) => {
  const width = "" + icon.resolutions[8][0];
  const height = "" + icon.resolutions[8][1];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[18rem,1fr] gap-8 max-w-[768px] mx-auto">
      <div className="bg-neutral-01 aspect-square flex place-content-center">
        <Image
          alt={title}
          iconId={icon.id}
          sizeX={width}
          sizeY={height}
          width={width}
          height={height}
          className={`aspect-square w-[257px] h-[257px]`}
        />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="text-sm text-light mb-4">{subtitle}</div>
        <table className="min-w-full text-sm text-left mb-4">
          <tbody>
            {dataTable.map(([title, line], idx) => (
              <tr key={idx} className="h-8">
                <td className="">{title}</td>
                <td className="text-light">{line}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a className="text-sm text-blue-06 font-light" href="">
          See all details in JSON
        </a>
      </div>
    </div>
  );
};

export default Details;
