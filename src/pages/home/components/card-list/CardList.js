import classes from './CardList.module.css'
import Card from '../card/Card'
import LinearProgress from '@material-ui/core/LinearProgress';
import FlipMove from 'react-flip-move';

const CardList = ({ mealList, isFoodLoading }) => (
    <div className={`${classes['content-body']} row`}>
        {
            mealList &&
            <FlipMove className='row'>
                {
                    mealList.map(meal => {
                        return <Card key={meal.id} meal={meal} />
                    })
                }
            </FlipMove>
        }
        {
            isFoodLoading && <div className={classes.loader}><LinearProgress color='primary' /></div>
        }
    </div>
)

export default CardList