import './MenuItem.css';

const MenuItem = ({label, activeMenu, changeMenu}) => {
    return (
        <li className='menu-item' onClick={() => changeMenu(label)}>
            <span className={`${activeMenu === label ? 'active' : ''}`}>{label}</span>
        </li>
    )
}

export default MenuItem;