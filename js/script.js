
$(".inv").hover(function (){
    $(".drop-inv").show();
})

$(".regime").click(function (){
    $(".regime-menu").show();
})

$(".drop-inv, .iv").mouseleave(function (){
    $(".drop-inv").hide();
})

$(".est").hover(function (){
    $(".drop-est").show();
})

$(".drop-est, .es").mouseleave(function (){
    $(".drop-est").hide();
})

$(".act").hover(function (){
    $(".drop-act").show();
})

$(".drop-act, .act").mouseleave(function (){
    $(".drop-est").hide();
})

function link(link) {
    window.location.href = link + '.html';
}