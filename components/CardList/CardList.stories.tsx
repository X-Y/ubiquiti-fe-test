import CardList from "./CardList";

const meta = {
  component: CardList,
  title: "CardList",
  args: {
    onClick: () => {},
  },
};

export default meta;

const basicData = Array.from(Array(20)).map(() => ({
  image: "",
  title: "Access Point WiFi 6 Enterprise",
  tags: "shortname, shortname",
  label: "UniFi",
}));

export const Basic = {
  args: {
    items: basicData,
  },
};
