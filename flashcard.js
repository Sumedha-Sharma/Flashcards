
const card=document.querySelectorAll('.card_inner');
console.log(card)
card.forEach((card)=>{
    card.addEventListener('click',function(){
        card.classList.toggle('is-flipped');
        
    })
})
