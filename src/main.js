import activateBizCardRotate from './features/bizCardRotate'
import activateDropdown from './features/dropdown'
import activateHeroSpin from './features/heroSpin'
import { textRollTriple, textRollDouble } from './features/textRoll'
import createWallpaperAnim from './features/wallpaper'

const activateFeatures = () => {
  activateDropdown()
  activateHeroSpin()
  textRollTriple('.roll-text', '.roll-container')
  textRollDouble('.contact-info-text', '.contact-info-text-wrap')
  activateBizCardRotate('.biz-card-container')
}

createWallpaperAnim(activateFeatures)
