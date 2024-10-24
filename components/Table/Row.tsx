import React from 'react';

export type RowData = {
  image: JSX.Element;
  col1: string;
  col2: string;
}
type RowProps = RowData & {
  onClick: () => void;
}
const Row = ({ image, col1, col2, onClick }: RowProps) => {
  return (
    <tr
      onClick={onClick}
      tabIndex={0}
      style={{ cursor: 'pointer' }}
      className='h-8 hover:bg-neutral-01 outline-none has-[+:focus]:border-blue-06 focus:border-blue-06 border-b border-neutral-03'
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(); // Trigger onClick for Enter or Space key press
        }
      }}
    >
      <td>{image}</td>
      <td className='text-medium'>{col1}</td>
      <td className='text-light'>{col2}</td>
    </tr>
  );
};

export default Row;