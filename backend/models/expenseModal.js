import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
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
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
