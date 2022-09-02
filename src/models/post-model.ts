import mongoose from "mongoose"

export interface PostModel{
	title: string,
	body: string,
	tags?: string[]
}

const postSchema = new mongoose.Schema(
	{
		id: {type: String},
		title: {type: String, required: true},
		body: {type: String, required: true},
		tags: {type: [String]},
	}
)

export const PostModelMongoose = mongoose.model('posts', postSchema)