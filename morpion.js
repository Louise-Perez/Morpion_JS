$jeu = document.getElementById("jeu");
$jeu.onclick = selectionne; /* Lorsqu'on clic sur le jeu, la fonction selectionne s'applique */ 
let player = true;  			/* Indice booleen représente le joueur, tour par tour */ 
let pointPlayer1 = 0 ;  		 
let pointPlayer2 = 0 ; 
let player1Winner = false; 		/* Le joueur 1 est au depart perdant */ 
let player2Winner = false ; 	/* Le joueur 2 est au depart perdant */

function selectionne(e){     /* Le "e" est l'endroit où on clique lié avec un target */ 
	if (player === true && !(e.target.classList.contains("player2")) &&  !(e.target.classList.contains("player1"))   ) {	/* Premier player */   /* qui est à zero */ 
		e.target.classList.add("player1"); /* e.target correcpond à la case cliqué par le player 1 */
		e.target.innerHTML += "X";
	}
	else if (!(e.target.classList.contains("player2")) &&  !(e.target.classList.contains("player1")) ) {	/* Second player */ 
		e.target.classList.add("player2");	/* e.target correcpond à la case cliqué par le player 2 */
		e.target.innerHTML += "O" ;
	}
	player = !player;
	player1Win();    /* affiche la fonction player1Win avec les alerts */ 
	player2Win();    /* affiche la fonction player2Win avec les alerts */ 

}

function player1Win() {  	/* Si le joueur 1 gagne */ 
			
			if ( (jeu.children[0].classList.contains("player1")) && (jeu.children[1].classList.contains("player1")) && (jeu.children[2].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant horizontal */  
			}
			else if ( (jeu.children[3].classList.contains("player1")) && (jeu.children[4].classList.contains("player1")) && (jeu.children[5].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant horizontal */  
			}
			else if ( (jeu.children[6].classList.contains("player1")) && (jeu.children[7].classList.contains("player1")) && (jeu.children[8].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant horizontal */  
			}
			else if ( (jeu.children[0].classList.contains("player1")) && (jeu.children[3].classList.contains("player1")) && (jeu.children[6].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant vertical */  
			}
			else if ( (jeu.children[1].classList.contains("player1")) && (jeu.children[4].classList.contains("player1")) && (jeu.children[7].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant vertical */  
			}
			else if ( (jeu.children[2].classList.contains("player1")) && (jeu.children[5].classList.contains("player1")) && (jeu.children[8].classList.contains("player1")) ) {
				player1Winner = true;		/* Gagnant vertical */  
			}
			else if ( (jeu.children[0].classList.contains("player1")) && (jeu.children[4].classList.contains("player1")) && (jeu.children[8].classList.contains("player1")) ) {
				player1Winner = true;  		/* Gagnant diagonale */  
			}
			else if ( (jeu.children[2].classList.contains("player1")) && (jeu.children[4].classList.contains("player1")) && (jeu.children[6].classList.contains("player1")) ) {
				player1Winner = true;   		/* Gagnant diagonale */  
			}
			if ( player1Winner === true) {
			setTimeout (' alert("Player 1 wins !")', 100 )  ;
			setTimeout ('resetElement()', 1000 );
			player = true ;
			pointPlayer1 += 1 ;
			afficherCompteur1();
			}
	}

function player2Win() {    /* Si le joueur 2 gagne */ 

		if ( (jeu.children[0].classList.contains("player2")) && (jeu.children[1].classList.contains("player2")) && (jeu.children[2].classList.contains("player2")) ) {
				player2Winner = true;			/* Gagnant horizontal */ 
		}
		else if ( (jeu.children[3].classList.contains("player2")) && (jeu.children[4].classList.contains("player2")) && (jeu.children[5].classList.contains("player2")) ) {
				player2Winner = true;			/* Gagnant horizontal */  
		}
		else if ( (jeu.children[6].classList.contains("player2")) && (jeu.children[7].classList.contains("player2")) && (jeu.children[8].classList.contains("player2")) ) {
				player2Winner = true;			/* Gagnant horizontal */  
		}
		else if ( (jeu.children[0].classList.contains("player2")) && (jeu.children[3].classList.contains("player2")) && (jeu.children[6].classList.contains("player2")) ) {
				player2Winner = true;			/* Gagnant vertical */  
		}
		else if ( (jeu.children[1].classList.contains("player2")) && (jeu.children[4].classList.contains("player2")) && (jeu.children[7].classList.contains("player2")) ) {
				player2Winner = true;			/* Gagnant vertical */  
		}
		else if ( (jeu.children[2].classList.contains("player2")) && (jeu.children[5].classList.contains("player2")) && (jeu.children[8].classList.contains("player2")) ) 	{
				player2Winner = true;			/* Gagnant vertical */  
		}
		else if ( (jeu.children[0].classList.contains("player2")) && (jeu.children[4].classList.contains("player2")) && (jeu.children[8].classList.contains("player2")) ) 	{
				player2Winner = true;   			/* Gagnant diagonale */ 
		}
		else if ( (jeu.children[2].classList.contains("player2")) && (jeu.children[4].classList.contains("player2")) && (jeu.children[6].classList.contains("player2")) ) 	{
				player2Winner = true;   			/* Gagnant diagonale */  
		}
		if (player2Winner === true) {
			setTimeout (' alert("Player 2 wins !")', 100 )  ;
			setTimeout ('resetElement()', 1000 ); 
			player = true ;
			pointPlayer2 += 1 ;
			afficherCompteur2();
		}		
}

function afficherCompteur1() {
		document.getElementById("compteur1").innerHTML = "" ;
		document.getElementById("compteur1").innerHTML += `<p> Le joueur 1 à ${pointPlayer1} points </p>`;   /* Afficher le texte */ 
}

afficherCompteur1();

function afficherCompteur2() {
		document.getElementById("compteur2").innerHTML = "" ;
		document.getElementById("compteur2").innerHTML += `<p> Le joueur 2 à ${pointPlayer2} points </p>`;   /* Afficher le texte */ 
}

afficherCompteur2();

function resetElement() {			/* recommencer le jeu */ 
	for (i = 0 ; i < 9 ; i ++){  	/* Compteur pour chaque cellule */ 
		if ( jeu.children[i].classList.contains("player1")){	/* Si j'ai player 1 */ 
			jeu.children[i].classList.remove("player1");		/* Alors effacer player 1 */ 
		}
		if ( jeu.children[i].classList.contains("player2")){	/* Si j'ai player 2 */ 	
			jeu.children[i].classList.remove("player2");		/* Alors effacer player 2 */ 	
		}
		jeu.children[i].innerHTML = "";
	}
	player2Winner = false ; 
	player1Winner = false ; 
}

function reset() {			/* recommencer le jeu */ 
	for (i = 0 ; i < 9 ; i ++){  	/* Compteur pour chaque cellule */ 
		if ( jeu.children[i].classList.contains("player1")){	/* Si j'ai player 1 */ 
			jeu.children[i].classList.remove("player1");		/* Alors effacer player 1 */ 
		}
		if ( jeu.children[i].classList.contains("player2")){	/* Si j'ai player 2 */ 	
			jeu.children[i].classList.remove("player2");		/* Alors effacer player 2 */ 	
		}
		jeu.children[i].innerHTML = "";
	}
	document.getElementById("compteur1").innerHTML = "" ;
	document.getElementById("compteur1").innerHTML += `<p> Le joueur 1 à 0 points </p>`;   /* Afficher le texte */ 
	document.getElementById("compteur2").innerHTML = "" ;
	document.getElementById("compteur2").innerHTML += `<p> Le joueur 2 à 0 points </p>`;   /* Afficher le texte */ 
	player2Winner = false ; 
	player1Winner = false ;
	pointPlayer1 = 0 ; 
	pointPlayer2 = 0 ;	 
}