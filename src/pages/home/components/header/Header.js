import Search from '../search/Search';
import classes from './Header.module.css';

const Header = ({ searchFood }) => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <div>
          <h3>Jaegar Resto</h3>
          <span>Tuesday, 2 Feb 2021</span>
        </div>
        <Search searchFood={food => searchFood(food)}/>        
      </div>
    </header>
  )
}

export default Header