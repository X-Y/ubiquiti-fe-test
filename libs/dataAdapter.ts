import { Device } from "@/types/adaptedData";
import { ApiDevcicesData } from "@/types/apiDevicesData";

function dataAdapter(input: ApiDevcicesData): Device[] {
  return input.devices.map((i) => {
    const { shortnames, ...otherProps } = i;
    return {
      shortNames: shortnames,
      ...otherProps,
    };
  });
}

export default dataAdapter;
