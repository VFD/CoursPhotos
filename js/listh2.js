/*------------------------------------------------------------------------*
 | type            : Script JavaScript                                    |
 | objet           : list h2                                   |
 | auteur          : Vincent DUBOIS                                       |
 | date creation   : 2020                                           |
 | derniere modif  : 2021                                           |
 | version         : 1.0                                                  |
 *------------------------------------------------------------------------*/

/*-----[variables globales]-----------------------------------------------*/

var selectH2 = document.querySelectorAll("h2");

/*-----[Fonction]---------------------------------------------------------*/
function myFunctionH2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/*-----[MAIN]-------------------------------------------------------------*/

let listeTerme = "";
for (let terme of selectH2) {
	if ( terme.id != "" ) {
		listeTerme += '<li><a href="#' + terme.id + '">' + terme.innerHTML + '</a></li>';
	}
}

document.getElementById("myMenu").innerHTML = listeTerme;

document.getElementById("mySearch").onkeyup = function() {myFunctionH2()};


/*-----[EOF]--------------------------------------------------------------*/