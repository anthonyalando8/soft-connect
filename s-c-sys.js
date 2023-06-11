
//function to create an alert dialog, used across all pages.
function showAlert(message, head) {
    disableScrolling();
    // Create the alert dialog elements dynamically
    var dialogContainer = document.createElement("div");
    dialogContainer.classList.add("alert-dialog");
    dialogContainer.classList.add('center-container');
  
    var dialogContent = document.createElement("div");
    dialogContent.classList.add("alert-dialog-content");
  
    var dialogHead = document.createElement('div');
    dialogHead.classList.add('dialog-head');
    dialogHead.textContent = head;

    var dialogMessage = document.createElement("p");
    dialogMessage.textContent = message;

    var dialogButton = document.createElement('button');
    dialogButton.classList.add('dialog-button');
    dialogButton.textContent = 'Ok';
    dialogButton.addEventListener('click', function(){
        dialogContainer.remove();
        enableScrolling();
    });

  
    // Append the message to the content container
    dialogContent.appendChild(dialogHead)
    dialogContent.appendChild(dialogMessage);
  
    // Append the content container to the dialog container
    dialogContainer.appendChild(dialogContent);
    dialogContainer.appendChild(dialogButton);
    // Append the dialog container to the document body
    document.body.appendChild(dialogContainer);
  
    // Prevent canceling the dialog
    dialogContainer.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }
  

  //stop scrolling
function disableScrolling(){
    document.querySelector('#body').classList.add('stop-scrolling');
}
  //enable scrolling
function enableScrolling(){
document.querySelector('#body').classList.remove('stop-scrolling');
}
var dialogBox;
function showProgressBar(text){

    dialogBox = document.createElement("div");
    dialogBox.classList.add("progress-dialog");
    dialogBox.classList.add('center-container');
  
    var dialogContentBox = document.createElement("div");
    dialogContentBox.classList.add("progress-content");

    var progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.classList.add('center-content');
    progressBar.innerHTML = '<i class="fa-solid fa-spinner"></i>';

    var progressMessage = document.createElement("div");
    progressMessage.classList.add('center-content')
    progressMessage.textContent = text;

    dialogContentBox.appendChild(progressBar);
    dialogContentBox.appendChild(progressMessage);
    dialogBox.appendChild(dialogContentBox);

    document.body.appendChild(dialogBox);

}
function removeDialog() {
    if (dialogBox) {
        dialogBox.parentNode.removeChild(dialogBox);
    }
}