const $contact = $("#contact");
const $dark = $(".dark");
const $servicesButton = $(".services-button");
const $goBack = $(".go-back");
const $submit = $("#contact-submit");


$servicesButton.on("click", function (e) {
    $contact.addClass("clicked");
    $dark.addClass("clicked");
});

$goBack.on("click", function (e) {
    $contact.removeClass("clicked");
    $dark.removeClass("clicked");
});

$submit.on("click", function (e) {
    $contact.removeClass("clicked");
    $dark.removeClass("clicked");
});