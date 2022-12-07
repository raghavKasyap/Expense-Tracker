import { getMonthName, getISO } from '../miscellaneous/utils'
import View from './View.js'

class CalendarView extends View {
	_parentElement = document.querySelector('.section--calendar')

	_generateMarkup() {
		const { prevMonth, prevYear } = this._findPrevDate()
		const { nextMonth, nextYear } = this._findNextDate()

		return `
            <div class="calendar__label">
                <div class="btn btn--circular btn--changeMonth" data-update-month="${prevMonth}" data-update-year="${prevYear}">
                    <i class="ph-caret-left"></i>
                </div>

                <div class="heading--label">
                    <span class="label__month">${getMonthName(this._data.selectDate.month)}</span>
                    <span class="label__year">${this._data.selectDate.year}</span>
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

                ${this._data.data
					.map((ele) => {
						switch (ele.type) {
							case 'previous': {
								return `<div class="calendar__matrix__cell"></div>`
							}

							case 'current': {
								return `
                                    <div class="calendar__matrix__cell calendar__matrix__cell--date" data-date="${
										ele.iso
									}">
                                            <div class="date">${ele.date}</div>
                                            ${
												this._data.hasExpensesData
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
		this._parentElement.addEventListener('click', (e) => {
			const btn = e.target.closest('.btn--changeMonth')
			if (!btn) return

			handler(new Date(btn.dataset.updateYear, btn.dataset.updateMonth))
		})
	}

	addDateHandler(handler) {
		this._parentElement.addEventListener('click', (e) => {
			const dateCell = e.target.closest('.calendar__matrix__cell--date')

			if (!dateCell) return

			handler(dateCell.dataset.date)
		})
	}

	_findPrevDate() {
		return {
			prevMonth: this._data.selectDate.month === 0 ? 11 : this._data.selectDate.month - 1,
			prevYear:
				this._data.selectDate.month === 0
					? this._data.selectDate.year - 1
					: this._data.selectDate.year,
		}
	}

	_findNextDate() {
		return {
			nextMonth: this._data.selectDate.month === 11 ? 0 : this._data.selectDate.month + 1,
			nextYear:
				this._data.selectDate.month === 11
					? this._data.selectDate.year + 1
					: this._data.selectDate.year,
		}
	}
}

export default new CalendarView()
