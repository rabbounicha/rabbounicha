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
        <script type="text/javascript" src="js/changeCours.js"></script>
    </head>

    <body>
        <!--Partie personnelle--> 
        <div id="reunion">
            <!--Barre TOP-->
            <div id="reg">
                <div id="status">
                    <img src="images/dev.png" alt="Mes compétences professionnelles" width="350px">
                </div>

                <div id="aa">
                    <a class="parcours" href="#exp-pro-nom"> Curriculum Vitae </a>
                    <a href="###"> BTS </a>
                    <a href="#veille-div"> Veille technologique </a>
                </div> 
            </div>
            
            <!--Avatar-->
            <div id="avatar">
            </div>

            <!--Coordonnées-->
            <div id="info_pers">
                <p> Rabbounicha</p>
                <p> rabbounicha[AT]yahoo[DOT]fr </p>
                <p> Née le 14/08/1995 </p>
                <p> 20 ans </p>
            </div>
        </div>
        <!--FIN Partie personnelle--> 

        <!--CV-->
        <div id="cvdev">
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

                <div id="projet-nom">
                    <p class="projet-titre"> Projets </p>
                </div>
            </div>

            <div align="center" id="dev-div">
                <?php include_once("exp-pro.php"); ?>
            </div>
        </div>
        <!--FIN CV-->

        <!--Veille technologie-->
        <div id="veille-div">
            <div id="veilleTitle">
                <span>Ma veille</span>
            </div>
                
            <div id="veilleContent">
                <?php include_once("images_slider.php"); ?>
            </div>
        </div>
        <!--FIN Veille technologie-->

        <!--Projets-->
        <div id="cours-bts">
            <div id="projectTitle">
                <span>Mes projets</span>
            </div>
                
            <div id="projectContent">
                <?php include_once("cours.php"); ?>
            </div>
        </div>
        <!--FIN Projets-->
        
        <script type="text/javascript" src="js/scroll.js"></script>
    </body>
</html>