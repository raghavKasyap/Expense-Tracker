import { formatDate } from '../miscellaneous/utils'
import gpay from 'url:../../imgs/google-pay-icon.png'
import hdfc from 'url:../../imgs/HDFC-Bank-logo.png'

import View from './View'
import Modal from '../miscellaneous/modal'

class ExpenditureView extends View {
	_parentElement = document.querySelector('.expenses-container')
	_addBtn = document.querySelector('.btn-addExpense')
	_addModal = document.querySelector('.modal--add-expense')
	_closeModal = document.querySelector('.btn--close-modal-expense')

	_generateMarkup() {
		return this._data.hasData
			? `
            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>

            <div class="expense-box">
                <div class="expense">
                    <div class="expense__title">expense 1</div>
                    <img
                        src="${gpay}"
                        alt=""
                        class="expense__mode-of-pay"
                    />

                    <img src="${hdfc}" alt="" class="expense__bank" />
                    <div class="expense__total-wrapper">
                        <i class="ph-currency-inr"></i>
                        <span class="expnese__total">1000</span>
                    </div>

                    <div class="expense__actions">
                        <div class="modify-expense btn btn--square--small">
                            <i class="ph-note-pencil"></i>
                        </div>
                        <div class="delete-expense btn btn--square--small">
                            <i class="ph-trash"></i>
                        </div>
                    </div>
                </div>
                <div class="expense__tags">
                    <div class="expense__tag">food</div>
                    <div class="expense__tag">entertainment</div>
                    <div class="expense__tag">friends</div>
                    <div class="expense__tag">food</div>
                </div>
            </div>
            `
			: `
                <div class="expense-box--loading"></div>
                <div class="expense-box--loading"></div>
                <div class="expense-box--loading"></div>
                <div class="expense-box--loading"></div>
                <div class="expense-box--loading"></div>
            `
	}

	updateDate(date) {
		const dateSelected = document.querySelector('.date--selected')
		const btnAddExpense = document.querySelector('.btn-addExpense')
		btnAddExpense.dataset.date = date
		dateSelected.textContent = formatDate(date)
	}

	addDeleteHandler(handler) {
		this._parentElement.addEventListener('click', (e) => {
			const deleteBtn = e.target.closest('.delete-expense')

			if (!deleteBtn) return

			const deleteExpense = e.target.closest('.expense-box')
			handler(deleteExpense)
		})
	}

	addExpenseModalHandler() {
		const addExpenseModal = new Modal(this._addModal, this._addBtn, this._closeModal)
		addExpenseModal.addHandlers()
	}
}

export default new ExpenditureView()
