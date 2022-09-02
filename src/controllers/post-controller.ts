import { Request, Response } from "express"
import { createMessage, deleteMessage, getMessage, updateMessage } from "../helpers/colorized-messages"
import { PostModel } from "../models/post-model"
import { MongoDBPostRepository } from "../repositories/mongoDB/mongoDB-post-repository"
import { PostService } from "../services/post-service"

export class PostController{
	private static getService(){
		return new PostService(new MongoDBPostRepository)
	}

	static createPost = (req: Request, res: Response) => {
		try{
			const newPost: PostModel = req.body

			const service = PostController.getService()
	
			service.createPost(newPost)
	
			console.log(createMessage(new Date) + 'Creating POST with the params: ' + JSON.stringify(newPost))
	
			res.status(201).send()
		}catch(err){
			res.status(400).send(err)
		}
	}

	static getAllPosts = async (req: Request, res: Response) => {
		try{
			const pageSize = (typeof req.query.pageSize === 'string') ? parseInt(req.query.pageSize) : 20;
			const page = (typeof req.query.page === 'string') ? parseInt(req.query.page) : 0;
	
			const service = PostController.getService()
	
			console.log(getMessage(new Date) + 'Getting all POSTS')
	
			res.status(200).send(await service.getAllPosts(pageSize, page))
		}catch(err){
			res.status(400).send(err)
		}
	}

	static getPost = async (req: Request, res: Response) => {
		try{
			const id = req.params.id
	
			const service = PostController.getService()
	
			console.log(getMessage(new Date) + 'Getting POSTS with the id: ' + JSON.stringify(id));
	
			res.status(200).send(await service.getPost(id))
		}catch(err){
			res.status(400).send(err)
		}
	}

	static updatePost = (req: Request, res: Response) => {
		try{
			const id = req.params.id
			const updatedPost: PostModel = req.body
	
			const service = PostController.getService()
	
			service.updatePost(id, updatedPost)
	
			console.log(updateMessage(new Date) + 'Updating POST with the params: ' + JSON.stringify(updatedPost))
	
			res.status(202).send()
		}catch(err){
			res.status(400).send(err)
		}
	}
	static deletePost = (req: Request, res: Response) => {
		try{
			const id = req.params.id
	
			const service = PostController.getService()
	
			service.deletePost(id)
	
			console.log(deleteMessage(new Date) + 'Deleting POST with the params: ' + JSON.stringify(id))
	
			res.status(202).send()
		}catch(err){
			res.status(400).send(err)
		}
	}
}