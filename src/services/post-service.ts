import { PostModel } from "../models/post-model";
import { PostRepository } from "../repositories/post-repository";

export class PostService{
	constructor(
		private PostRepository: PostRepository
	){}

	createPost(post: PostModel){
		this.PostRepository.createPost(post)
	}

	async getAllPosts(pageSize: number, page: number){
		return await this.PostRepository.getAllPosts(pageSize, page)
	}

	async getPost(id: string){
		return await this.PostRepository.getPost(id)
	}

	updatePost(id: string, post: PostModel){
		this.PostRepository.updatePost(id, post)
	}

	deletePost(id: string){
		this.PostRepository.deletePost(id)
	}
}