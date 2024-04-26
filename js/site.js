//////////------------------------------------------------------------------------//
// MENU
$(function () {
  $('#navigation').uNav();
});

//----------------------------------------------------------------------------//
//-- SCROLLA --//
$('.animate').scrolla({
  mobile: false,
  once: false
});

//----------------------------------------------------------------------------//
//-- ACCORDION --//
jQuery('.accordion-toggle').click(function () {

  var has = jQuery(this);
  if (has.hasClass('collapsed')) {
    jQuery(this).find('i').removeClass('ion-plus-circled');
    jQuery(this).find('i').addClass('ion-minus-circled');
  } else {
    jQuery(this).find('i').removeClass('ion-minus-circled');
    jQuery(this).find('i').addClass('ion-plus-circled');
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL BANNERS --//
var owl = $('#id-banners .owl-carousel');
owl.owlCarousel({
  autoHeight: true,
  autoHeightClass: 'owl-height',
  loop: true,
  nav: true,
  lLazyload: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 6500,
  dots: false,
  animateOut: 'fadeOut',
  //animateIn: 'zoomIn',
  //animateIn: 'flipInX',
  animateIn: 'fadeIn',
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false
    },
    600: {
      items: 1
    },
    960: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL SERVIÇOS --//
var owl = $('#servicos .owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoplayTimeout: 6500,
  lazyload: true,
  responsive: {
    0: {
      items: 1
    },
    560: {
      items: 2
    },
    991: {
      items: 2
    },
    1100: {
      items: 3
    },
    1199: {
      items: 2
    }
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL PRODUTOS --//
var owl = $('#produtos .owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: false,
  margin: 0,
  autoplay: true,
  dots: false,
  autoplayTimeout: 6500,
  lazyload: true,
  responsive: {
    0: {
      items: 1
    },
    560: {
      items: 2
    },
    1100: {
      items: 3
    },
    1600: {
      items: 4
    }
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL TELEFONES FOOTER --//
var owl = $('#list-telefones-footer.owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 6500,
  lazyload: true,
  responsive: {
    0: {
      items: 1
    },
    1920: {
      items: 1
    }
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL ENDEREÇO --//
var owl = $('#localizacao-endereco .owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 6500,
  lazyload: true,
  responsive: {
    0: {
      items: 1
    },
    1920: {
      items: 1
    }
  }
});

//----------------------------------------------------------------------------//
//-- CARROUSEL SERVIÇOS --//
var owl = $('#carousel-servicos .owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  lazyload: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 6500,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    960: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});


////--------------------------------------------------------------------------//
//-- SUBIR TOPO --//
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn();
    } else {
      $('a[href="#top"]').fadeOut();
    }
  });
  $('a[href="#top"]').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  });
});

////--------------------------------------------------------------------------//
//-- POPOVER --//
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});
/* MASCARA CAMPOS */
$(document).ready(function () {
  $('input.maskData').setMask('39/19/9999');
  $('input.maskDataHora').setMask('39/19/9999 29:59');
  $('input.maskHora').setMask('29:59');
  $('input.maskCPF').setMask('999.999.999-99');
  $('input.maskCNPJ').setMask('99.999.999/9999-99');
  $('input.maskCEP').setMask('99.999-999');
  $('input.maskDinheiro').setMask({
    mask: '99,999.999.999.999',
    type: 'reverse',
    defaultValue: '000'
  });
  /* Telefone com 1 digito a mais */
  jQuery("input.maskTelefone").keyup(function () {
    val = jQuery(this).val().replace(/\D/g, '');
    if (val.length === 10) {
      jQuery(this).setMask("(99) 9999-99999");
    } else if (val.length >= 11) {
      jQuery(this).setMask("(99) 99999-9999");
    } else {
      jQuery(this).setMask("(99) 999999999");
    }
  });
});

////--------------------------------------------------------------------------//
//-- FANCYBOX--//
$('.fancybox').fancybox();
$(".fancybox").fancybox({
  wrapCSS: 'fancybox-custom',
  closeClick: true,
  openEffect: 'none',
  loop: false,
  helpers: {
    title: {
      type: 'inside'
    },
    overlay: {
      css: {
        'background': 'rgba(0,0,0,0.85)'
      }
    }
  }
});

$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
  arrows: false,
  helpers: {
    media: {},
    buttons: {},
    title: {
      type: 'inside'
    }
  }
});


////--------------------------------------------------------------------------//
//--VER MAIS DESCRIÃ‡ÃƒO--//

$(document).ready(function () {

  var showChar = 100;
  var ellipsestext = "...";
  var moretext = '<i class="ion ion-plus-circled"></i> Ler mais';
  var lesstext = '<i class="ion ion-minus-circled"></i> Ler menos';


  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar) + '<span class="moreellipses">' + ellipsestext + '</span>';
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="morecontent"><span>' + h + '</span><button href="" class="morelink">' + moretext + '</button></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});

//----------------------------------------------------------------------------//
//-- ROLAGEM DA PAGINA --//
$(document).ready(function () {
  ancora = window.location.hash;
  if (ancora !== "" && $(ancora).size() > 0) {
    $('html, body').animate({scrollTop: $(ancora).offset().top - $('#nav').height()}, 1200);
  } else {
    if ($('.ancora').size()) {
      $('html, body').animate({scrollTop: $('.ancora').offset().top - $('#nav').height() - 150}, 1200);
    }
  }
});
