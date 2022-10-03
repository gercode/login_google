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


//mostrar contraseña

$(document).ready(function () {
    $('#cbox').click(function () {
      if ($('#cbox').is(':checked')) {
        $('#emailPass').attr('type', 'text');
        $('#emailPass').addClass('cambio');
      } else {
        $('#emailPass').attr('type', 'password');
      }
    });
  });


  //validar campo al enviar

const pass = document.getElementById("emailPass");
const msj = document.getElementById("err");
function enviarFormulario(){
  console.log('form enviado');

  if(pass.value === null || pass.value === ''){
    document.getElementById("alertEmailLogin").style.display = 'block';
    document.getElementById("label").classList.add("focus2");
    document.getElementById("span").classList.add("focus2");
  }else{
    document.getElementById("alertEmailLogin").classList.remove(".activo");
    document.getElementById("label").classList.remove("focus2");
    document.getElementById("span").classList.remove("focus2");
  }

  
}

//eventos del select

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');

select.addEventListener('click', ()=> {
   select.classList.toggle('active');
   opciones.classList.toggle('active');
});

//guardar en el localStorage
const form = document.getElementById('formulario');
const contrasena = document.getElementById('emailPass');

form.addEventListener('submit', function (event){
    event.preventDefault();
      let user = Array(
          {
            password: contrasena.value
        } 
      );
      localStorage.setItem('user', JSON.stringify(user));
      location.href='CambioPass.html';
});
