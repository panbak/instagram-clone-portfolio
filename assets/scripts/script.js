
$(".content-grid .square").on('click', function(e){ //populate modal
    e.stopPropagation();
    $("#project-name").text($(this).data('project'));
    $("#project-date").text($(this).data('date'));
    $("#project-description").text($(this).data('description'));
    $("#project-image").attr('src',$(this).data('image'));
    $('.project-modal').show();
    $('body').addClass('stop-scrolling');
});

$(".close").on('click', function(){ //close modal button
    $('.project-modal').hide();
    $('body').removeClass('stop-scrolling');
});

var modal = document.getElementById('project-modal');
window.onclick = function(event) { //close modal when click outside
    if (event.target == modal) {
        modal.style.display = "none";
        $('body').removeClass('stop-scrolling');
    }
}

$(".content-tabs a").on('click', function(){ //control tabs show-hide 
    $(".content-tabs a").removeClass('active');
    $(this).addClass('active');
    $('.content-grid').hide();
    $('#'+$(this).data('target')).show();
});