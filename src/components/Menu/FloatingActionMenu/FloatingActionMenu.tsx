import React, { useState, useEffect, useRef } from 'react';
import MenuItems from './MenuItems';
import MenuItemType from '../MenuItem/MenuItem.interface';

// interface MenuItem {
//   label: string;
//   onClick: () => void;
// }

interface FloatingActionMenuProps {
  icon: JSX.Element;
  menuItems: MenuItemType[];
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({
  icon,
  menuItems,
  position = 'bottom-right',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed ${
        position === 'top-left'
          ? 'top-4 left-4'
          : position === 'top-right'
          ? 'top-4 right-4'
          : position === 'bottom-left'
          ? 'bottom-4 left-4'
          : 'bottom-4 right-4'
      }`}
    >
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute z-10 flex flex-col gap-2 bg-white p-2 rounded-md shadow-md ${
            position === 'top-left'
              ? 'top-0 left-0'
              : position === 'top-right'
              ? 'top-0 right-0'
              : position === 'bottom-left'
              ? 'bottom-0 left-0'
              : 'bottom-0 right-0'
          }`}
        >
          <MenuItems items={menuItems} toggleMenu={toggleMenu} />
          {/* {menuItems.map((item, index) => (
            <button
              key={index}
              className="block px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none whitespace-nowrap"
              onClick={() => {
                item.onClick();
                toggleMenu();
              }}
            >
              {item.label}
            </button>
          ))} */}
        </div>
      )}
      <button
        className="flex items-center justify-center w-12 h-12 p-2 bg-travvit-orange-800 rounded-full shadow-lg hover:bg-travvit-orange-700 focus:outline-none"
        onClick={toggleMenu}
      >
        {icon}
      </button>
    </div>
  );
};

export default FloatingActionMenu;
