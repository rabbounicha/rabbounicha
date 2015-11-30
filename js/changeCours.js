(function() { 
    
    $('#ppe').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('ppe.php');
    });

    $('#js').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('js.php');
    });

    $('#java').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('java.php');
    });

    $('#algo').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('centre_int.php');
    });
    $('#proj_perso').click(function(){
        $('#projet-download').fadeOut(0).fadeIn(500).load('proj_perso.php');
    });

});

