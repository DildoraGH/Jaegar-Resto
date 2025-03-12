import { createContext, useState } from "react"

export const contextData = createContext('');

const getList = () => {
    if (localStorage['order-list']) {
        return JSON.parse(localStorage['order-list'])
    }
    return [];
}
const ContextProvider = ({ children }) => {

    const [activeTab, setActiveTab] = useState(2);
    const [orderList, setOrderList] = useState(getList());

    const addToStore = item => {
        const parsedOrderList = getList();
        const idx = parsedOrderList.findIndex(food => food.id === item.id);
        if (idx !== -1) {
            parsedOrderList[idx].quantity++;
            localStorage.setItem('order-list', JSON.stringify(parsedOrderList));
        } else {
            localStorage.setItem('order-list', JSON.stringify([...parsedOrderList, { ...item, quantity: 1 }]));
        }
        setOrderList(JSON.parse(localStorage.getItem('order-list')));
    }
    const removeFromStore = (id, all) => {
        const parsedOrderList = getList();
        const idx = parsedOrderList.findIndex(food => food.id === id);
        if (idx === -1) {
            return
        }
        if (all) {
            parsedOrderList.splice(idx, 1);
        }else{
            if(parsedOrderList[idx].quantity < 2){
                parsedOrderList.splice(idx, 1);
            }else{
                parsedOrderList[idx].quantity --;
            }
        }
        localStorage.setItem('order-list', JSON.stringify(parsedOrderList));
        setOrderList(JSON.parse(localStorage.getItem('order-list')));
    }
    const resetOrderList = () => {
        localStorage.clear('order-list');
        setOrderList(getList());
    }
    const changeActiveTab = (id) => setActiveTab(id)

    const value = {
        activeTab,
        orderList,
        changeActiveTab,
        addToStore,
        removeFromStore,
        resetOrderList
    }
    return (
        <contextData.Provider value={value}>
            {children}
        </contextData.Provider>
    )
}

export default ContextProvider;