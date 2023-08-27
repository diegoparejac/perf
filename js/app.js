let api = 'AIzaSyCtxtJ-dayUKUqBGfykFVXwZiBRzsIx9aY';

function initMap() {
  let latLng = {
    lat: 6.173979, 
    lng: -75.5788585
  };

  let map = new google.maps.Map(document.getElementById('map'), {
 'center': latLng,
  'zoom': 14,
  'mapTypeId': google.maps.MapTypeId.ROADMAP
   });

   let contenido = '<h2>COLOMBIERE PERFUMS</h2>'+
                  '<P>Proximas Promociones</P>'+
                  '<p>Visitanos</p>';
   
   let informacion = new google.maps.InfoWindow({
    content: contenido    
   });
   
   let marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Colombiere Perfums' 
   });

   marker.addListener ('click', function(){
    informacion.open(map, marker);
   });
 }


(function(){
  'use strict';

  let regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){
    
   //campos datos usuario 

   let nombre = document.getElementById('nombre');
   let apellido = document.getElementById('apellido');
   let email = document.getElementById('email');

   // campos promos

   let Perfumes_Hombre = document.getElementById('Perfumes_Hombre');
   let Perfumes_mujer = document.getElementById('Perfumes_mujer');
   let Perfumes_Hombre_mujer = document.getElementById('Perfumes_Hombre_mujer');

   

   // botones y divs
   let calcular = document.getElementById('calcular');
   let errorDiv = document.getElementById('error');
   let botonRegistro = document.getElementById('btnregistro');
   let lista_productos = document.getElementById('lista-productos');
   let suma = document.getElementById('suma-total');

   // Extras

   let camisas = document.getElementById('camisa_tienda');
   let sizeMini = document.getElementById('mini');

   if(document.getElementById('calcular')) {

   calcular.addEventListener('click', calcularMontos);

   Perfumes_Hombre.addEventListener('blur' , mostrarCategorias);
   Perfumes_mujer.addEventListener('blur' , mostrarCategorias);
   Perfumes_Hombre_mujer.addEventListener('blur' , mostrarCategorias);

   nombre.addEventListener('blur',validarCampos);
   apellido.addEventListener('blur',validarCampos);
   email.addEventListener('blur',validarCampos);
   email.addEventListener('blur',validarMail);

   function validarCampos(){
    if(this.value == '') {
      errorDiv.style.display = 'block';
      errorDiv.innerHTML ='Este campo es obligatorio';
      this.style.border = '1px solid red';
      errorDiv.style.border = '1px solid red';
    }else {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid #cccccc';
    }
   }

   function validarMail(){
    if(this.value.indexOf('@') > -1){
      errorDiv.style.display = 'none';        
        this.style.border = '1px solid #cccccc';
        
      }else {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML ='Este campo debe contener al menos una @';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
      }

    }

   function calcularMontos(event){
    event.preventDefault();
    if(regalo.value === ''){
      alert('Debes elegir un regalo')
      regalo.focus();      
    }
    else {
      let promoHombres = parseInt(Perfumes_Hombre.value, 10) || 0,
          promoMujeres = parseInt(Perfumes_mujer.value, 10) || 0,
          promoHombreMujer = parseInt(Perfumes_Hombre_mujer.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantMini = parseInt(sizeMini.value, 10) || 0;


      let totalPagar = (promoHombres * 90) + (promoMujeres *90) + (promoHombreMujer * 150) + ((cantCamisas * 6)*0.93) + (cantMini * 2);
      
      let listadoproductos = []    
      
      
      if (promoHombres>=1){
        listadoproductos.push(promoHombres + " Promo HOMBRE Y/O UNISEX")

      }
      if (promoMujeres>=1){
        listadoproductos.push(promoMujeres + " Promo MUJER Y/O UNISEX")
      }
      if (promoHombreMujer>=1){
        listadoproductos.push(promoHombreMujer + " Promo HOMBRE, MUJER Y/O UNISEX")

      }
      if (cantCamisas >=1){
        listadoproductos.push(cantCamisas + " Camisas")
      }
      if (cantMini >=1){
        listadoproductos.push(cantMini + " Tamaño mini para viaje")
      }
      lista_productos.style.display = 'block';
      lista_productos.innerHTML = "";
      for(var i = 0; i< listadoproductos.length; i++){
        lista_productos.innerHTML += listadoproductos[i] + '<br/>'
      }
      suma.innerHTML = '$'+ totalPagar.toFixed(2);

    }

    
   }
   function mostrarCategorias(){
    let promoHombres = parseInt(Perfumes_Hombre.value, 10) || 0,
        promoMujeres = parseInt(Perfumes_mujer.value, 10) || 0,
        promoHombreMujer = parseInt(Perfumes_Hombre_mujer.value, 10) || 0;

    let categoriasElegidas = [];

    if(promoHombres > 0){
      categoriasElegidas.push('hombres','unisex');
      console.log(categoriasElegidas);
    }
    if(promoMujeres > 0){
      categoriasElegidas.push('mujeres','unisex');
      console.log(categoriasElegidas);
    }
    if(promoHombreMujer > 0){
      categoriasElegidas.push('hombres','mujeres','unisex');
      console.log(categoriasElegidas);
    }
    
    for (let i = 0; i < categoriasElegidas.length; i++){
      document.getElementById(categoriasElegidas[i]).style.display = 'block';
    }

   }

  }




  }); //dom content loaded
})();
 
$(function(){

  
  // lettering

  $('.nombre-sitio').lettering();

  //menu fijo

  let windowHeight = $(window).height();

  let barraAltura = $('.barra').innerHeight();
  
  
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if(scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': barraAltura+ 'px'});
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top': '0px'});
    }    
  });

  // menu responsive

  $('.menu-movil').on('click', function() {
    $('.navegacion-principal').slideToggle();

  });


// nuestras categorias
$('.programa-evento .info-curso:first').show();
$('.menu-programa a:first').addClass('activo');

$('.menu-programa a').on('click', function(){
$('.menu-programa a').removeClass('activo');
$(this).addClass('activo')
$('.ocultar').hide();

  let enlace = $(this).attr('href');
  $(enlace).fadeIn(1000);
  return false;
 
});

//animaciones para los numeros

$('.resumen-evento li:nth-child(1) p').animateNumber({ number: 179}, 3200);
$('.resumen-evento li:nth-child(2) p').animateNumber({ number: 10}, 1200);
$('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 900);
$('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1200);


// cuenta regresiva

$('.cuenta-regresiva').countdown('2023/10/12 09:00:00', function(event){
$('#dias').html(event.strftime('%D'));
$('#horas').html(event.strftime('%H'));
$('#minutos').html(event.strftime('%M'));
$('#segundos').html(event.strftime('%S'));
});








});



































