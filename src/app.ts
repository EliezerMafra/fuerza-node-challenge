import express from 'express'
import cors from 'cors'
import { routes } from './routes'

export const app = express()
app.use(cors()) // esta permitindo requisições vindas de qualquer lugar, adicionar posteriormente o link do servidor de frontend
app.use(express.json())
routes(app)