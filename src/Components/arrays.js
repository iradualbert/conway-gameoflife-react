const items  = [
    { name: 'Bike', price: 100 },
    { name: 'Tv', price: 100 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 750 },
    { name: 'Keyboard', price: 25 },
]

// forEach every some map filter reduce includes  find

const filteredItems =  items.filter( item => item.price >=200)
const mappedItems = items.map(item => item.price)


const foundItem =   items.find( item =>  item.price === 100 )
const hasInexpensiveItem = items.some( item => item.price <= 100 ) // opposite of array.every


const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0)

const hasBook = items.includes(items[3])

console.log(filteredItems)
console.log(mappedItems)

console.log(foundItem)

console.log(hasInexpensiveItem)
console.log(total)

console.log(hasBook)