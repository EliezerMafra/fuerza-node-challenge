import { PostModel } from "../models/post-model";
import { PostRepository } from "../repositories/post-repository";

export class PostService{
	constructor(
		private PostRepository: PostRepository
	){}

	createPost(post: PostModel){
		if(!post.title){
			throw new Error("Post title not provided")
		}
		if(!post.body){
			throw new Error("Post body not provided")
		}
		this.PostRepository.createPost(post)
	}

	async getAllPosts(pageSize?: number, page?: number){
		return await this.PostRepository.getAllPosts(pageSize, page)
	}

	async getPost(id: string){
		return await this.PostRepository.getPost(id)
	}

	updatePost(id: string, post: PostModel){
		if(!id){
			throw new Error("Post id not provided")
		}
		if(!post.title){
			throw new Error("Post title not provided")
		}
		if(!post.body){
			throw new Error("Post body not provided")
		}
		this.PostRepository.updatePost(id, post)
	}

	deletePost(id: string){
		if(!id){
			throw new Error("Post id not provided")
		}
		this.PostRepository.deletePost(id)
	}
}