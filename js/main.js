  // Joseph Milanes Custom Javascript 2015 \\



///////////////////////// Material Initializers \\\\\\\\\\\\\\\\\\\\\\\\\

// Material Slideout Nav
$(".button-collapse").sideNav(
    {
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

// Material Scroll To
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

// Material Parallax

  // $(document).ready(function(){
  //     $('.parallax').parallax(); 
  //   });


/////////////////// Subnav /////////////////////////

$(document).ready(function(){
    $('.pushKick').pushpin({ top: $('.pushKick').offset().top });
  });

// Adding Menu items active class Based on url

// $(function(){
//     var current = location.pathname;
//     $('#subnav li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//         }
//     })
// })



/////////////////// Swiper /////////////////////////

// $(document).ready(function(){
//    var swiper = new Swiper('.vert-slider', {
//         pagination: '.swiper-pagination',
//         direction: 'vertical',
//         slidesPerView: 1,
//         speed: 500,
//         paginationClickable: true,
//         mousewheelControl: true,
//         mousewheelReleaseOnEdges: true,
//         mousewheelForceToAxis: true,
//         paginationClickable: true,
//     });

//     var swiper = new Swiper('.reg-slider-1', {
//         pagination: '.g1',
//         paginationClickable: true,
//     });

//  });

/////////////////// Animations /////////////////////////

// $('.main-nav li.first').hover(function () {
//     $('li.first .arrow').toggleClass('turnt');
// });

// $('.main-nav li.second').hover(function () {
//     $('li.second .arrow').toggleClass('turnt');
// });


// $('a.collapsible-header.first').click(function () {
//     $('a.first .arrow').toggleClass('turnt');
// });

// $('a.collapsible-header.second').click(function () {
//     $('a.second .arrow').toggleClass('turnt');
// });


/////////////////// Social Media /////////////////////////

// Instagram Feed
 // var feed = new Instafeed({
 //        get: 'user',
 //        userId: 228374247,
 //        accessToken: '418313457.467ede5.2657d1b3985f4fa7b3dd2fb8d5eb5e9e',
 //        template: '<div class="col s6 m4"><a target="_blank" href="{{link}}" class="sml-2 med-3 bloks purple bg-cover bg-center" style="background-image: url({{image}});"></a></div>',
 //        sortBy: 'most-recent',
 //        limit: 6,
 //        resolution: 'standard_resolution'
 //    });
 //    feed.run();


///////////////////////// Plugins \\\\\\\\\\\\\\\\\\\\\\\\\\\


          