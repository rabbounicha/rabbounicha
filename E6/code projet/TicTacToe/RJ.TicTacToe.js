/***************************/
/* JEAN PIERRE Rabbounicha */
/* ALGO : Tic Tac Toe      */
/* BTS 1 -> 01/05/2015     */
/***************************/

//Compteur des clicks//
var clicks = 0;
var tabClick = Array();
var enter;

// Partie 1 [ON] != 0 [OFF]
var partie = 0;

// une variable qui permet de savoir si le jeu est en mode play ou finish
// var play = 1;
// Si 0, impossible d'appeller les fonctions de jeu

function image(id) {
	// On vérifie que la partie n'est pas finie
	if(partie != 0) {
		/////////////////////////////////////
		// Vérification que la case est vide
		
		// Signifie qu'on peut changer l'image de la case par défaut
		enter = 1;
		
		// On va comparer l'id cliqué avec ceux enregistrés dans le tableau
		for(var i = 0; i < tabClick.length; i++) {
			if(id == tabClick[i]) {				
				// Non, la case a déjà changé d'image, on laisse comme elle était
				enter = 0;
			}
		} 
			
		/////////////////////////////////////
		// Si on peut changer l'image
		if(enter == 1) {
			clicks++;
			if((clicks%2)!=0 ){
				joueur1(id);
			}
			else if ((clicks%2)==0){
				joueur2(id);
			}
			
			// On pousse la case selectionnée dans un tableau
			tabClick.push(id);
			// Vérification si quelqu'un gagne
			game();
		}
		// Sinon rien ne se passe
	}
}
	
//Joueur1 X//
function joueur1(id){
	var imgX="x.png";
	document.getElementById(id).src=imgX;
}

//Joueur2 O//
function joueur2(id){
	var imgO="o.png";
	document.getElementById(id).src=imgO;
}

//Finals win or lost//
function game() {
	var imgO = "o.png";
	var imgX = "x.png";
	var imgC = "c.png";
	
	// Vérification d'égualités sur les lignes
	for(var j = 0; j < 9; j += 3) {
		var str = [document.getElementById(j+1).src, document.getElementById(j+2).src, document.getElementById(j+3).src];
		var res = [str[0].substring(str[0].length - 5), str[1].substring(str[1].length - 5), str[2].substring(str[2].length - 5)];
		
		// On regarde que l'image ne soit pas celle par défaut (pic.png soit c.png) et que les images qui suivent sont les mêmes
		if(res[0] != imgC && res[0] == res[1] && res[1] == res[2]) {
			partie = 0;
			if(res[0] == imgO)
				alert("Le rond a gagné  (>‿◠)✌");
			else
				alert("Le carré a gagné  (>‿◠)✌");
		}
	}
	
	// Vérification d'égualités sur les colonnes
	for(var j = 0; j < 3; j++) {
		var str = [document.getElementById(j+1).src, document.getElementById(j+4).src, document.getElementById(j+7).src];
		var res = [str[0].substring(str[0].length - 5), str[1].substring(str[1].length - 5), str[2].substring(str[2].length - 5)];
		
		if(res[0] != imgC && res[0] == res[1] && res[1] == res[2]) {
			partie = 0;
			if(res[0] == imgO)
				alert("Le rond a gagné  (>‿◠)✌");
			else
				alert("Le carré a gagné  (>‿◠)✌");
		}
	}
	
	// Vérification d'égualités sur les diagonales
	for(var j = 0; j < 2; j++) {
		if (j == 0) {
			var str = [document.getElementById(j+1).src, document.getElementById(j+5).src, document.getElementById(j+9).src];
			var res = [str[0].substring(str[0].length - 5), str[1].substring(str[1].length - 5), str[2].substring(str[2].length - 5)];
		}
		else if (j == 1) {
			var str = [document.getElementById(j+2).src, document.getElementById(j+4).src, document.getElementById(j+6).src];
			var res = [str[0].substring(str[0].length - 5), str[1].substring(str[1].length - 5), str[2].substring(str[2].length - 5)];
		}
		
		if(res[0] != imgC && res[0] == res[1] && res[1] == res[2]) {
			partie = 0;
			if(res[0] == imgO)
				alert("Le rond a gagné  (>‿◠)✌");
			else
				alert("Le carré a gagné  (>‿◠)✌");
		}
	}
}

var setupEvents = function() {
	var setRule = document.getElementById("rule");
	setRule.addEventListener("click", action);
	var setGrid = document.getElementById("grid");
	setGrid.addEventListener("click", start);
	var setReset = document.getElementById("retry");
	setReset.addEventListener("click", start);
}

window.addEventListener("load", setupEvents);

var action = function() {
	var y=document.getElementById("rule");
	y.innerHTML="Nombre de joueurs : 2 joueurs. Aussi appelé le jeu du morpion, ce jeu est la base des jeux de papier. Le but étant d'aligner 3 de ses symboles sur un tableau de 3 par 3 ( 9 cases ). Déroulement du jeu : Un des 2 joueurs est choisie au hasard pour commencer, il trace sa figure sur une des 9 cases ( soit il trace un X soit il trace un O) Ensuite c'est au tour de l'autre de posé sa figure, jusqu'à que l'on fasse une ligne ( soit diagonale ou orthogonale ) de X ou de O. Le match peut aussi être nul avec la grille remplis au complet. Le premier à jouer change à toutes les parties. La fin du jeu peut être fixer par un nombre de partie remporté. Tactiques : Il existe plusieurs stratégies pour le Tic tac toe ; Triangulaire : Stratégie infaillible, mais dépend des premiers coups de l'adversaire. Il suffit de mettre un X dans un coin, puis dans un autre coin ( autre que celui opposé ), l'adversaire sera obligé de mettre un O entre les deux, pendant ce temps il faut mettre un X au coin opposé du dernier, l'adversaire sera encore obligé de mettre un O pour bloquer une ligne, il reste qu'a mettre un X au milieu pour faire une ligne.";
}

var start = function() {
	var x=document.getElementById("grid");
	if(partie != 1) {
		tabClick = [];
		partie = 1;
		x.innerHTML=  "<table>"+ 
						"<tr>"+
							"<td><img id='1' src='pic.png' value=' ' onClick='image(1)' width='100' height='100'></td>"+
							"<td><img id='2' src='pic.png' value=' ' onClick='image(2)' width='100' height='100'></td>"+
							"<td><img id='3' src='pic.png' value=' ' onClick='image(3)' width='100' height='100'></td>"+
						"</tr>"+
						"<tr>"+
							"<td><img id='4' src='pic.png' value=' ' onClick='image(4)' width='100' height='100'></td>"+
							"<td><img id='5' src='pic.png' value=' ' onClick='image(5)' width='100' height='100'></td>"+
							"<td><img id='6' src='pic.png' value=' ' onClick='image(6)' width='100' height='100'></td>"+
						"</tr>"+
						"<tr>"+
							"<td><img id='7' src='pic.png' value=' ' onClick='image(7)' width='100' height='100'></td>"+
							"<td><img id='8' src='pic.png' value=' ' onClick='image(8)' width='100' height='100'></td>"+
							"<td><img id='9' src='pic.png' value=' ' onClick='image(9)' width='100' height='100'></td>"+
						"</tr>"+
					"</table>";
		var z=document.getElementById("retry");
		z.innerHTML="<input id ='retry' type='button' name='retry' value='Recommencer' onclick='retry()'/>";
	}
}

//Pour recommencer le jeu
function retry(){
		partie = 0;
	start();
}