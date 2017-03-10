$('document').ready(function(){

/*MAIN SLIDER HOMEPAGE*/
  $('.single-item').slick();


/*MAIN SLIDER BUTTON REDIRECT*/

 $('.btn').click(function(){
  window.location.replace("details.html")

 });


/*DETAILS ADD TO A CART BUTTON REDIRECT*/

$('.btntwo, .btnthree').click(function(){
  window.location.replace("index.html")

 });



/*MINI SLIDER*/


$('.responsive').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  autoplaySpeed:  2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1078,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

/* NEWSLETTER EMAIL*/


    $('#submit').click(function(){

       var emailAdd=$('#yourEmail').val();
       var emailReg = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if(!emailReg.test(emailAdd)) {
        alert('Please enter valid email');
        } 

        else{
        alert('Thank you for your valid email');
        }   
         
    });
   
  
 /*DETAILS PAGE BIG PICTURE*/

  
  $('.details ul li #minione').click(function(){
       var bigIMG =  document.getElementById('main').src;
       var mini_one = document.getElementById('minione').src;
      
        $('#main').attr ('src', mini_one);
        $('#minione').attr ('src', bigIMG);
  });



  $('.details ul li #minitwo').click(function(){
       var bigIMG =  document.getElementById('main').src;
       var mini_two = $('.details #minitwo').attr('src');

         $('#main').attr ('src', mini_two);
         $('#minitwo').attr ('src', bigIMG);
  });



  $('.details ul li #minithree').click(function(){
       var bigIMG =  document.getElementById('main').src;
       var mini_three = $('.details #minithree').attr('src');

        $('#main').attr ('src', mini_three);
        $('#minithree').attr ('src', bigIMG);
  });



/*GRID ANIMATIONS*/

 var currentBackground = 0;
 var backgrounds = [];
 backgrounds[0] = 'img/blazer.jpg';
 backgrounds[1] = 'img/hat.jpeg';
 backgrounds[2] = 'img/bluelace.jpg';


 function changeBackground() {
    currentBackground++;
    if (currentBackground > 2) currentBackground = 0;

    $('.imgcov').fadeOut(100,function() {
        var $this = $(this);
        $this.css({
        'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $this.fadeIn(100);
    });
    
    setTimeout(changeBackground, 3000);
}

    setTimeout(changeBackground, 3000);  





 var currentBackground2 = 0;
 var backgrounds2 = [];
 backgrounds2[0] = 'img/scarf.jpeg';
 backgrounds2[1] = 'img/boho.jpeg';
 backgrounds2[2] = 'img/boots.jpeg';

 function changeBackgroundone() {
    currentBackground2++;
    if (currentBackground2 > 2) currentBackground2 = 0;

    $('.imgcovone').fadeOut(200,function() {
        var $this = $(this);
        $this.css({
        'background-image' : "url('" + backgrounds2[currentBackground2] + "')"
        });
        $this.fadeIn(200);
    });
    
    setTimeout(changeBackgroundone, 2500);
}

    setTimeout(changeBackgroundone, 2500);





var currentBackground3 = 0;
var backgrounds3 = [];
backgrounds3[0] = 'img/biker.jpg';
backgrounds3[1] = 'img/skirt.jpeg';
backgrounds3[2] = 'img/lace.jpg';

function changeBackgroundtwo() {
    currentBackground3++;
    if (currentBackground3 > 2) currentBackground3 = 0;

    $('.imgcovtwo').fadeOut(300,function() {
        var $this = $(this);
        $this.css({
        'background-image' : "url('" + backgrounds3[currentBackground3] + "')"
        });
        $this.fadeIn(300);
    });
    
    setTimeout(changeBackgroundtwo, 3000);
}

    setTimeout(changeBackgroundtwo, 3000);




});










