//eventos del input

const inputs = document.querySelectorAll('input');
           inputs.forEach( input =>{
               input.onfocus = ( )=>{
                   
                   input.previousElementSibling.classList.add('top');
                   input.previousElementSibling.classList.add('focus');
                   input.parentNode.classList.add('focus');
               }
               input.onblur = ( )=>{
                   input.value = input.value.trim( ); 
                   if( input.value.trim( ).length == 0 ){
                      input.previousElementSibling.classList.remove('top');
                   }
                   input.previousElementSibling.classList.remove('focus');
                   input.parentNode.classList.remove('focus');
               }
           });


//header fijo

$(document).ready(function(){
    $(window).scroll(function(){
         if($(this).scrollTop() > 0){
              $('header').addClass('header2');
         }else{
            $('header').removeClass('header2');
         }
    });
});

//mostrar contraseña
document.getElementById("view").addEventListener("click", ()=>{
  if(document.getElementById("emailPass").type === "password"){
    document.getElementById("emailPass").type = "text";
    document.getElementById("emailPass").classList.add("cambio");
    document.getElementById("view").classList.remove("fa-eye-slash");
    document.getElementById("view").classList.add("fa-eye");

  }else{
    document.getElementById("emailPass").type = "password";
    document.getElementById("view").classList.add("fa-eye-slash");
    document.getElementById("view").classList.remove("fa-eye");
  }
});

//mostrar contraseña 2
document.getElementById("view2").addEventListener("click", ()=>{
  if(document.getElementById("emailPass2").type === "password"){
    document.getElementById("emailPass2").type = "text";
    document.getElementById("emailPass2").classList.add("cambio");
    document.getElementById("view2").classList.remove("fa-eye-slash");
    document.getElementById("view2").classList.add("fa-eye");

  }else{
    document.getElementById("emailPass2").type = "password";
    document.getElementById("view2").classList.add("fa-eye-slash");
    document.getElementById("view2").classList.remove("fa-eye");
  }
});

//validar campo al enviar

const pass = document.getElementById("emailPass");
function enviarFormulario(){
  console.log('form enviado');

  if(pass.value === null || pass.value === ''){
    document.getElementById("msjError1").style.display = 'block';
    document.getElementById("label").classList.add("focus2");
    document.getElementById("span").classList.add("focus2");
  }else {
      document.getElementById("msjError1").style.display= 'none';
      document.getElementById("label").classList.add("focus");
      document.getElementById("label").classList.remove("focus2");
      document.getElementById("label").classList.add("focus");
      document.getElementById("span").classList.remove("focus2");
    }
}

(function (){
  const input = function(){
    if(document.getElementById('emailPass').value.length >= 8){
      document.getElementById("msjError1").style.display= 'none';
      document.getElementById("label").classList.add("focus");
      document.getElementById("label").classList.remove("focus2");
      document.getElementById("label").classList.add("focus");
      document.getElementById("span").classList.remove("focus2");
    }else{
      
      document.getElementById("msjError1").style.display = 'block';
      document.getElementById("label").classList.add("focus2");
      document.getElementById("span").classList.add("focus2");
    }
  
  };

const contra = document.getElementById('emailPass');
contra.addEventListener('keydown', input);

}())




