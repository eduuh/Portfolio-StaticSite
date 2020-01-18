/*
* A function to toggle the mobile menu
* ====================================
* */
function toggle() {
  let element = $(".navbar");
  element.css("display", "block");
  let nav = element[0];
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
    element.css("display", "none");
  }
}

/*Helper functions
* ================
* */

$(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        500,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("#back-drop").ripples({
  // Image Url
  imageUrl: "img/heroimage1.jpeg",
  // The width and height of the WebGL texture to render to.
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 800,
  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,
  // Basically the amount of refraction caused by a ripple.
  // 0 means there is no refraction.
  perturbance: 0.02,
  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,
  // The crossOrigin attribute to use for the affected image.
  crossOrigin: "true"
});

$("#water").ripples({
  // Image Url
  imageUrl: "img/heroimage1.jpeg",
  // The width and height of the WebGL texture to render to.
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 800,
  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,
  // Basically the amount of refraction caused by a ripple.
  // 0 means there is no refraction.
  perturbance: 0.02,
  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,
  // The crossOrigin attribute to use for the affected image.
  crossOrigin: "true"
});



//hide and how social media bar
$(document).ready(function() {
  $(window).bind("scroll", function() {
    let distance = 50;
    if ($(window).scrollTop() > distance) {
      $(".navbar", "social-media").fadeOut(500);
      $(".navbar").css("top", "0");
    } else {
      $(".navbar", "social-media").fadeIn(500);
      $(".navbar").css("top", "50px");
    }
  });
});
