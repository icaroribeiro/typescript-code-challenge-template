import express from 'express'
import bodyParser from 'body-parser'
import rootRouter from '@/internal/presentation/api/routes/index'

const server = express()

server.use(bodyParser.json())

server.use('/', rootRouter)

export default server
