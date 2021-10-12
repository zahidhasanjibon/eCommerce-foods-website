$(document).ready(function() {
      
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        appendDots:'.slider-dots',
        fade:true
    })

const triggers = document.querySelectorAll('.menu-trigger');
triggers.forEach((anchor) => {
    anchor.addEventListener('click',function (e){
        e.preventDefault()
    this.classList.toggle('is-open')
    })
})


$('.slider2').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    autoplay:true,
    appendDots:'.slider2-dots',
    responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]
    // fade:true
})

        // for mobile hamberger
        let wrapper = document.querySelector('.wrapper')
        let hamberger = document.querySelector('.hamberger')
        hamberger.addEventListener('click',() => {
            wrapper.classList.add('wrapper-open')
        })

        let closeBtn = document.querySelector('.times')
        closeBtn.addEventListener('click',() => {
            wrapper.classList.remove('wrapper-open')
        })
        window.addEventListener('resize',(e) => {
            let width = window.innerWidth
            if(width > 1024){
                 wrapper.classList.remove('wrapper-open') 
            }
           
        })

        const allMobileMenuParent = document.querySelector('.mobile-anchor')
        const allMobileMenu = [...allMobileMenuParent.getElementsByTagName('a')]
        allMobileMenu.forEach(element => {
            element.addEventListener('click',function(e) {
                wrapper.classList.remove('wrapper-open') 
            })
        });



})