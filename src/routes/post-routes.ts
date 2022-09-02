import express from "express"
import { PostController } from "../controllers/post-controller"

export const routerPosts = express.Router()

routerPosts
	.post('/api/posts', PostController.createPost)
	.get('/api/posts', PostController.getAllPosts)
	.get('/api/posts/:id', PostController.getPost)
	.put('/api/posts/:id', PostController.updatePost)
	.delete('/api/posts/:id', PostController.deletePost)