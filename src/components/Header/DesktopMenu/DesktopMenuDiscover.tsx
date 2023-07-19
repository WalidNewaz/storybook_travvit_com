import React, { useState } from 'react';
import MenuItemType from '../MenuItem/MenuItem.interface';
import { Popover, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';
import MenuItems from './MenuItems';

const DesktopMenuDiscover: React.FC<{ items: MenuItemType[] }> = ({
  items,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover
      className="relative float-left"
      data-testid="desktop-menu-discover"
    >
      <Popover.Button
        className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        data-testid="discover-button"
      >
        <span>Discover</span>
        <FaChevronDown className="h-5 w-5 ml-2" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      ></Transition>
      <Popover.Panel
        className="absolute z-10 mt-5 flex w-64 max-w-max -translate-x-1/2 px-4"
        data-testid="discover-panel"
      >
        <MenuItems items={items} />
      </Popover.Panel>
    </Popover>
  );
};

export default DesktopMenuDiscover;
