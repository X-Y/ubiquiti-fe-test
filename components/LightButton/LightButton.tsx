import Image from 'next/image';
import { PropsWithChildren } from 'react';

export type LightButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren
const LightButton = ({ children, ...otherProps }: LightButtonProps) => {
  return (
      <button 
        className={`flex h-7 w-7 flex-none items-center justify-center rounded shadow-2xl text-light outline-none`} {...otherProps} >
        {children}
      </button>
  );
};

export default LightButton;