import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'

import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import AppError from './utils/appError.js'
import { globalErrorController } from './controllers/errorController.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/v1/users', userRoutes)

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.all('*', (req, res, next) => {
	const err = new AppError(`Can't find URL ${req.originalUrl} on this server`, 404)

	next(err)
})

// Error Handling Middleware
app.use(globalErrorController)

const port = process.env.PORT | 5000

app.listen(port, console.log(chalk.yellow.bold(`Server is running on port ${port}`)))
