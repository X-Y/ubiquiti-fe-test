import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { PropsWithChildren, useState } from "react";

type DropdownProps = PropsWithChildren<{
  buttonText: string;
}>;
const Dropdown = ({ buttonText, children }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded text-light bg-white p-1.5 hover:bg-neutral-02 active:bg-neutral-03 data-[open]:bg-neutral-03 ring-blue-06 focus:ring-1  outline-none">
          {buttonText}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-2xl transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {children}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
