import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import Dropdown from './Dropdown';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';

const meta = {
  component: Dropdown,
  title: 'Dropdown',
  decorators: [
    (Story) => (
      <div 
      className='flex justify-center items-center h-screen'
      >
        <Story />
      </div>
    ),
  ],
  args: {
  }
}

export default meta;

const BasicChildren = () => (
  <>
  <p>Hello </p>
  <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    >
      Account settings
    </a>
  </MenuItem>
  <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    >
      Support
    </a>
  </MenuItem>
  <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    >
      License
    </a>
  </MenuItem>
  <form action="#" method="POST">
    <MenuItem>
      <button
        type="submit"
        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
      >
        Sign out
      </button>
    </MenuItem>
  </form>
  </>
)
export const Basic = {
  args: {
    buttonText: 'options',
    children: <BasicChildren />
  }
};


export const WithCheckBoxes = {
  args: {
    children: (<div>
      <p>Product Line</p>
      <CheckboxGroup name='filters' values={[
        'UniFi',
        'UniFi LTE',
        'UniFi Protect',
        'UniFi Access',
      ]}
      onChange={(values: string[]) => console.log(values)}
      />
    </div>)
  }
};