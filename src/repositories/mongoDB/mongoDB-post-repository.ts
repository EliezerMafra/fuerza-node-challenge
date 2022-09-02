import { PostModel, PostModelMongoose } from "../../models/post-model";
import { PostRepository } from "../post-repository";

export class MongoDBPostRepository implements PostRepository{
	createPost(post: PostModel){
		let newPost = new PostModelMongoose(post);

		newPost.save((err) => {
			if(err) {
				throw new Error("Error creating post: " + err)
			}
		})
	}
	async getAllPosts(){
		return await PostModelMongoose.find().exec()
	}
	async getPost(id: string){
		return await PostModelMongoose.findById(id).exec()
	}
	updatePost(id: string, post: PostModel){
		PostModelMongoose.findByIdAndUpdate(id, {$set: post},(err: String, post: PostModel) => {
			if(err){
				throw new Error("Error updating post: " + err)
			}
		})
	}
	deletePost(id: string){
		PostModelMongoose.findByIdAndDelete(id, (err: String, post: PostModel) => {
			if(err){
				throw new Error("Error deleting post: " + err)
			}
		})
	}

}