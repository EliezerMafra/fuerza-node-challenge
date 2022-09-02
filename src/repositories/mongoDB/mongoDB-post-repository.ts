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
	async getAllPosts(pageSize?: number, page?: number){
		if((typeof page != 'undefined') && (typeof pageSize != 'undefined')) {
			return await PostModelMongoose.find({}).limit(pageSize).skip(pageSize * page).exec()
		}else{
			return await PostModelMongoose.find({}).exec()
		}
	}
	async getPost(id: string){
		const post =  await PostModelMongoose.findById(id).exec()

		if(!post){
			throw new Error("Error getting post: id: " + id + " does not exist")
		}

		return post
	}
	updatePost(id: string, post: PostModel){
		PostModelMongoose.findByIdAndUpdate(id, {$set: post},(err: String, post: PostModel) => {
			if(err){
				throw new Error("Error updating post: " + err)
			}
			if(!post){
				throw new Error("Error updating the post: id: " + id + " does not exist")
			}
		})
	}
	deletePost(id: string){
		PostModelMongoose.findByIdAndDelete(id, (err: String, post: PostModel) => {
			if(err){
				throw new Error("Error deleting post: " + err)
			}
			if(!post){
				throw new Error("Error deleting the post: id: " + id + " does not exist")
			}
		})
	}

}