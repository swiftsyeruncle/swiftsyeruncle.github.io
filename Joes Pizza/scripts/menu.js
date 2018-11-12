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
        let x = document.getElementsByClassName("mySlides"); // Gets elements under the class name "mySlides"
        for (i = 0; i < x.length; i++) { // For loop runs through each quote, displays one, then the other and so on... 
           x[i].style.display = "none";  
        }
        myIndex++; // Adds to myIndex variable
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 3 seconds
    }
}

function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let welcomeMsg = document.getElementById('welcome');
    let nameSubmit = document.getElementById('name');
    let formContent = document.getElementById('subForm');

    let emailReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (name === '' || email === ''){
        alert("Please fill all fields!");
        return false;
    }

    else if (!(email.match(emailReg))){
        alert("Invalid Email!");
        return false;
    }

    else{
        welcomeMsg.innerHTML = "Thanks for joining the family, " + nameSubmit.value + "."; // Submits welcome message
        formContent.innerHTML = ""; // Removes form on submit
    }
}

let element = document.getElementById("btn_id");

element.addEventListener("click", function(evt){
    evt.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    validation()

})

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    
    else {
        x.className = "topnav";
    }
}


