// Opening & Closing Functionality of the modal goes here.

import { wait } from './utils'

export default class Modal {
	_overlay = document.querySelector('.overlay')

	constructor(modal, btnOpenModal, btnCloseModal) {
		this._modal = modal
		this._btnOpenModal = btnOpenModal
		this._btnCloseModal = btnCloseModal
	}

	async openModal() {
		console.log(this._overlay)
		this._modal.classList.remove('visuallyhidden')
		this._overlay.classList.remove('visuallyhidden')

		await wait(0.2)
		this._modal.classList.remove('hidden')
	}

	async closeModal() {
		this._modal.classList.add('hidden')

		await wait(0.2)
		this._modal.classList.add('visuallyhidden')
		this._overlay.classList.add('visuallyhidden')
	}

	addHandlers() {
		this._btnOpenModal.addEventListener('click', this.openModal.bind(this))
		this._btnCloseModal.addEventListener('click', this.closeModal.bind(this))
		this._overlay.addEventListener('click', this.closeModal.bind(this))

		document.addEventListener(
			'keydown',
			function (e) {
				if (e.key === 'Escape' && !this._modal.classList.contains('hidden')) {
					this.closeModal()
				}
			}.bind(this)
		)
	}
}
