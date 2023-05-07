let menu_Tea = [
    {
        
        category: 'Tea',
        Title:"Hot Chai",
        Price:8.50,
        desc:'Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy. An iconic chai cup.'
    },
    {
        
        category: 'Tea',
        Title:"Royal English Breakfast Tea",
        Price:4.99,
        desc:'A select blend of rich, full-leaf black teas from India and Sri Lanka sweetened with liquid cane sugar and topped with steamed milk and a velvety foam. Each and every sip—smooth and silky.'
    },
    {
        
        category: 'Tea',
        Title:'Matcha Tea Latte',
        Price:7.99,
        desc:'Smooth and creamy matcha sweetened just right and served with steamed milk. This favorite will transport your senses to pure green delight.'
    },
    {
        
        category: 'Coffee',
        Title:'Caffè Americano',
        Price:4.99,
        desc:'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.'
    },
    {
        
        category: 'Coffee',
        Title:'Featured Dark Roast Coffee',
        Price:4.99,
        desc:'This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.'
    },
    {
        
        category: 'Coffee',
        Title:'Espresso',
        Price:7.99,
        desc:'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.'
    },
    {
        
        category: 'Coffee',
        Title:'Cappuccino',
        Price:5.99,
        desc:'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.'
    },
    {
        
        category: 'Coffee',
        Title:'Blonde Vanilla Latte',
        Price:4.99,
        desc:'Extra-smooth Starbucks® Blonde Espresso, velvety steamed milk and vanilla syrup come together to create a delightful new twist on a beloved espresso classic. An ideal cup for those who prefer a lighter-roasted coffee.'
    },
    {
        
        category: 'Coffee',
        Title:'Blonde Vanilla Latte',
        Price:6.99,
        desc:'Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.'
    },
    {
        
        category: 'Frappuccino',
        Title:'Espresso Frappuccino',
        Price:9.99,
        desc:'Coffee is combined with a shot of espresso and milk, then blended with ice to give you a nice little jolt and lots of sipping joy.'
    },
     {
        
        category: 'Frappuccino',
        Title:'Matcha Frappuccino',
        Price:9.99,
        desc:'This blend of sweetened premium matcha green tea, milk and ice—topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.'
    },
     {
        
        category: 'Frappuccino',
        Title:'Mocha Frappuccino',
        Price:9.99,
        desc:'Mocha sauce, Frappuccino® Roast coffee, milk and ice all come together for a mocha flavor that will leave you wanting more. To change things up, try it affogato-style with a hot espresso shot poured right over the top.'
    },

]

const testww = document.querySelector('.testing')
console.log('wtffff');
console.log(testww);




const diplay = (arr)=>{
    arr.forEach((item)=>{
    const newItemName = document.createElement('p')
    const newPrice = document.createElement('code')
    newPrice.innerText = item.Price;
    newItemName.innerText = item.Title;
    testww.appendChild(newItemName);
    testww.appendChild(newPrice);
 })
}
diplay(menu_Tea);

const  filter = (menu)=>{
 let newMenu = menu_Tea.filter((item)=> item.category === menu);
 testww.innerHTML ="";
diplay(newMenu);
 console.log(newMenu);
}

// const filterTea = (menu) =>{
//     let newMenu = menu_Tea.filter((item)=> item.category === menu)
// }
const reset = (menu) =>{
    let newMenu = menu_Tea
    testww.innerHTML = '';
    diplay(newMenu)
}

let btnCoffee = document.querySelector('.btn-coffee')
let btnReset = document.querySelector('.btn-reset')
let btnTea = document.querySelector('.btn-tea')

btnCoffee.addEventListener('click',()=>{ filter('Frappuccino')})
btnReset.addEventListener('click',()=>{ reset()})
btnTea.addEventListener('click',()=>{ filter('Tea')})