
const products=document.querySelector('#products');

const help=document.querySelector('#information');

const front=document.querySelector(".banner");

const sectionproducts=document.querySelector(".sectionproducts");

const sectioninformation=document.querySelector(".sectionsinformation");

const logo=document.querySelector(".logo");

const button=document.querySelector(".button1")

logo.addEventListener('click',function(){

    front.scrollIntoView();})


button.addEventListener('click',function(){

    front.scrollIntoView();})


sectionproducts.addEventListener('click',function(){

        products.scrollIntoView();})


sectioninformation.addEventListener('click',function(){

        help.scrollIntoView();})


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn1");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.logo1');
    showImages('.header1');
    showImages('.paragraph1');
});

$(document).ready(function(){
    showImages('.logo2');
    showImages('.header2');
    showImages('.paragraph2');
});


// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.logo1');
});

$(window).scroll(function() {
    showImages('.header1');
});

$(window).scroll(function() {
    showImages('.paragraph1');
});

$(window).scroll(function() {
    showImages('.logo2');
});

$(window).scroll(function() {
    showImages('.header2');
});

$(window).scroll(function() {
    showImages('.paragraph2');
});




