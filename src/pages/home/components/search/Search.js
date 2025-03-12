import classes from './Search.module.css';
import search from '../../../../assets/icons/search.png';

const Search = ({ searchFood }) => {
    return (
        <div className={classes.header__search}>
            <input onChange={e => searchFood(e.target.value.trim())} type="text" placeholder='Search for food, coffe, etc..' />
            <img src={search} alt="" />
        </div>
    )
}

export default Search