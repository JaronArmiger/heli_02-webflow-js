import gsap from 'gsap'
import $ from 'jquery'

const projectPreview = () => {
  const workLink = $('.work_link')

  workLink.each(function () {
    const workPhoto = $(this).find('.work_photo')
    let tl = new gsap.timeline({ paused: true })
    tl.to(workPhoto, {
      width: '100%',
      ease: 'power3.inOut',
      duration: 0.7,
    })

    $(this).on('mouseenter', function () {
      tl.restart()
    })
    $(this).on('mouseleave', function () {
      tl.reverse()
    })
  })
}

export default projectPreview
