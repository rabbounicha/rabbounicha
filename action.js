          $('.exp-pro').click(function(){
				$('#dev').fadeOut(0).fadeIn(500).load('exp-pro.html');
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
			
			$('.formations').click(function(){
				$('#dev').fadeOut(0).fadeIn(500).load('formations.php');
			});
			
			$('.competences').click(function(){
				$('#dev').fadeOut(0).fadeIn(500).load('competences.html');
			});
			
			$('.centre_int').click(function(){
				$('#dev').fadeOut(0).fadeIn(500).load('centre_int.html');
			});
			
			/*$('.centre_int').click(function(){
				$('#dev').html('centre_int.html');
			});/*/			
			$('#veille').click(function(){
				$('#tout').fadeOut(0).fadeIn(500).load('images_slider.php');
			});
			
			$('#status').click(function(){
				$('#tout').load('index.php');
			});