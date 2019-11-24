var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var clearall=document.getElementById("clear");

function list()
{
   var li=document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value="";
}


function clean() {
    ul.innerHTML = "";
}

function strike(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

button.addEventListener("click",function(){
	if(input.value.length >0)
		list();
});


input.addEventListener("keypress",function(e){
	if(input.value.length >0 && e.keyCode==13)
list();
});


clearall.addEventListener("click", clean);
ul.addEventListener("click",strike);

