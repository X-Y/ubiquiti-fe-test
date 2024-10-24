import Image from "next/image";
import GridViewIcon from "./GridView.svg";
import ListViewIcon from "./ListView.svg";
import LogoIcon from "./Logo.svg";

export type IconButtonProps = {
  icon: "list" | "grid" | "logo";
  active?: boolean;
  className?: string;
  onClick?: () => void;
};
const IconButton = ({ icon, active, className, onClick }: IconButtonProps) => {
  const IconComp =
    icon === "list"
      ? ListViewIcon
      : icon === "grid"
        ? GridViewIcon
        : icon === "logo"
          ? LogoIcon
          : null;
  return (
    <button
      onClick={onClick}
      className={`flex h-9 w-9 flex-none items-center justify-center rounded 
        ${active ? "bg-neutral-03" : "bg-white"} hover:bg-neutral-02 active:bg-neutral-03 
        focus:ring-blue-06 focus:ring-1 ring-inset outline-none ${className}`}
    >
      <Image src={IconComp} alt={icon} aria-hidden="true" className="h-6 w-6" />
    </button>
  );
};

export default IconButton;
