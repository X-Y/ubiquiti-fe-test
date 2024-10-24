export type CardData = {
  image: JSX.Element;
  title: string;
  tags?: string;
  label?: string;
};
export type CardProps = CardData & {
  onClick: () => void;
};
const Card = ({ image, title, tags, label, onClick }: CardProps) => {
  return (
    <div
      className="min-w-56 md:max-w-72 h-44 flex-grow basis-0 rounded-lg overflow-hidden cursor-pointer transition-transform transform 
      border-neutral-03 border hover:bg-neutral-01 focus:ring-1 ring-blue-300 
      outline-none relative group"
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
      aria-label={title}
    >
      {label && (
        <span className="absolute top-1 right-1 text-blue-500 bg-white text-xs px-1 py-0.5 rounded-sm">
          {label}
        </span>
      )}

      <div className="w-full h-3/5 bg-neutral-01 group-hover:bg-neutral-02 flex justify-center items-center *:h-full">
        {image}
      </div>

      <div className="p-2 text-sm text-medium">{title}</div>
      {tags && (
        <div className="absolute bottom-2 text-xs text-light px-2 w-full truncate">
          {tags}
        </div>
      )}
    </div>
  );
};

export default Card;
