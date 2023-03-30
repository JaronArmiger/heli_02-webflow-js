import activateDropdown from './features/dropdown'
import activateHeroSpin from './features/heroSpin'
import { textRollTriple, textRollDouble } from './features/textRoll'
import createWallpaperAnim from './features/wallpaper'

createWallpaperAnim()
activateDropdown()
activateHeroSpin()
textRollTriple('.roll-text', '.roll-container')
textRollDouble('.contact-info-text', '.contact-info-text-wrap')
