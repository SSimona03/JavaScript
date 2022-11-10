 let questionActive = document.querySelectorAll('.q-click');
 let questions = document.querySelectorAll('.q-ask');
 
 

 for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("active");
    

        let toShow = this.nextElementSibling;
        

        if (toShow.style.opacity === "1") {
            toShow.style.opacity = "0";
            this.firstElementChild.innerText ="+";
            toShow.style.transition = "200ms ease-in"
            
          } else {
            toShow.style.opacity = "1";
            this.firstElementChild.innerText ="-";

          }
      
    })
 }

