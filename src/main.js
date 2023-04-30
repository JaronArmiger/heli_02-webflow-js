import activateBizCardRotate from './features/bizCardRotate'
import activateDropdown from './features/dropdown'
import activateHeroSpin from './features/heroSpin'
import projectPreview from './features/projectPreview'
import {
  textRollTriple,
  textRollDouble,
  textRollHover,
} from './features/textRoll'
import createWallpaperAnim from './features/wallpaper'

const activateFeatures = () => {
  activateDropdown()
  activateHeroSpin()
  textRollTriple('.roll-text', '.roll-container')
  textRollDouble('.contact-info-text', '.contact-info-text-wrap')
  textRollHover('.work_title', '.work_link')
  activateBizCardRotate('.biz-card-container')
  projectPreview()
}

createWallpaperAnim(activateFeatures)
