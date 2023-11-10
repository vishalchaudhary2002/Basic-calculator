let result="";
//target a all buttons
let buttons=document.querySelectorAll(".btn");
//create a Array of all buttons and iterate through forEach loop
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        //if user click on = button
        if(e.target.innerHTML=="="){
            result=eval(result);
            document.querySelector('input').value=result;
        }

        // if user click on clear button
        else if(e.target.innerHTML=="Clear"){
            result="";
            document.querySelector('input').value=result;
        }


        else{
            result=result+e.target.innerHTML;
            document.querySelector('input').value=result;
        }
    })
})
