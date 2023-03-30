import gsap from 'gsap'
import $ from 'jquery'

// let windowWidth = $(window).width()
// let windowHeight = $(window).height()

const maxXRotation = 10
const maxYRotation = 10

const activateBizCardRotate = (targetClassname) => {
  const targetElement = $(targetClassname)
  if (targetElement.length == 0) {
    return
  }
  // $(window).on('resize', function () {
  //   windowWidth = $(window).width()
  //   windowHeight = $(window).height()
  // })

  // $(document).on('mousemove', function (e) {
  //   const xFraction = (2 * (e.clientX - windowWidth / 2)) / windowWidth
  //   const yFraction = (2 * (e.clientY - windowHeight / 2)) / windowHeight
  //   gsap.to(targetElement, {
  //     rotationX: -xFraction * maxXRotation,
  //     rotationY: 0 - yFraction * maxYRotation,
  //   })
  // })
  const rotateDuration = 2
  let tl = gsap.timeline({ repeat: -1 })

  tl.to(targetElement, {
    rotationX: maxXRotation,
    rotationY: maxYRotation,
    duration: rotateDuration,
  })
    .to(targetElement, {
      rotationX: -maxXRotation,
      rotationY: maxYRotation,
      duration: rotateDuration,
    })
    .to(targetElement, {
      rotationX: 0,
      rotationY: 0,
      duration: rotateDuration,
    })
    .to(targetElement, {
      rotationX: -maxXRotation,
      rotationY: -maxYRotation,
      duration: rotateDuration,
    })
    .to(targetElement, {
      rotationX: maxXRotation,
      rotationY: -maxYRotation,
      duration: rotateDuration,
    })
    .to(targetElement, {
      rotationX: 0,
      rotationY: 0,
      duration: rotateDuration,
    })
}

export default activateBizCardRotate
