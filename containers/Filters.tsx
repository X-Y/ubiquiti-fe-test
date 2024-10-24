import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup';
import Dropdown from '@/components/Dropdown/Dropdown';
import useStore from '@/store/useStore';
import React from 'react';

type FiltersProps = {
  options: string[]
}
const Filters = ({options}: FiltersProps) => {
  const setFilters = useStore(state => state.setFilters);
  const filters = useStore(state => state.filters);

  const optionStates = options.reduce<{[key: string]: boolean}>((prev,opt) => ({...prev, [opt]: filters.indexOf(opt) !== -1}), {});

  return (<Dropdown buttonText='filters'>
      <div className='p-4 flex flex-col gap-4 items-start'>
        <p className='font-semibold'>Product Line</p>
        <CheckboxGroup name='filters' values={optionStates}
          onChange={(values: string[]) => setFilters(values)}
        />
      </div>
  </Dropdown>);
};

export default Filters;