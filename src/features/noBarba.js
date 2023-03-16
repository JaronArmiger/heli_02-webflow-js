import gsap from 'gsap'
import $ from 'jquery'

console.log('um yeah')

const wallpaper = $('.wallpaper-container')

let tl = gsap.timeline({
  paused: true,
  defaults: {
    duration: 1.4,
    ease: 'power2.inOut',
  },
})

tl.to(wallpaper, { opacity: 100 })

$('.transition_link').on('click', function (e) {
  e.preventDefault()
  tl.restart()

  const dest = this.getAttribute('href')

  setTimeout(() => {
    console.log(dest)
    window.location = dest
  }, 800)
})
