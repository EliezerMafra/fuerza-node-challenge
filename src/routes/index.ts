import { Express } from 'express'
import { routerPosts } from './post-routes'

export const routes = (app: Express) => {
	app.use(
		routerPosts
	)
}