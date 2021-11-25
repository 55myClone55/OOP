// class User{
//     constructor(title){
//         this.title = title
//     }
//     set name(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
// }

// let a = new User('from')
// a.name = 88
// console.log(a)
// console.log(a.name)
const cart = {
    'p234234234':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
        'price':12000
    },
    'p234234234000':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
        'price':13000
    },
    'p2342342349':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
        'price':1200
    },
    'p234234234665':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
         'price':120003
    },
    'p234234234342':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
        'price':12000.34
    },
    'p2342342':{
        'name':'men watch SUPER F-7657-D-8KJK',
        'url':'#',
        'image':'https://content.rozetka.com.ua/goods/images/base_action/17671376.jpg',
        'price':1200.01
    },
}
let out = `<div class="pricing-table row">`;
for (let key in cart) {
  out += `<div class="col col-md-6 col-lg-4">`;  
  out += `<div class="package featured text-center">`;  
  out += `<h2>${cart[key]['name']}</h2>`;
  out += `<img src="${cart[key]['image']}">`;
  out += `<p class="price">${cart[key]['price']}UAH</p>`;
  out += `<button class="to-cart button-primary" data-articul="${key}"> IN BASKET</button>`;
  out += `</div>`;
  out += `</div>`;
}
  out += `</div>`;
document.querySelector('.goods').innerHTML = out;
 
const data = {}
//console.log( cart[articul])
document.querySelector('.goods').addEventListener('click', event => {
if(event.target.classList.contains('to-cart')){
    let articul = event.target.dataset['articul'];
    if(data[articul] !== undefined){
        data[articul]['count']++
    }
    else{
        data[articul] = cart[articul];
        //console.log( cart[articul])
        data[articul]['count'] = 1
    }
    localStorage.setItem('cart',JSON.stringify(data))
    
}
})
 
