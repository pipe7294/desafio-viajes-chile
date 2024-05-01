import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// efecto smooth

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 1500, function(){
    
    window.location.hash = hash;
    });
    }
    });
    });

// efecto scroll 

$(window).scroll(function(){
    if($("#menu").offset().top > 56){
        $("#menu").addClass("bg-info");
    }else {
        $("#menu").removeClass("bg-info");
    }
})

let alertContainer = document.getElementById("alertContainer");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertContainer.append(wrapper);
};

const alertTrigger = document.getElementById("alertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Mensaje enviado con éxito !!!", "success");
  });
}

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
})

