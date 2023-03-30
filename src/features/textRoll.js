import gsap from 'gsap'
import $ from 'jquery'
import SplitType from 'split-type'

console.log(gsap)
console.log($)

// .text-roll
// .text-roll-link

const textRollTriple = (innerClassname, outerClassname) => {
  let splitType = new SplitType(innerClassname, {
    types: 'words, chars',
    tagName: 'span',
  })
  console.log(splitType)

  const outerElement = $(outerClassname)

  if (outerElement.length == 0) {
    return
  }

  outerElement.each(function () {
    let firstChars = $(this).find(`${innerClassname}.is-1 .char`)
    let secondChars = $(this).find(`${innerClassname}.is-2 .char`)
    let thirdChars = $(this).find(`${innerClassname}.is-3 .char`)

    let tl = gsap.timeline({ repeat: -1 })
    tl.to(firstChars, {
      translateY: '-0.2em',
      rotationY: '-5.7deg',
      rotationX: '-90deg',
      stagger: { each: 0.08 },
      ease: 'power3.inOut',
      duration: 0.7,
    })
      .from(
        secondChars,
        {
          translateY: '0.2em',
          rotationY: '5.7deg',
          rotationX: '90deg',
          stagger: { each: 0.08 },
          ease: 'power3.inOut',
          duration: 0.7,
        },
        0.1
      )
      .to(secondChars, {
        translateY: '-0.2em',
        rotationY: '-5.7deg',
        rotationX: '-90deg',
        stagger: { each: 0.08 },
        ease: 'power3.inOut',
        duration: 0.7,
      })
      .from(
        thirdChars,
        {
          translateY: '0.2em',
          rotationY: '5.7deg',
          rotationX: '90deg',
          stagger: { each: 0.08 },
          ease: 'power3.inOut',
          duration: 0.7,
        },
        2
      )
      .to(thirdChars, {
        translateY: '-0.2em',
        rotationY: '-5.7deg',
        rotationX: '-90deg',
        stagger: { each: 0.08 },
        ease: 'power3.inOut',
        duration: 0.7,
      })
      .from(
        firstChars,
        {
          translateY: '0.2em',
          rotationY: '5.7deg',
          rotationX: '90deg',
          stagger: { each: 0.08 },
          ease: 'power3.inOut',
          duration: 0.7,
        },
        3.75
      )
  })
}

const textRollDouble = (innerClassname, outerClassname) => {
  let splitType = new SplitType(innerClassname, {
    types: 'words, chars',
    tagName: 'span',
  })
  console.log(splitType)

  const outerElement = $(outerClassname)

  if (outerElement.length == 0) {
    return
  }

  outerElement.each(function () {
    let firstChars = $(this).find(`${innerClassname}.is-1 .char`)
    let secondChars = $(this).find(`${innerClassname}.is-2 .char`)

    let tl = gsap.timeline({ repeat: -1 })
    tl.to(firstChars, {
      translateY: '-0.2em',
      rotationY: '-5.7deg',
      rotationX: '-90deg',
      stagger: { each: 0.08 },
      ease: 'power3.inOut',
      duration: 0.7,
    })
    tl.from(
      secondChars,
      {
        translateY: '0.2em',
        rotationY: '5.7deg',
        rotationX: '90deg',
        stagger: { each: 0.08 },
        ease: 'power3.inOut',
        duration: 0.7,
      },
      0.1
    )
    // $(this).on('mouseenter', function () {
    //   tl.restart()
    // })
    // $(this).on('mouseleave', function () {
    //   tl.reverse()
    // })
  })
}

export { textRollTriple, textRollDouble }
