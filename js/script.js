$(document).ready(function () {
    $(".btn").hover(function () {
        $(this).addClass("btn-success").removeClass("btn-primary");
    }, function () {
        $(this).addClass("btn-primary").removeClass("btn-success");
    });
});
