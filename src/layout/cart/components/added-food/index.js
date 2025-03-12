import classes from './index.module.css';
import deleteIcon from '../../../../assets/icons/delete.png';
import { forwardRef, useContext } from 'react';
import { contextData } from '../../../../services/context-store';

const AddedFood = forwardRef(({item}, ref) => {
    const { addToStore, removeFromStore } = useContext(contextData);
    const totalPrice = (item.quantity * item.price).toFixed(2);
    return (
        <div className={classes.card} key={item.id} ref={ref}>
            <div className={classes['card-content']}>
                <div className={classes['card-left']}>
                    <img src={item.url} alt="" />
                    <div>
                        <button onClick={() => removeFromStore(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToStore(item)}>+</button>
                    </div>
                </div>
                <div className={classes['card-right']}>
                    <h4>{item.title}</h4>
                    <div>
                        <span>$ {item.price}</span>
                        <span>$ {totalPrice}</span>
                    </div>
                </div>
            </div>
            <div className={classes['card-footer']}>
                <input type="text" placeholder='Order Note...' />
                <button onClick={() => removeFromStore(item.id, true)}><img src={deleteIcon} alt="" /></button>
            </div>
        </div>
    )
})

export default AddedFood