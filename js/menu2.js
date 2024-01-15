/*------------------------------------------------------------------------*
 | type            : Script JavaScript                                    |
 | objet           : Menu HTML5 <nav>                                     |
 | nom source      : menu.js                                              |
 | auteur          : Vincent DUBOIS                                       |
 | date creation   : 17/??/2014                                           |
 | derniere modif  : 23/09/2014                                           |
 | version         : 1.0                                                  |
 *------------------------------------------------------------------------*/

/*-----[variables globales]-----------------------------------------------*/

var menu = "";

/*-----[Fonction]---------------------------------------------------------*/
function buildMenu()
   /*---------------------------------------------------------------------*
    | entree  : -                                                         |
    | trait   : -                                                         |
    | sortie  : -                                                         |
    | comment.: menu pour HTML                                            |
    *---------------------------------------------------------------------*/
{
	menu = menu + "<a href=\"../index.html\">Accueil</a> | ";
	menu = menu + "<a href=\"../cours/cours.html\">Cours</a> | ";
	menu = menu + "<a href=\"../ateliers/ateliers.html\">Ateliers</a> | ";
	menu = menu + "<a href=\"../docs/docs.html\">Documents</a> | ";
	menu = menu + "<a href=\"../glossaire.html\">Glossaire</a> | ";
	menu = menu + "<a href=\"../liens.html\">Liens</a>";
}

/*-----[MAIN]-------------------------------------------------------------*/

buildMenu();
document.write(menu);	// fonctionne que si le script est inclu au HTML

/*-----[EOF]--------------------------------------------------------------*/