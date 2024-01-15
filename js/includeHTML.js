/*------------------------------------------------------------------------*
 | type            : Script JavaScript                                    |
 | objet           : include HTML                                         |
 | nom source      : includeHTML.js                                       |
 | auteur          : W3 Schools                                           |
 *------------------------------------------------------------------------*/

 /*
	<div w3-include-html="footer.html"></div>
	<script src="js/includeHTML.js"></script>

	<object type="text/html" data="footer.html"></object>

	<iframe src="footer.html" width="100%"></iframe>
*/

/*-----[Fonction]---------------------------------------------------------*/
function includeHTML() {
   /*---------------------------------------------------------------------*
    | entree  : -                                                         |
    | trait   : -                                                         |
    | sortie  : -                                                         |
    | comment.: -                                                         |
    *---------------------------------------------------------------------*/
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
					}
				}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

/*-----[MAIN]-------------------------------------------------------------*/

includeHTML();

/*-----[EOS]--------------------------------------------------------------*/