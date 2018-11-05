document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

initApplication = () =>{
    let myIndex = 0;
    carousel();
    
    function carousel() {
        let i;
        let x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 3 seconds
    }
}

function writeName() {
    let welcomeMsg = document.getElementById('welcome');
    let name = document.getElementById('name');
    let formContent = document.getElementById('subForm');

    welcomeMsg.innerHTML = "Thanks for joining the family, " + name.value + "."; // Submits welcome message
    formContent.innerHTML = ""; // Removes form on submit
}

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    
    else {
        x.className = "topnav";
    }
}