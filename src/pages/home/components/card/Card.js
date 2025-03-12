import { forwardRef, useContext } from 'react'
import classes from './Card.module.css'
import Button from '../../../../components/button'
import { contextData } from '../../../../services/context-store'

const Card = forwardRef(({ meal }, ref) => {
    const { addToStore } = useContext(contextData);
    return (
        <div className='col-sm-6 col-xl-4 col-xxl-3' ref={ref}>
            <div className={classes.card}>
                <div className={classes['card-item']}>
                    <img src={meal.url} alt={meal.title} />
                    <h6>{meal.title}</h6>
                    <span>$ {meal.price}</span>
                    <p>{meal.available} bowls available</p>
                    <Button title="Add" handleClick={() => addToStore(meal)} />
                </div>
            </div>
        </div>
    )
})

export default Card