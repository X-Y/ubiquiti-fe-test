import { Icon } from "@/types/adaptedData";
import Card, { CardData } from "../Card/Card";
import Image from "../Image/Image";

export type CardListItem = Omit<CardData, "image"> & {
  icon: Icon;
};
export type CardListProps = {
  items: CardListItem[];
  onClick: (idx: number) => void;
};
const CardList = ({ items, onClick }: CardListProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map(({ title, tags, label, icon }, idx) => (
        <Card
          key={idx}
          image={
            <Image
              alt={title}
              iconId={icon.id}
              sizeX={"" + icon.resolutions[5][0]}
              sizeY={"" + icon.resolutions[5][1]}
            />
          }
          title={title}
          tags={tags}
          label={label}
          onClick={() => onClick(idx)}
        />
      ))}
    </div>
  );
};

export default CardList;
