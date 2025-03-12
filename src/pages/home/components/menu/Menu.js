import { useState } from 'react';
import './Menu.css';
import MenuItem from '../menu-item/MenuItem';

const Menu = ({ activeMenu, changeMenu }) => {

  const menuList = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];

  return (
    <div className='container'>
      <ul className='menu-list'>
        {
          menuList.map(menuItem => (
            <MenuItem
              label={menuItem}
              activeMenu={activeMenu}
              changeMenu={(menu) => changeMenu(menu)}
              key={menuItem}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Menu