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
        removeListItem();

    });

    clearList = () =>{
        let listParent = document.getElementById("todoList");
        while (listParent.hasChildNodes()){
            listParent.removeChild(listParent.firstChild); //clearList 
        }
    }

    drawList = () =>{

        let listParent = document.getElementById("todoList");

        for(let i = 0; i < todoArray.length; i++){
            let newElement = document.createElement("li");
            newElement.innerText = todoArray[i];
            listParent.appendChild(newElement);
        }

    }

    removeListItem = () =>{

        let listParent = document.getElementById("todoList");
        
        listParent.addEventListener('contextmenu', function(evt) {

            evt.preventDefault();
            alert('Remove list item?');
            listParent.remove(listParent.firstChild);
            
        });

        
    }
}
