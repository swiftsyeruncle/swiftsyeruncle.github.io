document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

initApplication = () =>{

    let todoArray = [];

    let buttonElement =  document.getElementById("btnAddTask");
    
    buttonElement.addEventListener("click", function(evt){

        evt.preventDefault();
        
        let inputElement = document.getElementById("inputTask");
        todoArray.push(inputElement.value);     
        
        clearList(); //calls the clearList function
        drawList(); //calls the drawList function
    });

    clearList = () =>{
        let listParent = document.getElementById("todoList");
        while (listParent.hasChildNodes()){
            listParent.removeChild(listParent.firstChild); //clears the list
        }
    }

    drawList = () =>{

        let listParent = document.getElementById("todoList");

        for(let i = 0; i < todoArray.length; i++){
            let newElement = document.createElement("li"); //creates the list element 
            newElement.innerText = todoArray[i];

            newElement.addEventListener("contextmenu", function(evt) {

                evt.preventDefault();

                let menuDisplayed = false;
                let menuBox = null;
                
                window.addEventListener("contextmenu", function() {
                    let left = arguments[0].clientX;
                    let top = arguments[0].clientY;
                            
                    menuBox = window.document.querySelector("#menu");
                    menuBox.style.left = left + "px";
                    menuBox.style.top = top + "px";
                    menuBox.style.display = "block";
                            
                    arguments[0].preventDefault();
                            
                    menuDisplayed = true;
                }, false);
                    
                window.addEventListener("click", function() {
                    if(menuDisplayed == true){
                        menuBox.style.display = "none"; 
                        removeListItem(newElement.innerText);
                    }
                }, true);
            });

        listParent.appendChild(newElement); //uses the appendChild method to add new list item

    }

    removeListItem = (itemToRemove) =>{

        const index = todoArray.indexOf(itemToRemove);

        if (index !== -1) {
            todoArray.splice(index, 1); //As long as our list has an item in it, you can remove that item. Uses the splice method. 
        }

        clearList(); //Call back to the clearList function
        drawList(); //Call back to the drawList function
            
        }     
        
    }
}
