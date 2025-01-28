var countEl = document.getElementById('count-el');
var btn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn')
let saveEl = document.getElementById('save-el')
 let count = 0;
btn.addEventListener('click', function(){
   count +=1;
   countEl.textContent = count ;
})

saveBtn.addEventListener('click', function(){
    saveEl.textContent += count + ' - ';
    count = 0;
    countEl.textContent = 0; 
 })


