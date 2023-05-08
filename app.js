import { menu_Tea } from "./Data.js";

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

