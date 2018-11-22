document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

initApplication = () =>{

    var colors = ["red", "yellow", "blue", "green", "purple"];

    var element = document.getElementById("colorsList");

    for (let i = 0; i < colors.length; i++){

        var newElement = document.createElement("li");
        newElement.innerText = colors[i];
        newElement.addEventListener("click", function(){

            var bodyElement = document.getElementsByTagName("body") [0];
            bodyElement.style = "background-color:" + colors[i];
            
            
        });

        element.appendChild(newElement);

    }
    
}
