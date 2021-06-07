var entButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//var btn = document.createElement("button");
    //	btn.appendChild(document.createTextNode("Delet"));
 	//	li.appendChild(btn);
 	//	btn.onclick = removeParent;
 	// darbojas tikai uz jauniem li un poga delit nedarbojas
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// Nedarbojas ar jauniem li
var list = document.querySelectorAll("li");
for(var i = 0; i < list.length; i++) {
   list[i].addEventListener("click", function(e){
    e.currentTarget.classList.toggle("done");
   })
 }

entButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);