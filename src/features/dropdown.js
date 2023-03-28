import gsap from 'gsap'
import $ from 'jquery'

const activateDropdown = () => {
  let dropdownOpen = false

  const frameBottomMiddle = $('.frame-bottom-middle')
  const frameBottomLeft = $('.frame-bottom-left')
  const frameBottomRight = $('.frame-bottom-right')
  const frameTopLeft = $('.frame-top-left')
  const frameTopRight = $('.frame-top-right')
  const menuIcon = $('.menu_icon_link')
  const dropdownContainer = $('.dropdown-container')
  const navLinks = $('.nav_link')
  console.log(navLinks)

  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: 'back.inOut',
    },
  })

  tl.to(dropdownContainer, {
    y: '0%',
  })
  tl.to(
    frameBottomLeft,
    {
      x: '-100%',
      y: '100%',
    },
    0
  )
  tl.to(
    frameBottomRight,
    {
      x: '100%',
      y: '100%',
    },
    0
  )
  tl.to(
    frameTopLeft,
    {
      x: '-100%',
      y: '-100%',
    },
    0
  )
  tl.to(
    frameTopRight,
    {
      x: '100%',
      y: '-100%',
    },
    0
  )
  tl.to(
    frameBottomMiddle,
    {
      y: '100%',
    },
    0
  )
  tl.to(
    navLinks,
    {
      y: '0%',
      opacity: '100%',
      stagger: 0.1,
      // duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    },
    0.6
  )

  menuIcon.on('click', function () {
    if (dropdownOpen) {
      tl.reverse()
      dropdownOpen = false
    } else {
      tl.restart()
      dropdownOpen = true
    }
    console.log(`dropdownOpen: ${dropdownOpen}`)
  })
}

export default activateDropdown
