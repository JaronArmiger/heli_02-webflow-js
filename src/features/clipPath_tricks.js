import barba from '@barba/core'
import gsap from 'gsap'
import $ from 'jquery'

console.log('ostentation')

let percentTop = 0
let percentLeft = 0

$(document).on('click', function (e) {
  let mouseLeft = e.pageX
  let mouseTop = e.pageY - $(window).scrollTop()

  percentTop = (mouseTop / $(window).height()) * 100
  percentLeft = (mouseLeft / $(window).width()) * 100
})

console.log(percentLeft)
console.log(percentTop)

function updateCurrentClass() {
  $('.w--current').removeClass('w--current')
  $('.nav a').each(function () {
    if ($(this).attr('href') === window.location.pathname) {
      $(this).addClass('w--current')
    }
  })
}

barba.init({
  transitions: [
    {
      preventRunning: true,
      enter(data) {
        $('.wallpaper-container').removeClass('hide')
        updateCurrentClass()
        gsap.defaults({
          duration: 1.4,
          ease: 'power2.inOut',
        })
        // if ($('.menu_link.w--current').length > 0) {
        //   gsap.fromTo('.is-home', { x: '0%' }, { x: '49% ' })
        //   gsap.fromTo('.is-about', { x: '-49%' }, { x: '0% ' })
        // } else {
        //   gsap.fromTo('.is-home', { x: '49%' }, { x: '0% ' })
        //   gsap.fromTo('.is-about', { x: '0%' }, { x: '-49% ' })
        // }

        $(data.next.container).addClass('fixed')
        // return gsap.fromTo(
        //   data.next.container,
        //   {
        //     clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
        //   },
        //   {
        //     clipPath: `circle(140% at ${percentLeft}% ${percentTop}%)`,
        //     onComplete: () => {
        //       $(window).scrollTop(0)
        //       $(data.next.container).removeClass('fixed')
        //     },
        //   }
        // )
        gsap.fromTo(
          $('.wallpaper-container'),
          {
            clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
          },
          {
            clipPath: `circle(140% at ${percentLeft}% ${percentTop}%)`,
            onComplete: () => {
              $(window).scrollTop(0)
              $(data.next.container).removeClass('fixed')
            },
          }
        )
        // return gsap.fromTo(
        //   $('.wallpaper-container'),
        //   {
        //     clipPath: `circle(140% at ${percentLeft}% ${percentTop}%)`,
        //   },
        //   {
        //     clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
        //     onComplete: () => {
        //       $(window).scrollTop(0)
        //       $(data.next.container).removeClass('fixed')
        //     },
        //   }
        // )
        return gsap.to($('.wallpaper-container'), {
          clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
          onComplete: () => {
            $(window).scrollTop(0)
            $(data.next.container).removeClass('fixed')
          },
        })
      },
    },
  ],
})
