import CardList, { type CardListItem } from "@/components/CardList/CardList";
import useStore from "@/store/useStore";
import { Device } from "@/types/adaptedData";
import React from "react";

type CardsViewProps = {
  devices: Device[];
};
const CardsView = ({ devices }: CardsViewProps) => {
  const setDetailsProductIdx = useStore((state) => state.setDetailsProductIdx);

  const items: CardListItem[] = devices.map((device) => ({
    icon: device.icon,
    title: device.product.name,
    tags: (device.shortNames ?? []).join(", "),
    label: device.line.name,
  }));

  return (
    <CardList
      items={items}
      onClick={(idx) => {
        setDetailsProductIdx(idx);
      }}
    />
  );
};

export default CardsView;
