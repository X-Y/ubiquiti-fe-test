import IconButton from "../IconButton/IconButton";

export type HeaderProps = {
  title: string;
  user: string;
};
const Header = ({ title, user }: HeaderProps) => {
  return (
    <div className="w-full bg-neutral-03 h-[50px] flex flex-row items-center text-text-3 font-light sticky top-0 z-10">
      <IconButton
        icon="logo"
        className="bg-transparent rounded-none h-full w-[50px] [&_img]:w-auto [&_img]:h-auto"
      />
      <h1 className="text-sm ml-3">{title}</h1>
      <div className="ml-auto mr-8 text-sm">{user}</div>
    </div>
  );
};

export default Header;
