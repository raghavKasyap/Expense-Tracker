import jwt from 'jsonwebtoken'

import User from '../models/userModal.js'
import AppError from '../utils/appError.js'
import catchAsync from '../utils/catchAsync.js'

const signToken = function (id) {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	})
}

export const signup = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	})

	const token = signToken(newUser._id)

	res.status(201).json({
		status: 'success',
		token,
		data: {
			user: newUser,
		},
	})
})

export const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body

	if (!email || !password) {
		return next(new AppError('Email and Password both are required', 400))
	}

	const user = await User.findOne({ email })
	const correct = await user.correctPassword(password, user.password)

	if (!user || !correct) {
		return next(new AppError('Invalid Username or Password', 401))
	}

	const token = signToken(user._id)

	res.status(200).json({
		status: 'success',
		token,
	})
})
