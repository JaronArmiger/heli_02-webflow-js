import barba from '@barba/core'
import gsap from 'gsap'
import $ from 'jquery'

// helper functions

const getImgIndexFromPath = (path) => {
  switch (path) {
    case '/':
      return 0
    case '/about':
      return 1
    case '/work':
      return 2
    case '/contact':
      return 3
    default:
      return 4
  }
}

let percentTop = 0
let percentLeft = 0

let currentImg

// execution
const createWallpaperAnim = (activateFeatures) => {
  activateFeatures()
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
          let targetPath = data?.next?.url?.path
          // move this to run on page load
          let imgIndex = getImgIndexFromPath(targetPath)
          currentImg = wallpaperImages.eq(imgIndex)
          console.log(currentImg)
          currentImg.show()

          $(data.current.container).addClass('fixed')
          const tl = gsap.timeline()

          tl.set(currentImg, { opacity: 100 })
            .set(wallpaper, { opacity: 100 })
            .fromTo(
              $('.wallpaper-container'),
              {
                clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)`,
              },
              {
                clipPath: `circle(140% at ${percentLeft}% ${percentTop}%)`,
              }
            )

          // setTimeout(function () {
          //   console.log('timeout')
          // }, 500)
          return tl
        },
        enter(data) {
          // updateCurrentClass()

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

          activateFeatures()
          return tl
        },
      },
    ],
  })
}

export default createWallpaperAnim
