export default class View {
	_data

	render(data) {
		this._data = data

		this._clear()
		const markup = this._generateMarkup()
		this._parentElement.insertAdjacentHTML('afterbegin', markup)
	}

	update(data) {
		this._data = data

		const markup = this._generateMarkup()

		const newDOM = document.createRange().createContextualFragment(markup)
		const newElements = Array.from(newDOM.querySelectorAll('*'))
		const currElements = Array.from(this._parentElement.querySelectorAll('*'))
		console.log(newElements)
		console.log(currElements)

		newElements.forEach((newEl, i) => {
			const currEl = currElements[i]

			if (!newEl.isEqualNode(currEl) && newEl.firstChild?.nodeValue.trim() !== '') {
				currEl.textContent = newEl.textContent
			}
		})
	}

	_clear() {
		this._parentElement.innerHTML = ''
	}
}
