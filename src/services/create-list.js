import randomWords from 'random-words';

export const createList = () => {
    const list = [];
    for (let i = 1; i <= 12; i++) {
        const food = {
            id: Date.now() + i,
            title: randomWords(6).join(' '),
            price: randomPrice(),
            available: randomNumber(),
            url: `https://picsum.photos/id/${randomNumber()}/300/300`
        }
        list.push(food);
    }
    return list;
}

const randomPrice = () => {
    return (Math.random() * (99 - 5 + 1) + 5).toFixed(2)
}
const randomNumber = () => {
    return Math.floor(Math.random() * (99 - 5 + 1) + 5)
}