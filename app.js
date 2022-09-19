'use strict';

const colors=['goldenrod','darkorange','orangered','red','crimson'];
const counts=[...document.getElementsByClassName('count')];
let current=0;
const body=document.querySelector('body');
 
body.style.backgroundColor=colors[current]
counts.forEach(count=>count.style.color=colors[current]);

const countDown=()=>{
    const date=new Date()
    const ny=new Date(date.getFullYear()+1,0,1);
    const gap=ny-date;
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    const month=day*(365/12)
   counts.forEach(count=>{
    let id=count.id;
    if(id==='months')count.textContent=Math.floor(gap/month)
    if(id==='days')count.textContent=Math.floor(((gap)%month)/day)
    if(id==='hours')count.textContent=Math.floor((gap%day)/hour)
    if(id==='minutes')count.textContent=Math.floor((gap%hour)/minute)
    if(id==='seconds'){
        count.textContent=Math.floor((gap%minute)/second)
        if(count.textContent==59)current++
    }
    if (current>counts.length-1) current=0
      body.style.backgroundColor=colors[current];
   count.style.color=colors[current]
   })
 
}
countDown()
setInterval(countDown,1000)