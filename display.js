var loq=localStorage.getItem('loq');
if (loq!=null) {
   
    var floq=JSON.parse(loq);
    myarr=floq.qlist;
    console.log(myarr)
    for (let index = 0; index < myarr.length; index++) {
        const question = myarr[index];
        var ques="Q:"+question.qstatement
        var op= "a)"+question.op1+"<br>b)"+question.op2+"<br>c)"+question.op3+"<br>d)"+question.op4;
        var ans=question.answer
        var ansd=question.answerdeet
        var element=document.getElementById('f-area');
        const div=document.createElement('div');
         div.classList.add('card');
         div.innerHTML='<div class="card_inner"><div class="card-face front-face font-mon"><h2>'+ques+'</h2><h3>'+op+'</h3></div><div class="card-face back-face"><div class="card-content"><div class="card-header"><h2>'+ans+'</h2></div><div class="card-body"><p>'+ansd+'</p></div></div></div></div></div>';
         element.appendChild(div);


       
        var ques= question.qstatement+"<br>"+question.op1+"<br>"+question.op2+"<br>"+question.op3+"<br>"+question.op4;
      
        
    }
    
}
   
