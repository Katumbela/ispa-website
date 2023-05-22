function link(link){
    window.location.href = link + '.php';
}

$('.foto').click(function(){
    link('encounters');
})