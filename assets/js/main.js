var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//convierte el navbar en negro
$(document).scroll(function(e) {
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})