import { RowItemData } from '@/components/Table/Table';
import Table from '@/components/Table/Table';
import useStore from '@/store/useStore';
import { Device } from '@/types/adaptedData';
import React from 'react';

type TablesViewProps = {
  devices: Device[];
}
const TablesView = ({ devices }: TablesViewProps) => {
  const setDetailsProductIdx = useStore((state) => state.setDetailsProductIdx);

  const rows: RowItemData[] = devices.map(({line, product, icon}) => ({
    icon,
    col1: line.name,
    col2: product.name,
  }))
  return (
    <div className='[&_thead]:sticky [&_thead]:top-[116px] [&_thead]:bg-white'>
   <Table rows={rows} onClick={setDetailsProductIdx}/>
   </div>
  );
};

export default TablesView;