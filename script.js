const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You need to write something !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // X symbol
    li.appendChild(span);
   
  }
  inputBox.value = ""; // Clear the input box after adding the task
}

listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
   }
   else if(e.target.tagName ==="SPAN"){
      e.target.parentElement.remove();
   }
},false);

// document.addEventListener("DOMContentLoaded", function () {

// });