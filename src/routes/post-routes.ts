import express from "express"
import { PostController } from "../controllers/post-controller"
import { Authenticate } from "../middlewares/route-authentication"

export const routerPosts = express.Router()

routerPosts
	.post('/api/posts', Authenticate, PostController.createPost)
	.get('/api/posts', Authenticate, PostController.getAllPosts)
	.get('/api/posts/:id', Authenticate, PostController.getPost)
	.put('/api/posts/:id', Authenticate, PostController.updatePost)
	.delete('/api/posts/:id', Authenticate, PostController.deletePost)