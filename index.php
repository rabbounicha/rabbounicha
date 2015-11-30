<!DOCTYPE html>
<html>
	<head>
		<title> Portfolio </title>
		<meta charset="utf-8" />
		<link href="reset.css" rel="stylesheet" type="text/css" />
		<link href="style.css" rel="stylesheet" type="text/css" />
		<link href="slider.css" rel="stylesheet" type="text/css" />
		<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="js/changeCv.js"></script>
	</head>
	
	<body>	
		
		<div id="reg">
		
			<div id="status">
				<p> Développeuse informatique </p>
			</div>
			
			<div id="aa">
				<a class="parcours" href="#exp-pro"> Curriculum Vitae </a>
				<a href="###"> BTS </a>
				<a href="#veille-div"> Veille technologique </a>
			</div> 
			
		</div>
			
		<div id="reunion">
		
			<div id="avatar">
			</div>
			
			<div id="info_pers">
				<p> Rabbounicha JEAN PIERRE</p>
				<p> 1 rue de Provence </p>
				<p> 95300 Pontoise </p>
				<p> 0782813632 </p>
				<p> rabbounicha@yahoo.fr </p>
				<p> Née le 14/08/1995 </p>
				<p> 20 ans </p>
				<p> Célibataire </p>
			</div>

		</div>
		
		<div id="cv-div">
			<div id="exp-pro-nom">
				<p class="exp-pro-titre"> Expériences professionnelles </p>
			</div>
			
			<div id="formations-nom">
				<p class="formations-titre"> Formations </p>
			</div>
			
			<div id="competences-nom">
				<p class="competences-titre"> Compétences </p>
			</div>
			
			<div id="centre_int-nom">
				<p class="centre_int-titre"> Centres d'intérêts </p>
			</div>
		</div>
		
		<div align="center" id="dev-div">
			<?php include_once("exp-pro.php"); ?>
		</div>
		
		<div id="veille-div">
			<?php include_once("images_slider.php"); ?>
		</div>
	</body>
</html>