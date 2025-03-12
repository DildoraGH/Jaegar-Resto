import { useEffect, useState } from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import { createList } from '../../services/create-list';

const sortList = (sortBy, setMealList, list) => {
    if (sortBy.toLowerCase() === 'title') {
        setMealList([...list.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        })])
    } else {
        setMealList([...list.sort((a, b) => a.price - b.price)]);
    }
}

const Home = () => {
    const [mealList, setMealList] = useState([]);
    const [activeMenu, setActiveMenu] = useState('Hot Dishes');
    const [sortBy, setSortBy] = useState('');
    const [foodSearch, setFoodSearch] = useState('');
    const [isFoodLoading, setIsFoodLoading] = useState(false);

    useEffect(() => {
        if (!localStorage[activeMenu]) {
            const foodList = JSON.stringify(createList());
            localStorage.setItem(activeMenu, foodList);
        }
        setMealList([]);
        setTimeout(() => {
            setIsFoodLoading(true);
        }, 150);
        setTimeout(() => {
            let localFoodList = JSON.parse(localStorage.getItem(activeMenu));
            if (foodSearch) {
                localFoodList = localFoodList.filter(food => food.title.toLowerCase().includes(foodSearch.toLowerCase()))
            }
            if (sortBy) {
                sortList(sortBy, setMealList, localFoodList)
            } else {
                setMealList([...localFoodList]);
            }
            setIsFoodLoading(false);
        }, 800);
    }, [activeMenu]);

    useEffect(() => {
        let localFoodList = JSON.parse(localStorage.getItem(activeMenu))
        if (sortBy) {
            if (foodSearch) {
                localFoodList = localFoodList.filter(food => food.title.toLowerCase().includes(foodSearch.toLowerCase()))
            }
            sortList(sortBy, setMealList, localFoodList)
        }
    }, [sortBy]);

    useEffect(() => {
        let localFoodList = JSON.parse(localStorage.getItem(activeMenu));
        if (sortBy) {
            if (sortBy.toLowerCase() === 'title') {
                localFoodList = [...localFoodList.sort((a, b) => {
                    if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1;
                    return 0;
                })]
            } else {
                localFoodList = [...localFoodList.sort((a, b) => a.price - b.price)]
            }
        }
        setMealList([...localFoodList.filter(food => food.title.toLowerCase().includes(foodSearch.toLowerCase()))])
    }, [foodSearch]);

    return (
        <>
            <Header searchFood={food => setFoodSearch(food)} />
            <Menu activeMenu={activeMenu} changeMenu={menu => setActiveMenu(menu)} />
            <Content mealList={mealList} changeSort={sortBy => setSortBy(sortBy)} isFoodLoading={isFoodLoading} />
        </>
    )
}

export default Home;