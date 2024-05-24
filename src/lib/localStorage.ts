const getViewport = () => {
	return document.getElementById('viewport')
}

const setAttrAndLocalStorage = (item: string, value: string) => {
	let viewport = getViewport()

	viewport?.setAttribute(`data-${item}`, value)
	localStorage.setItem(item, value)
}

const removeAttrAndLocalStorage = (item: string) => {
	let viewport = getViewport()

	viewport?.removeAttribute(`data-${item}`)
	localStorage.removeItem(item)
}

export { setAttrAndLocalStorage, removeAttrAndLocalStorage }
