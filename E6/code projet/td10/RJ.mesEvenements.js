
/* fonction de mise en place des abonnements */
var setupEvents = function() {
	var unElement = document.getElementById("img");
	unElement.addEventListener("click", action);
	
	var piedDePage = document.getElementById("piedDePage");
	piedDePage.addEventListener("mouseover", action1);
	
	var gandhi = document.getElementById("gandhi");
	gandhi.addEventListener("click", questAction1);
	
	var nehru = document.getElementById("nehru");
	nehru.addEventListener("click", questAction2);
	
	var hint = document.getElementById("hint");
	hint.addEventListener("mouseover", hintAction);
}

/* pour appeler la fonction ci-dessus quand la page est chargée */
window.addEventListener("load", setupEvents);


/* Programmation de la fonction action */

var action = function() {
	window.alert("vous avez une image (>‿◠)✌") ;
}

/*--------------------------------*/

var action1 = function() {
	piedDePage.style.backgroundColor="White";
	piedDePage.style.color= " green" ;
	var y=document.getElementById("piedDePage");
	y.innerHTML="WoW... Vous avez changé la couleur du pied de la page "+"<img src=smile.png/>";
}

/*---------Try a game-------------*/

var questAction1 = function() {
	window.alert("Oops... Désolé vous avez perdu -_-  Ce n'est pas Ghandhi.") ;
}

/*----------------------------*/

var questAction2 = function() {
	window.alert("Yooopie.... (>‿♥)  Vous avez gagné! C'est Nehru.") ;
}

/*----------------------------*/

var hintAction = function() {
	var y=document.getElementById("hintText");
	y.innerHTML="<img src=confusion.jpg/>"+"C'est la personne qui a signé pour l'indépendance de l'Inde ";
}