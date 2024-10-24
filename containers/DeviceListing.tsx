import useStore from '@/store/useStore';
import React, { useMemo } from 'react';
import ViewPicker from "@/containers/ViewPicker";
import TableView from "@/containers/TableView";
import CardsView from "@/containers/CardsView";
import { Device } from '@/types/adaptedData';
import Filters from './Filters';
import Search from './Search';

type DeviceListingProps = {
  devices: Device[];
}
const DeviceListing = ({ devices}: DeviceListingProps) => {
  const viewType = useStore((state) => state.viewType);
  const filters = useStore((state) => state.filters);

  const filterOptions = useMemo<string[]>(() => {
    const options = new Set<string>();
    devices.forEach(({line}) => {
      options.add(line.name)
    })
    return Array.from(options);
  }, [devices])
  
  const ListViewComponent = viewType === 'cards' ? CardsView :
  viewType === 'table' ? TableView : TableView;

  const filteredDevices = filters.length ? devices.filter(({line}) => filters.indexOf(line.name) !== -1) : devices;

  return (<>
  <div className='flex justify-between py-4 gap-4 flex-col md:flex-row sticky top-[50px] bg-white z-10'>
    <Search devices={devices}/>
    
    <div className='flex items-center gap-2 ml-auto'>
      <ViewPicker />
      <Filters options={filterOptions}/>
    </div>
  </div>
    <ListViewComponent devices={filteredDevices} />

  </>);
};

export default DeviceListing;