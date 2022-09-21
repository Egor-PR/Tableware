const btn = document.querySelectorAll('.btn')
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        this.innerHTML = (this.innerHTML === 'ДОБАВЛЕНО') ? this.innerHTML = 'ДОБАВИТЬ В КОРЗИНУ' : this.innerHTML = 'ДОБАВЛЕНО';
    })
}

const data = [
    {
        id: 1,
        name: 'Коптильня 10л',
        price: 1200
    },
    {
        id: 2,
        name: 'Коптильня 20л',
        price: 1400
    },
    {
        id: 3,
        name: 'Коптильня 30л',
        price: 1600
    },
]

const count = document.querySelectorAll('[content__block]')
let sum = 0;

//  console.log(data[0].price)
// const result = data.find(el => el.price ===2);
// console.log('result',result);
// const sum = document.querySelector('.hero__sum');
// const sum = 0;
// for (let i=0; i<data.length; i++){
//     console.log(i)
// }


   // const key = data.find (el=> el.price===1200);

    // var num1,result;
    // num1=  getElementById('1').data;
   
    // num1 = parseInt(num1);
    //  result = price+ price ;
    // document.getElementById('sum').innerHTML = result

//  num2=document.getElementById('2').data;
//     num2 =parseInt(num2);
//     num3=document.getElementById('3').data;
//     num3 =parseInt(num3);
//     result = num1+num2;
//     document.getElementById('sum').innerHTML = result

// let someData = data.filter(item=>item.id<4);
// console.log(someData.length);


// const count = document.querySelectorAll('[content__block]');
// if (count){
//     count.forEach(coun=>{
//         count.addEventListener('click',e =>{
//             const target = e.target;
//             if(target.closest('.cont ent__block-button')){
//                 let value = parseInt(target.closest('.count').querySelector('input').value);

//                 if(target.classList.count('add')){
//                     value++;
//                 }
//                 target.closest('.count').querySelector('input').value = value;
//             }
//         })
//     })
// }



 document.onclick = event => {
    // console.log(event.target.classList);
    if(event.target.classList.contains('add')){
        plusFunction(event.target.dataset.id);
    }
 };
 const plusFunction = id=>{
    data[id]['price']++;
    renderData();
    
 }
 const renderData = ()=>{
    console.log(data);
 }
 renderData();
 let j = 0;
document.addEventListener('click', function (){
    data[0]['price'] +data[1]['price']
    console.log('click');
}); 
//  let  add = document.querySelector("btn");
//  let sum = document.querySelector("sum");
//  add.addEventListener('click', function(){
// });