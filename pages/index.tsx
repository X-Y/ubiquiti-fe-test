import dataAdapter from "@/libs/dataAdapter";
import { getDevicesData } from "@/libs/getApiData";
import { ApiDevcicesData } from "@/types/apiDevicesData";
import { useQuery } from "@tanstack/react-query";
import useStore from "@/store/useStore";
import DetailsView from "@/containers/DetailsView";
import DeviceListing from "@/containers/DeviceListing";
import Header from "@/components/Header/Header";

export default function Home() {
  const {
    status,
    data: sourceData,
    error,
    isFetching,
  } = useQuery<ApiDevcicesData>({
    queryKey: ["getDevicesData"],
    queryFn: getDevicesData,
    staleTime: 60000,
  });

  const data = sourceData ? dataAdapter(sourceData) : [];
  const detailsProductIdx = useStore((state) => state.detailsProductIdx);
  const isShowDetails = detailsProductIdx > -1;

  return (
    <div>
      <Header title="Devices" user="Xun" />
      <div className="max-w-7xl m-auto px-4">
        {isShowDetails ? (
          <DetailsView devices={data} deviceIdx={detailsProductIdx} />
        ) : (
          <DeviceListing devices={data} />
        )}
      </div>
    </div>
  );
}
