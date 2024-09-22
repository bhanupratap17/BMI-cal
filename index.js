const form = document.querySelector('#bmiForm');

// console.log(form);

form.addEventListener("submit",function(e){
   e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#bmiResult');

   if( height < 0 || isNaN(height))
   {
    results.innerText = "Please give a valid height."; 
   }else if(weight < 0 || isNaN(weight)){
    results.innerHTML="Please give a valid Weight.";
   }
   else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

   }
   
})
