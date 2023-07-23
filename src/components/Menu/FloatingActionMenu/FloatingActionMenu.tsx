import React, { useState, useEffect, useRef } from 'react';
import MenuItems from './MenuItems';
import FloatingActionButton from '../../Buttons/FloatingActionButton';
import FloatingActionMenuProps from './FloatingActionMenu.interface';

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
    <>
      <MenuItems
        position={position}
        items={menuItems}
        menuOpen={menuOpen}
        menuRef={menuRef}
        toggleMenu={toggleMenu}
      />
      <FloatingActionButton
        icon={icon}
        position={position}
        onClick={toggleMenu}
      />
    </>
  );
};

export default FloatingActionMenu;
