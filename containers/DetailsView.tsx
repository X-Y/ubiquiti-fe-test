import Details from "@/components/Details/Details";
import LightButton from "@/components/LightButton/LightButton";
import useStore from "@/store/useStore";
import { Device } from "@/types/adaptedData";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type DetailsViewProps = {
  devices: Device[];
  deviceIdx: number;
};
const DetailsView = ({ devices, deviceIdx }: DetailsViewProps) => {
  const {
    product: { name: title },
    line: { name: lineName },
    icon,
    id,
    shortNames,
  } = devices[deviceIdx];

  const dataTable: [string, string][] = [
    ["Product Line", lineName],
    ["ID", id],
    ["Name", title],
    ["Short Name", shortNames.join(",")],
    ["Max. Power", "25w"],
    ["Speed", "2400 Mbps"],
    ["Number of Ports", "5"],
  ];

  const close = useStore((state) => state.closeDetails);
  const setDetailsProductIdx = useStore((state) => state.setDetailsProductIdx);

  return (
    <div>
      <div className="h-16 mb-4 flex justify-between items-center">
        <LightButton onClick={close}>
          <ChevronLeftIcon />
          back
        </LightButton>
        <div className="flex">
          <LightButton
            onClick={() => setDetailsProductIdx(deviceIdx - 1)}
            disabled={deviceIdx - 1 <= -1}
          >
            <ChevronLeftIcon />
          </LightButton>
          <LightButton
            onClick={() => setDetailsProductIdx(deviceIdx + 1)}
            disabled={deviceIdx + 1 >= devices.length}
          >
            <ChevronRightIcon />
          </LightButton>
        </div>
      </div>
      <Details
        icon={icon}
        title={title}
        subtitle={lineName}
        dataTable={dataTable}
      />
    </div>
  );
};

export default DetailsView;
