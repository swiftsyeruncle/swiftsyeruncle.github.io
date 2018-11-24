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
                alert("Remove list item?");
                removeListItem(newElement.innerText);
        });

        listParent.appendChild(newElement); //uses the appendChild method to add new list item

    }

    removeListItem = (itemToRemove) =>{

        const index = todoArray.indexOf(itemToRemove);

        if (index !== -1) {
            todoArray.splice(index, 1);
        }
        clearList();
        drawList();
            
        }     
        
    }
}
