import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		title: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		modeOfPayment: {
			type: String,
			required: true,
		},
		bank: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		tags: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Tag',
				},
			],
			default: [],
		},
	},
	{
		timestamps: true,
	}
)

const Expense = new mongoose.model('Expense', expenseSchema)

export default Expense
