import Image from "../Image/Image";
import Card from "./Card";

const meta = {
  component: Card,
  title: "Card",
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-screen w-5 m-auto">
        <Story />
      </div>
    ),
  ],

  args: {
    onClick: () => {},
  },
};

export default meta;

export const Basic = {
  args: {
    image: (
      <Image
        alt="Access Point WiFi 6 Enterprise"
        iconId="0b6d0790-dea7-47a0-a1a6-929b85b0f247"
        sizeX="101"
        sizeY="101"
      />
    ),
    title: "Access Point WiFi 6 Enterprise",
    shortName: "shortname, shortname",
    label: "UniFi",
  },
};
