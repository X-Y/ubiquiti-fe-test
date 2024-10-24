import React from "react";
import Row, { RowData } from "./Row";
import Image from "../Image/Image";
import { Icon } from "@/types/adaptedData";

export type RowItemData = Omit<RowData, "image"> & {
  icon: Icon;
};

type TableProps = {
  rows: RowItemData[];
  onClick: (idx: number) => void;
};

const Table = ({ rows, onClick }: TableProps) => {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="h-8 border-b border-neutral-03">
          <th className="w-9"></th>
          <th className="text-left">Product Line</th>
          <th className="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ col1, col2, icon }, idx) => (
          <Row
            key={idx}
            col1={col1}
            col2={col2}
            image={
              <Image
                alt={col1}
                iconId={icon.id}
                sizeX={"" + icon.resolutions[0][0]}
                sizeY={"" + icon.resolutions[0][1]}
              />
            }
            onClick={() => onClick(idx)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
