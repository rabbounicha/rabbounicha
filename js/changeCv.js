$(function() {
	$('.exp-pro-titre').click(function(){
		$('#dev-div').fadeOut(0).fadeIn(500).load('exp-pro.php');
	});

	// ça marche aussi 
	/*$('#exp-pro').click(function(){
		$(document).ready(function() {
			$('#dev').load('yes.html');
		})
	});*/
	// Ou
	/*$('#exp-pro').click(function(){
		$('#dev').load('yes.html');
	});*/

	$('.formations-titre').click(function(){
		$('#dev-div').fadeOut(0).fadeIn(500).load('formations.php');
	});

	$('.competences-titre').click(function(){
		$('#dev-div').fadeOut(0).fadeIn(500).load('competences.php');
	});

	$('.centre_int-titre').click(function(){
		$('#dev-div').fadeOut(0).fadeIn(500).load('centre_int.php');
	});

	/*$('.centre_int').click(function(){
		$('#dev').html('centre_int.html');
	});/*/
});