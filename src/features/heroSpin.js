import gsap from 'gsap'
import $ from 'jquery'

const switchItem = () => {
  let prevItem = $('.hero-img-wrap.active')
  prevItem.removeClass('active')
  let nextItem = prevItem.next()
  if (prevItem.next().length == 0) {
    nextItem = $('.hero-img-wrap').eq(0)
  }
  nextItem.addClass('active')

  let tl = gsap.timeline()

  tl.fromTo(
    '.hero-img-container',
    {
      rotationY: 0,
      rotationX: 0,
    },
    {
      rotationY: 90,
      rotationX: 15,
      ease: 'power2.in',
      duration: 0.8,
    }
  )
    .set(prevItem, { opacity: 0 })
    .set(nextItem, { opacity: 1 })
    .fromTo(
      '.hero-img-container',
      {
        rotationY: -90,
        rotationX: 15,
      },
      {
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
        duration: 1.2,
      }
    )
}
console.log(switchItem)

const activateHeroSpin = () => {
  $('.hero-img-wrap').eq(0).addClass('active')

  // $('.home-header_main').on('click', function () {
  //   switchItem()
  // })
  switchItem()
  setInterval(function () {
    switchItem()
  }, 4000)
  console.log('hero spin')
}

export default activateHeroSpin
