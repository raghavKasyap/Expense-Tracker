import Modal from '../miscellaneous/modal'
import View from './View'

class TagsView extends View {
	_parentElement = document.querySelector('.tag-container')
	_addBtn = document.querySelector('.btn-add-tag')
	_addModal = document.querySelector('.modal--add-tag')
	_closeModal = document.querySelector('.btn--close-modal-tag')
	_generateMarkup() {
		return `
			<div class="tag" id="tag--1">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Food</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--2">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Clothing</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--3">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Travel</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--4">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Subscription</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>
			<div class="tag" id="tag--1">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Food</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--2">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Clothing</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--3">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Travel</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--4">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Subscription</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>
			<div class="tag" id="tag--1">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Food</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--2">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Clothing</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--3">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Travel</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>

			<div class="tag" id="tag--4">
				<input type="checkbox" name="select all" id="0" />
				<div class="tag__name">Subscription</div>
				<div class="tag__total"><i class="ph-currency-inr"></i> 900</div>
				<div class="tag__color"></div>
			</div>
		`
	}

	addTagModalHandler() {
		const modal = new Modal(this._addModal, this._addBtn, this._closeModal)
		modal.addHandlers()
	}
}

export default new TagsView()
