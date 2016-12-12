$('#play').on('click', function(e){
    $("video").get(0).play();
})
$(document).ready(function(){
    $('.full-page').fullpage();
    $('#play').trigger('click');
});