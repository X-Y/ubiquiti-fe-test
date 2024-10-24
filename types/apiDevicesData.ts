export type ApiDevcicesData = {
  devices: {
    id: string;
    line: {
      id: string;
      name: string;
    };
    icon: {
      id: string;
      resolutions: [number, number][];
    };
    product: {
      abbrev: string;
      name: string;
    };
    shortnames: string[];
    images: {
      default: string;
    };
  }[];
  version: string;
};
