import classes from './index.module.css';
import backArrow from '../../../../assets/icons/back-arrow.png';
import { useContext, useState } from 'react';
import { contextData } from '../../../../services/context-store';
import Button from '../../../../components/button';
import AddedFood from '../added-food';
import FlipMove from 'react-flip-move';

const FullCart = ({ handleClick }) => {
    const [activeBtn, setActiveBtn] = useState(1);
    const { changeActiveTab, orderList } = useContext(contextData);
    const totalPrice = orderList.reduce((initial, obj) => initial + (obj.quantity * obj.price), 0).toFixed(2);

    return (
        <div className={classes['full-cart']}>
            <div className={classes.header}>
                <div className={classes.back}>
                    <button onClick={() => changeActiveTab(2)}><img src={backArrow} alt="arrow" /></button>
                    <span>Orders</span>
                </div>
                <div className={classes.btns}>
                    <button className={activeBtn === 1 ? classes.active : ''} onClick={() => setActiveBtn(1)}>
                        Dine In
                    </button>
                    <button className={activeBtn === 2 ? classes.active : ''} onClick={() => setActiveBtn(2)}>
                        To Go
                    </button>
                    <button className={activeBtn === 3 ? classes.active : ''} onClick={() => setActiveBtn(3)}>
                        Delivery
                    </button>
                </div>
            </div>
            <div className={classes.body}>
                <FlipMove>
                    {
                        orderList.map(item => (
                            <AddedFood item={item} key={item.id} />
                        ))
                    }
                </FlipMove>
            </div>
            <div className={classes.footer}>
                <div>
                    <p><span>Discount</span> $0</p>
                    <p><span>Total Price</span> ${totalPrice}</p>
                </div>
                <Button title="Continue to Payment" handleClick={handleClick} />
            </div>
        </div>
    )
}

export default FullCart