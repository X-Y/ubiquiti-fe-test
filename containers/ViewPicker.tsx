import IconButton from '@/components/IconButton/IconButton';
import useStore from '@/store/useStore';
import React from 'react';

const ViewPicker = () => {
  const setViewType = useStore((state) => state.setViewType);
  const viewType = useStore((state) => state.viewType);

  return (<div className='flex items-center'>
    <IconButton active={viewType==='table'} icon='list' onClick={() => setViewType('table')}/>
    <IconButton active={viewType==='cards'} icon='grid' onClick={() => setViewType('cards')}/>
   </div>
  );
};

export default ViewPicker;