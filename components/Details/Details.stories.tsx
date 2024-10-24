import Details from "./Details";

const meta = {
  component: Details,
  title: "Details",
  args: {
    onClick: () => {},
  },
};

export default meta;

const mockIcon: Icon = {
  id: "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
  resolutions: [
    [25, 25],
    [32, 32],
    [51, 51],
    [64, 64],
    [101, 101],
    [128, 128],
    [129, 129],
    [256, 256],
    [257, 257],
    [512, 512],
    [1000, 1000],
  ],
};

export const Basic = {
  args: {
    icon: mockIcon,
    title: "Access Point WiFi 6 In Wall",
    subtitle: "UniFi",
    dataTable: [
      ["Product Line", "UniFi"],
      ["Product Line", "UniFi"],
      ["Product Line", "UniFi"],
      ["Product Line", "UniFi"],
      ["Product Line", "UniFi"],
    ],
  },
};
