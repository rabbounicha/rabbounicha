$(function() { 
    
    $('#ppe').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('ppe.php');
    });

    $('#javascript').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('javascript.php');
    });

    $('#java').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('java.php');
    });

    $('#proj_perso').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('proj_perso.php');
    });

});

