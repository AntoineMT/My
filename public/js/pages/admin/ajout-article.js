var all;
var nbChamps = 0;

$( document ).ready(function() {
    document.getElementById("form_typechamp").name="typechamp[]";
    document.getElementById("form_details").name="details[]";
    all = document.getElementById("relationComplique").innerHTML;
    document.getElementById("relationComplique").innerHTML = "";
    $('#relationComplique').prepend('<div class = "col-md-11" id="champsid'+nbChamps+'">'+all+'</div><div class = "col-md-1"></div>');
});

function addTypeChamp(){           
    $('#relationComplique').prepend('<div class = "col-md-11" id="champsid'+nbChamps+'">'+all+'</div><div id="champsidbis'+nbChamps+'" class = "col-md-1"><i class="fa fa-minus-circle fa-2x" onClick = "deleteTypeChamps('+nbChamps+')" style = "color:red; padding-top:13px;" aria-hidden="true"></i></div>');
    nbChamps++;
}

function deleteTypeChamps(id){
    document.getElementById("champsid"+id).innerHTML = "";
    document.getElementById("champsidbis"+id).innerHTML = "";
}

function checkPriceField()
{
    var content = document.getElementById("form_prix").value;
    if(isNumeric(content) === false){
        
        document.getElementById("form_prix").value = "";
    }
}

function checkStockField()
{
    var content = document.getElementById("form_stock").value;
    if(isNumeric(content) === false){
        
        document.getElementById("form_stock").value = "";
    }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

jQuery(function($){
    var fileDiv = document.getElementById("upload");
    var fileInput = document.getElementById("form_attachment");
    
    fileInput.addEventListener("change",function(e){
      var files = this.files
      showThumbnail(files)
    },false)

    fileDiv.addEventListener("click",function(e){
      //$(fileInput).show().focus().click().hide();
      e.preventDefault();
    },false)

    fileDiv.addEventListener("dragenter",function(e){
      e.stopPropagation();
      e.preventDefault();
    },false);

    fileDiv.addEventListener("dragover",function(e){
      e.stopPropagation();
      e.preventDefault();
    },false);

    fileDiv.addEventListener("drop",function(e){
      e.stopPropagation();
      e.preventDefault();

      var dt = e.dataTransfer;
      var files = dt.files;

      showThumbnail(files)
    },false);

    function showThumbnail(files){
        resetFileInputbis();
        document.getElementById("btn-clear").style.display = "block";
      for(var i=0;i<files.length;i++){
        var file = files[i]
        var imageType = /image.*/
        if(!file.type.match(imageType)){
          alert('Merci de ne mettre en ligne que des images (png, jpg, jpeg) !');
          //resetFileInput();
          continue;
        }

        var image = document.createElement("img");
        // image.classList.add("")
        var thumbnail = document.getElementById("thumbnail");
        image.file = file;
        thumbnail.appendChild(image)

        var reader = new FileReader()
        reader.onload = (function(aImg){
          return function(e){
            aImg.src = e.target.result;
          };
        }(image))
        var ret = reader.readAsDataURL(file);
        var canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        image.onload= function(){
          ctx.drawImage(image,100,100)
        }
      }
    }
});


function resetFileInput(){    
    document.getElementById("form_attachment").value = '';
    document.getElementById("thumbnail").innerHTML = '';  
    document.getElementById("btn-clear").style.display = "none";
}

function resetFileInputbis(){        
    document.getElementById("thumbnail").innerHTML = '';      
}

function checkAll(){
    if(document.getElementById("form_attachment").value == '')
    {
        alert('Aucune photo n\'a été choisie !')
    }
    
}