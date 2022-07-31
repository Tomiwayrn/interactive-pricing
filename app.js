//declrarations

const toggleBtn = document.querySelector(".togglebtn-container")
const toggle = document.querySelector(".togglebtn");
const slider = document.querySelector(".slider");
const sliderAmount = document.querySelector(".month-amount");
const pageview = document.querySelector(".pageview");
discountBoolean = false;




// to make modern toggle button with classlist in css  

toggleBtn.addEventListener("click" , ()=>{

  if (discountBoolean == true){
   
    sliderAmount.textContent =  "$" + parseFloat(slider.value).toFixed(2)
   
  };

  
  toggleBtn.classList.toggle("backgroundbtn");
  
  toggle.classList.toggle("toggleslider");
  
  discount();
  
});




//discount fucntionality

function discount(){
  
    if(toggle.classList.contains("toggleslider")){
  
        sliderAmount.textContent =  "$" + parseFloat(slider.value) *0.25 .toFixed(2);
  
        discountBoolean = true;
    }
  
    else discountBoolean = false
  
  
}




// The Slider functionality 

slider.addEventListener("input" , ()=>{
  
  
    pageviewFunc();
   
   if(discountBoolean == false){
    sliderAmount.textContent =  "$" + parseFloat(slider.value).toFixed(2);
   }
   else {discount()
    };

    value = (slider.value/slider.max)*100 ;
    min =  event.target.min;
     max =  event.target.max;
   
     //animated slider
     
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, 
                                                            hsl(224, 65%, 95%) 0%)`;
                                                      
   });

   //function for the different page view ranges

function pageviewFunc(){

    if ((slider.value >0)&&(slider.value <=8)){
        pageview.textContent = "10k"
    
    }
    
    else if ((slider.value >8)&&(slider.value <=12)){
        pageview.textContent = "50k"
    
    }
    
    else if ((slider.value >12)&&(slider.value <=16)){
        pageview.textContent = "100k"
    
    }
    
    else if ((slider.value >16)&&(slider.value <=24)){
        pageview.textContent = "500k"
    
    }
    
    else {
        pageview.textContent = "1m"
    }
    
    };