let runningTotal=0
let buffer = "0"
// the number before a user clicks an operatpr 
let previousOperator = null
const screen =document.querySelector('.result')

document.querySelector('.butt').addEventListener("click", function(event){
    buttonClick(event.target.innerText)
})
function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value)
    }else {
        handleNumber(value)
    }
    displayAnswer()  
}
function handleNumber(value){
    if (buffer==="0"){
        buffer=value
    } else {
        buffer+=value
    }  
}

function handleSymbol(){
    switch(value){
        case 'C': buffer ="0"; runningTotal=0; previousOperator= null; break; 
        case 'D': if (buffer.length===1){
            buffer = "0"
        } else { buffer= buffer.substring(0,buffer.length-1);}
        case '=': if (previousOperator=== null){
            return;
        }
        flushOperation(parseInt(buffer)); 
        previousOperator=null; 
        buffer=""+runningTotal;
        runningTotal=0;
        break;
        default: handleMath(value) 
        break;
    }

}
function handleMath (value){
    const intBuffer= parseInt(buffer)
    if (runningTotal ===0){
        runningTotal= intBuffer
    } else { flushOperation(intBuffer)}
    previousOperator=value
    buffer="0"

}
function flushOperation(intBuffer){
    if (previousOperator==="+"){runningTotal+=intBuffer}
    else if (previousOperator==="-"){runningTotal-=intBuffer}
    else if (previousOperator==="*"){runningTotal*=intBuffer}
    else {runningTotal/=intBuffer}

}
function displayAnswer(){
    screen.innerText = buffer
}
/*

<script>
        
//As long as the user did not press + || - || * || / || = Add whatever is pressed to string 1 (Check event.target.tagname)
// if the user clicked + || - || * || / Add whatever is pressed after it to string 2 (Check event.target.tagname)
// if the user clicked = && string1==='' || string2==='' (Check event.target.tagname)
// if the user cliced D --> delete the last character of string 1 or 2 (Check event.target.tagname)
// if the user clicked C --> make string1 and string 2 and result = 0 (Check event.target.tagname)
let string1= ''
let string2= ''
let finalResult = document.querySelector('.result')
let digit = document.querySelectorAll('.num')
let equalClicked = document.getElementById('OperatorEqual').clicked
let multiplyClicked = document.getElementById('OperatorMultiply').clicked
let divideClicked = document.getElementById('OperatorDivide').clicked
let minusClicked = document.getElementById('OperatorMinus').clicked
let plusClicked = document.getElementById('OperatorPlus').clicked
let deleteClicked = document.getElementById('OperatorDelete').clicked
let restartClicked = document.getElementById('OperatorRestart').clicked
document.querySelector('.num').addEventListener('click', function(event){
  string1+= event.target.innerText
  console.log(string1);
  result.value=string1
}) 



/*
while(0<=parseInt(digit.innerText)<10){
    string1+=digit
    finalResult = finalResult + parseInt(string1)
    if (multiplyClicked == true){
       string2+=digit
        if(string2===''){
            finalResult = finalResult + parseInt(string1)
        }
        finalResult = parseInt(string1)*parseInt(string2)
    }
    if (divideClicked==true){
        string2+=digit
        if(string2===''){
            finalResult = finalResult + parseInt(string1)
        }
        finalResult = parseInt(string1)/parseInt(string2)
    }
    if (plusClicked== true){
        string2+=digit
        finalResult = parseInt(string1)+parseInt(string2)
    }
    if (minusClicked==true){
        string2+=digit
        finalResult = parseInt(string1)-parseInt(string2)
    }
    if(deleteClicked==true){
       string1 = string1.slice(0, string1.length - 1)
       if (plusClicked==true || minusClicked== true || multiplyClicked == true || divideClicked == true){
           string2= string2.slice(0, string2.length - 1)
       }
    }
   if (equalClicked==true){
       console.log(finalResult)
   }

}
*/ 

/*
         document.querySelector('.clicks').addEventListener('click', function(event){
   event.target.innerText='CLICKED'
    if (event.target.tagName=== 'BUTTON'){
       alert(`you clicked on button ${event.target.innerText}`) 
    }
    event.stopPropagation()
}) 
*/ 

/*
if(document. getElementById('button'). clicked == true){
      alert("button was clicked");
     }
</script> 
*/
