let locoImg = document.getElementById('img');
let arrayImg = ['img/slide.jpg','img/slide2.jpg','img/slide3.jpg'];
let arrayLength = arrayImg.length;
let index = 0;
let changeImg =function(){
    locoImg.src = arrayImg[index]
    index++;
    if(index == arrayLength){
        index =0;
    }
}
setInterval(changeImg,2000)
// cuộn menu
console.log($('.img'))
$(window).ready(function(){
    $(window).scroll(function(e){
        let location = $('html,body').scrollTop()
        if(location > 38){
            $('.wrap_menu').addClass('pos_list')
        }else{
            $('.wrap_menu').removeClass('pos_list')

        }
    })
})
