function redirectTo(){
    var e = document.getElementById("sorter");
    var strUser = e.options[e.selectedIndex].value;
    
    if(strUser != 'null'){    
        var finalString = redirectUrl+strUser;
        document.location.href=finalString;        
    }
}

$( document ).ready(function() {
    var select = document.getElementById("sorter");
    
    
        
});


function getGoodValue(){
    if(sortValue == 'priceasc'){        
        document.getElementById("sorter").selectedIndex = "1";
    }
    if(sortValue == 'pricedesc'){        
        document.getElementById("sorter").selectedIndex = "2";
    }
    if(sortValue == 'nameaz'){        
        document.getElementById("sorter").selectedIndex = "3";
    }
    if(sortValue == 'nameza'){        
        document.getElementById("sorter").selectedIndex = "4";
    }
}