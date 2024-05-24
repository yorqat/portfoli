import { removeAttrAndLocalStorage, setAttrAndLocalStorage } from './localStorage'

type CheckState = 'true' | 'false' | 'mixed'

const initA11y = (reducedMotionInit: CheckState, darkInit: CheckState) => {
	let reducedMotion = localStorage.getItem('force-reduced-motion')
	if (reducedMotion) {
		switch (reducedMotion) {
			case 'reduce':
				reducedMotionInit = 'true'
				break
			case 'no-reduce':
				reducedMotionInit = 'false'
				break
		}

		reducedMotionUpdate(reducedMotionInit)
		reducedMotionUpdate(reducedMotionInit)
	}

	let darkTheme = localStorage.getItem('force-dark-theme')
	if (darkTheme) {
		switch (darkTheme) {
			case 'dark':
				darkInit = 'true'
				break
			case 'light':
				darkInit = 'false'
				break
		}

		darkThemeUpdate(darkInit)
		darkThemeUpdate(darkInit)
	}
}

// update viewport reduced motion based on current state
const reducedMotionUpdate = (check_state: CheckState) => {
	const item = 'force-reduced-motion'

	switch (check_state) {
		case 'true':
			setAttrAndLocalStorage(item, 'reduce')
			break
		case 'false':
			setAttrAndLocalStorage(item, 'no-reduce')
			break
		case 'mixed':
			removeAttrAndLocalStorage(item)
			break
	}
}

// update viewport dark theme based on current state
const darkThemeUpdate = (check_state: CheckState) => {
	const item = 'force-dark-theme'

	switch (check_state) {
		case 'true':
			setAttrAndLocalStorage(item, 'dark')
			break
		case 'false':
			setAttrAndLocalStorage(item, 'light')
			break
		case 'mixed':
			removeAttrAndLocalStorage(item)
			break
	}
}

export { reducedMotionUpdate, darkThemeUpdate, initA11y }
export type { CheckState }
