   var arrq;
   var loq=localStorage.getItem('loq');
    
    if(loq==null){
        var arrq=[]
    } else{
       
        var floq=JSON.parse(loq);
        myarr=floq.qlist;
        var arrq=myarr;
    }


document.getElementById("btn").addEventListener("click",function(){
    var fquestion= new Object();
    fquestion.qstatement=document.getElementById("q-stat").value;
    fquestion.op1=document.getElementById("op1").value;
    fquestion.op2=document.getElementById("op2").value;
    fquestion.op3=document.getElementById("op3").value;
    fquestion.op4=document.getElementById("op4").value;
    fquestion.answer=document.getElementById("answer").value;
    fquestion.answerdeet=document.getElementById("answer-d").value;
    
    arrq.push(fquestion);
    console.log(arrq);
    
    var qobj= new Object();
    qobj.qlist=arrq;
    console.log(qobj)
    localStorage.setItem('loq',JSON.stringify(qobj));

    
    



    // var loq=localStorage.getItem('loq');
    // var floq=JSON.parse(loq);
    // myarr=floq.qlist;
    // console.log(myarr)

    


    
})

