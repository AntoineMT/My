
$( document ).ready(function() {
    $('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD',
            viewMode: 'years'
        }
            );
});

function verifierConditionsGénérales(){
    var state = document.getElementById("validerCGU").checked;
    
    if(state === false){        
        alert('Veuillez valider les conditions générales d\'utilisation');
    }
}