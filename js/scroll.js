/*
 * Auteur :
 * http://www.creativejuiz.fr/blog/tutoriels/jquery-effet-smooth-scroll-defilement-fluide
 */

$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});