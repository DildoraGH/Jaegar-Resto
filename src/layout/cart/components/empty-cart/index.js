import { useContext } from 'react';
import orderImg from '../../../../assets/images/order-img.png';
import Button from '../../../../components/button';
import classes from './index.module.css';
import { contextData } from '../../../../services/context-store';

const EmptyCart = () => {
    const { changeActiveTab } = useContext(contextData);
    return (
        <div className={`${classes['empty-cart']}`}>
            <h4>Orders</h4>
            <img src={orderImg} alt="No order" />
            <h5>No Order</h5>
            <span>Go find the products you like</span>
            <Button title="To Order" handleClick={() => changeActiveTab(2)} />
        </div>
    )
}

export default EmptyCart