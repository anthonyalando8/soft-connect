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

