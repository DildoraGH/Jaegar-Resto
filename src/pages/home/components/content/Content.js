import classes from './Content.module.css';
import Sort from '../sort/Sort';
import CardList from '../card-list/CardList';

const Content = ({mealList, changeSort, isFoodLoading}) => {

  return (
    <div className='container'>
      <div>
        <div className={classes['content-header']}>
          <h5>Choose Dishes</h5>
          <Sort changeSort={sortBy => changeSort(sortBy)}/>
        </div>
        <CardList mealList={mealList} isFoodLoading={isFoodLoading}/>
      </div>
    </div>
  )
}

export default Content;