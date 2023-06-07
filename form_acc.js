var formAcc = document.getElementById("formAcc");
if(window.innerWidth <= 450){
  formAcc.style.width = "95%";
}
else{
  formAcc.style.width = "450px";
}

if(window.innerHeight < 520){
  formAcc.classList.remove("center-container");
  formAcc.style.margin ="auto";
}
else{
  formAcc.classList.add("center-container");
}

document.onreadystatechange = function(){
if(document.readyState !== "complete"){
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#spinner").style.visibility = "visible";
    //disableScrolling();
}
else{
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    //enableScrolling();
}
}