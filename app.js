var loq=localStorage.getItem('loq');
const questionNumber = document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionText=document.querySelector(".option-text");
const class1=document.querySelector(".class1");
const end=document.querySelector(".end");

// let questionCounter=0;

//let availableQuestions=[];
// let availableOptions=[];


// function setAvailableQuestions(){
// 	const totalQuestion = quiz.length;
// 	for(let i=0; i<totalQuestion; i++){
// 	availableQuestions.push(quiz[i])
// 	}
// }


if (loq!=null) {
   
    var floq=JSON.parse(loq);
    availableQuestions=floq.qlist;
    console.log(availableQuestions);
    var questionCounter = 0
    var countlist=[]
	var currentQuestion;
	var opt;
    function getNewQuestion(){
           
        var qn=Math.floor(Math.random()*availableQuestions.length)
        if(!(countlist.includes(qn)) ){

             currentQuestion = availableQuestions[qn];
        	 var ques="Q:"+currentQuestion.qstatement;
            // var op= "a)"+question.op1+"<br>b)"+question.op2+"<br>c)"+question.op3+"<br>d)"+question.op4;
            // var ans=question.answer;
            // document.getElementById("mybtn").innerHTML="Next"
            // document.getElementsByClassName("question-number")[0].innerHTML=index+1;
            // document.getElementsByClassName("question-text")[0].innerHTML=ques;
            // document.getElementsByClassName("option-text")[0].innerHTML=op;
            
			questionNumber.innerHTML = "Question " + (questionCounter+1) + " of " + availableQuestions.length;
			questionText.innerHTML = ques;
			optionText.innerHTML="";
			for(let i=0; i<4;i++){
				const option1 = document.createElement("div");
				// option1.innerHTML = currentQuestion.options[i];
				option1.id = i;
				option1.className = "option";
				optionText.appendChild(option1);
				option1.setAttribute("onclick", "getResult(this)");
			}
			 opt=optionText.childNodes;
			opt[0].innerHTML=currentQuestion.op1;
			opt[1].innerHTML=currentQuestion.op2;
			opt[2].innerHTML=currentQuestion.op3;
			opt[3].innerHTML=currentQuestion.op4;

			
           
            


            
            
            
            
            countlist.push(qn);
            questionCounter++;
        }else{
            if(availableQuestions.length<10 && questionCounter==availableQuestions.length){
             quizOver()  
            }else{
                getNewQuestion()
            }
           
        }

       
        console.log(qn+"haha");
        console.log(countlist)

    
    }
    if (questionCounter<10) {
        
        document.getElementById("mybtn").addEventListener("click",getNewQuestion)  
    }




	function getResult(element){
		const id = parseInt(element.id);
		console.log(id+"this");
		var chosenOpt=opt[id].innerHTML;
		
		if(chosenOpt===currentQuestion.answer){
			element.classList.add("correct");
		}
		else{
			element.classList.add("wrong");
			const optionLen = optionText.children.length;
			for(let i=0;i<4;i++){
			if(opt[parseInt(optionText.children[i].id)].innerHTML === currentQuestion.answer){
				optionText.children[i].classList.add("correct");
			}
			}
		}
		unclickoptions();
	}
	
	 
	function unclickoptions(){
		const optionLen = optionText.children.length;
		for(let i=0;i<4;i++){
			optionText.children[i].classList.add('answered')
		}
	}
	
	function quizOver(){
		class1.classList.add("hide");
		end.classList.remove("hide");
	}
	

 window.onload = function(){
	
 	getNewQuestion();
 }


 }// if loq 



























// function getNewQuestion(){
	
// 	// const questionIndex = availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
// 	// currentQuestion = questionIndex;
// 	currentQuestion = availableQuestions[questionCounter];
// 	questionText.innerHTML = currentQuestion.question;
	
	
// 	 // get options
// 	optionText.innerHTML='';
// 	const optionLen = currentQuestion.options.length;
	
// 	for(let i =0; i<optionLen; i++){
// 		availableOptions.push(i)
// 	}
	
	

// 	questionCounter++
// }




// function next(){
// 	if(questionCounter === quiz.length){
// 		quizOver();
// 	}
// 	else{
// 		getNewQuestion();
// 	}
// }


