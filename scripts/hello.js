document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

initApplication = () =>{
    let el = document.getElementById("rightOrWrong");
    console.log(el);

    el.addEventListener("change", function(){
        console.log(el.checked);
        let el2 = document.getElementById("result");
        el2.innerHTML = "checked: " + el.checked;
    });
}
