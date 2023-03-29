import activateDropdown from './features/dropdown'
import activateHeroSpin from './features/heroSpin'
import textRollTriple from './features/textRoll'
import createWallpaperAnim from './features/wallpaper'

createWallpaperAnim()
activateDropdown()
activateHeroSpin()
textRollTriple('.roll-text', '.roll-container')
