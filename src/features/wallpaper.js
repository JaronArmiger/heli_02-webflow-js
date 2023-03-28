import barba from '@barba/core'
import gsap from 'gsap'
import $ from 'jquery'

console.log('wallpaper.js')

// helper functions

const randInt = (max) => {
  return Math.floor(Math.random() * max)
}

function updateCurrentClass() {
  $('.w--current').removeClass('w--current')
  $('.nav a').each(function () {
    if ($(this).attr('href') === window.location.pathname) {
      $(this).addClass('w--current')
    }
  })
}

const showImageByIndex = (wallpaperImages, imgIndex) => {
  wallpaperImages.each(function () {
    if ($(this).attr('data-img-index') === imgIndex.toString()) {
      currentImg = $(this)
    }
  })
}

let percentTop = 0
let percentLeft = 0

let currentImg

// execution
const createWallpaperAnim = () => {
  const wallpaper = $('.wallpaper-container')
  const wallpaperImages = $('.wallpaper_img')
  wallpaperImages.hide()

  $(document).on('click', function (e) {
    let mouseLeft = e.pageX
    let mouseTop = e.pageY - $(window).scrollTop()

    percentTop = (mouseTop / $(window).height()) * 100
    percentLeft = (mouseLeft / $(window).width()) * 100
  })

  barba.init({
    transitions: [
      {
        preventRunning: true,
        leave(data) {
          const imgIndex = randInt(5)
          // move this to run on page load
          showImageByIndex(wallpaperImages, imgIndex)
          currentImg.show()

          $(data.current.container).addClass('fixed')
          const tl = gsap.timeline()

          tl.to(currentImg, { opacity: 100 })
          tl.to(wallpaper, { opacity: 100 })
          tl.fromTo(
            $('.wallpaper-container'),
            {
              clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
            },
            {
              clipPath: `circle(140% at ${percentLeft}% ${percentTop}%)`,
            }
          )
          return tl
        },
        enter(data) {
          updateCurrentClass()

          const tl = gsap.timeline({
            defaults: {
              duration: 1.4,
              ease: 'power2.inOut',
            },
          })

          $(data.next.container).addClass('fixed')

          tl.to($('.wallpaper-container'), {
            clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
            onComplete: () => {
              $(window).scrollTop(0)
              $(data.next.container).removeClass('fixed')
              currentImg.hide()
            },
          })
          return tl
        },
      },
    ],
  })
}

export default createWallpaperAnim
