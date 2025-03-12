import { useContext, useEffect, useState } from 'react';
import classes from './SidebarItem.module.css';
import { contextData } from '../../../services/context-store';

const SidebarItem = ({ icon, tabNumber, badge }) => {
    const { activeTab, changeActiveTab, orderList } = useContext(contextData);
    const [changeQuantity, setChangeQuantity] = useState(false);


    const totalItems = orderList.reduce((initial, obj) => initial + obj.quantity, 0)
    const badgeClass = `${classes.badge} ${changeQuantity ? classes.bump : ''}`

    useEffect(() => {
        setChangeQuantity(true);
        setTimeout(() => {
            setChangeQuantity(false);
        }, 300)
    }, [totalItems])

    return (
        <li className={classes.item}>
            <button className={(activeTab === tabNumber) ? classes.active : ''} onClick={() => changeActiveTab(tabNumber)}>
                {badge && <span className={badgeClass}>{totalItems}</span>}
                <p className={classes["top-curve"]}></p>
                <span className={classes.icon}>{icon}</span>
                <p className={classes["bottom-curve"]}></p>
            </button>
        </li>
    )
}

export default SidebarItem;