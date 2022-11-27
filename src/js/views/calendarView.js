import { getMonthName } from '../utils'

class CalendarView {
	#parentElement = document.querySelector('.section--calendar')
	#data

	render(data) {
		this.#data = data

		this._clear()
		const markup = this._generateMarkup()
		this.#parentElement.insertAdjacentHTML('afterbegin', markup)
	}

	_clear() {
		this.#parentElement.innerHTML = ''
	}

	_generateMarkup() {
		const { prevMonth, prevYear } = this._findPrevDate()
		const { nextMonth, nextYear } = this._findNextDate()

		return `
            <div class="calendar__label">
                <div class="btn btn--circular btn--changeMonth" data-update-month="${prevMonth}" data-update-year="${prevYear}">
                    <i class="ph-caret-left"></i>
                </div>

                <div class="heading--label">
                    <span class="label__month">${getMonthName(this.#data.selectDate.month)}</span>
                    <span class="label__year">${this.#data.selectDate.year}</span>
                </div>
                <div class="btn btn--circular btn--changeMonth" data-update-month="${nextMonth}" data-update-year="${nextYear}">
                    <i class="ph-caret-right"></i>
                </div>
            </div>

            <div class="calendar__matrix">
                <div class="calendar__matrix__cell calendar__matrix__cell--day">S</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">M</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">T</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">W</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">T</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">F</div>
                <div class="calendar__matrix__cell calendar__matrix__cell--day">S</div>

                ${this.#data.data
					.map((ele) => {
						switch (ele.type) {
							case 'previous': {
								return `<div class="calendar__matrix__cell"></div>`
							}

							case 'current': {
								return `
                                    <div class="calendar__matrix__cell calendar__matrix__cell--date">
                                            <div class="date" data-date="${ele.iso}">${
									ele.date
								}</div>
                                            ${
												this.#data.hasExpensesData
													? ` <div class="date__expenditure">
                                                        <i class="ph-currency-inr"></i> ${ele.expense}
                                                    </div>
                                                    `
													: `<div class="date__expenditure-load">
                                                </div>`
											}
                                            
                                    </div>
                                `
							}
						}
					})
					.join('')}
            
            </div>
        </div>
        `
	}

	addChangeMonthHandlerRender(handler) {
		document.querySelectorAll('.btn--changeMonth').forEach((btn) => {
			btn.addEventListener('click', (e) => {
				handler(
					new Date(
						e.currentTarget.dataset.updateYear,
						e.currentTarget.dataset.updateMonth
					)
				)
			})
		})
	}

	_findPrevDate() {
		return {
			prevMonth: this.#data.selectDate.month === 0 ? 11 : this.#data.selectDate.month - 1,
			prevYear:
				this.#data.selectDate.month === 0
					? this.#data.selectDate.year - 1
					: this.#data.selectDate.year,
		}
	}

	_findNextDate() {
		return {
			nextMonth: this.#data.selectDate.month === 11 ? 0 : this.#data.selectDate.month + 1,
			nextYear:
				this.#data.selectDate.month === 11
					? this.#data.selectDate.year + 1
					: this.#data.selectDate.year,
		}
	}
}

export default new CalendarView()
