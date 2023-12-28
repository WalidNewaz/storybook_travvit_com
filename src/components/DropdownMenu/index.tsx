import React, { useState, ReactNode } from 'react';
import { Popover, Transition } from '@headlessui/react';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import MenuItems from '../DropdownMenu/MenuItems';

const DropdownMenu: React.FC<{
  items: MenuItemType[];
  label?: string;
  icon: ReactNode;
}> = ({ items, label, icon }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="float-left" data-testid="desktop-menu-discover">
      {({ open }) => (
        <>
          <Popover.Button
            className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900 hover:text-gray-500 hover:bg-gray-200 py-3 px-3 rounded-full"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
            data-testid="user-menu-button"
          >
            {label && <span className="sr-only">{label}</span>}
            {icon}
          </Popover.Button>

          <Transition
            show={isShowing && open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute z-10 mt-5 flex w-64 max-w-max -translate-x-1/2 -ml-24"
              data-testid="discover-panel"
            >
              <MenuItems items={items} setIsShowing={setIsShowing} />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DropdownMenu;
