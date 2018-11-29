
$( document ).ready(function() {
    $('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD',
            //viewMode: 'years'
        }
            );
});



function changeMDP(){
    if(document.getElementById("hide1").style.display == "table-row"){
        document.getElementById("hide1").style.display = "none";
        document.getElementById("hide2").style.display = "none";
        document.getElementById("hide3").style.display = "none";
        document.getElementById("form_motdepasseold").attributes["required"] = "false";         
        document.getElementById("btn-hide-MDP").innerHTML = "Changer le mot de passe";
                             

    }
    else{
        document.getElementById("hide1").style.display = "table-row";
        document.getElementById("hide2").style.display = "table-row";
        document.getElementById("hide3").style.display = "table-row";
        document.getElementById("form_motdepasseold").attributes["required"] = "true";                

        document.getElementById("btn-hide-MDP").innerHTML = "Cacher le mot de passe";
    }
    
}