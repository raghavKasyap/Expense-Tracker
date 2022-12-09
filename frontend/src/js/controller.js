import state from './state.js'

import * as calendarController from './controllers/calendarController.js'
import * as expenditureController from './controllers/expenditureController.js'
import * as tagsController from './controllers/tagsController.js'

import { getISO, wait } from './miscellaneous/utils.js'
import { updateSelectDate } from './models/expenditureModal.js'

const init = function () {
	state.currDate = new Date()
	updateSelectDate(getISO(state.currDate))

	calendarController.showCalendar(state.currDate)
	expenditureController.showExpenditures(state.expenditure)
	tagsController.showTags()

	//Adding all the hanlders here..
	calendarController.addHandlers()
	expenditureController.addHandlers()
	console.log(state)

	const modal = document.querySelector('.modal')
	const overlay = document.querySelector('.overlay')
	const btnCloseModal = document.querySelector('.btn--close-modal')
	const btnsOpenModal = document.querySelectorAll('.btn-add-tag')

	const openModal = async function () {
		modal.classList.remove('visuallyhidden')
		overlay.classList.remove('visuallyhidden')

		await wait(0.2)

		modal.classList.remove('hidden')
	}

	const closeModal = async function () {
		modal.classList.add('hidden')

		await wait(0.2)
		modal.classList.add('visuallyhidden')
		overlay.classList.add('visuallyhidden')
	}

	btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))

	btnCloseModal.addEventListener('click', closeModal)
	overlay.addEventListener('click', closeModal)

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
			closeModal()
		}
	})
}

init()
