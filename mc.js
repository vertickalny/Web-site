document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('f1-151254.mp3');

    const blockElement = document.querySelector('.btn-group');
    blockElement.addEventListener('click', function() {
        clickSound.play();
    });
});

$(document).ready(function(){
    $(".card-text").mouseover(function(){
        $(this).css("background-color", "#efe3cc");
    });
});
$(document).ready(function(){
    $(".card-text").mouseout(function(){
        $(this).css("background-color", "#ceb774");
    });
});