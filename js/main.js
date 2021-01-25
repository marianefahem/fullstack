$(document).ready(function(){

$nav = $('.nav');
$togglecollapse = $('.toggle-collapse');
$togglecollapse.click(function(){
    $nav.toggleClass('collapse');

})
//owl carousel for blog
$('.owl-carouse').owl-carouse();


});