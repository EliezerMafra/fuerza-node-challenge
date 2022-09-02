import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./docs/swagger"
import express from 'express'
import cors from 'cors'
import { routes } from './routes'

export const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors()) // esta permitindo requisições vindas de qualquer lugar, adicionar posteriormente o link do servidor de frontend
app.use(express.json())
routes(app)