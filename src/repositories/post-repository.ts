import { PostModel } from "../models/post-model";

export interface PostRepository{
	createPost: (post: PostModel) => void
	getAllPosts: (pageSize?: number, page?: number) => Promise<PostModel[]>
	getPost: (id: string) => Promise<PostModel | null>
	updatePost: (id: string, post: PostModel) => void
	deletePost: (id: string) => void
}