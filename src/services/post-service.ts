import { PostModel } from "../models/post-model";
import { PostRepository } from "../repositories/post-repository";

export class PostService{
	constructor(
		private PostRepository: PostRepository
	){}

	createPost(post: PostModel){
		if(!post.title){
			throw new Error("Post title was not provided")
		}
		if(!post.body){
			throw new Error("Post body was not provided")
		}

		if(post.title.length < 6){
			throw new Error("Title is too short")
		}
		if(post.body.length < 50){
			throw new Error("Write at least 50 characters on the body")
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
			throw new Error("Post id was not provided")
		}
		if(!post.title){
			throw new Error("Post title was not provided")
		}
		if(!post.body){
			throw new Error("Post body was not provided")
		}

		if(post.title.length < 6){
			throw new Error("Title is too short")
		}
		if(post.body.length < 50){
			throw new Error("Write at least 50 characters on the body")
		}
		this.PostRepository.updatePost(id, post)
	}

	deletePost(id: string){
		if(!id){
			throw new Error("Post id was not provided")
		}
		this.PostRepository.deletePost(id)
	}
}