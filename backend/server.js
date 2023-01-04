import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
	res.send('API is running...')
})

const port = process.env.PORT | 5000

app.listen(port, console.log(chalk.yellow.bold(`Server is running on port ${port}`)))
