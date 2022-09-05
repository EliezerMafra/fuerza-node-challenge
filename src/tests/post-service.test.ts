import { PostService } from "../services/post-service"

const createPostSpy = jest.fn()
const getAllPostsSpy = jest.fn()
const getPostSpy = jest.fn()
const updatePostSpy = jest.fn()
const deletePostSpy = jest.fn()

const repository = {
	createPost: createPostSpy,
	getAllPosts: getAllPostsSpy,
	getPost: getPostSpy,
	updatePost: updatePostSpy,
	deletePost: deletePostSpy
}

const postService = new PostService(repository)

describe('Create post', () => {
	it('should be able to create a new post', async () => {
		const newPost = {
			title: 'New post title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.createPost(newPost)).not.toThrow()

		expect(createPostSpy).toHaveBeenCalledWith(newPost)
	})

	it('should not be able to create a new post without title', () => {
		const newPost = {
			title: '',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.createPost(newPost)).toThrow()

		expect(createPostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to create a new post without body', () => {
		const newPost = {
			title: 'New post title',
			body: '',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.createPost(newPost)).toThrow()

		expect(createPostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to create a new post with short title', () => {
		const newPost = {
			title: 'Short',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.createPost(newPost)).toThrow()

		expect(createPostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to create a new post with short body', () => {
		const newPost = {
			title: 'New post title',
			body: 'Short',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.createPost(newPost)).toThrow()

		expect(createPostSpy).not.toHaveBeenCalled()
	})
})
describe('Get post', () => {
	it('should be able to get all posts with pagination', () => {
		const page = 0
		const pageSize = 10

		expect(postService.getAllPosts(pageSize, page)).resolves.not.toThrow()

		expect(getAllPostsSpy).toHaveBeenCalledWith(pageSize, page)
	})

	it('should be able to get all posts without pagination', () => {
		expect(postService.getAllPosts()).resolves.not.toThrow()

		expect(getAllPostsSpy).toHaveBeenCalled()
	})

	it('should be able to get one post by id', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		expect(postService.getPost(id)).resolves.not.toThrow()

		expect(getPostSpy).toHaveBeenCalledWith(id)
	})
})
describe('Update post', () => {
	it('should be able to update post', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		const updatedPost = {
			title: 'New post title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['newtag1', 'newtag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).not.toThrow()

		expect(updatePostSpy).toHaveBeenCalledWith(id, updatedPost)
	})

	it('should not be able to update post without query id', () => {
		const id = ''

		const updatedPost = {
			title: 'New post title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['newtag1', 'newtag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).toThrow()

		expect(updatePostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to update post without new title', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		const updatedPost = {
			title: '',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['newtag1', 'newtag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).toThrow()

		expect(updatePostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to update post without new body', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		const updatedPost = {
			title: 'New post title',
			body: '',
			tags: ['newtag1', 'newtag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).toThrow()

		expect(updatePostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to update post with short title', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		const updatedPost = {
			title: 'Short',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia in tellus vitae varius. Sed in congue ipsum. Curabitur eleifend, mauris id molestie interdum, mi ex rhoncus nunc, ut pulvinar felis mi eu lacus. In ornare, mi eget fringilla gravida, tortor urna ultrices justo, et sodales neque ligula non mi. Praesent erat leo, fringilla ac lacinia eget, vestibulum ac lectus. In non tempus elit. Fusce arcu arcu, commodo non tortor a, commodo dapibus ante. Praesent maximus pulvinar libero nec vulputate. Maecenas congue ante vel porta mollis. Cras rutrum magna at dui rutrum rutrum. Cras ac rhoncus eros, at sagittis lectus. Nunc a massa accumsan, eleifend elit sit amet, malesuada erat. Sed feugiat rutrum dapibus.',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).toThrow()

		expect(updatePostSpy).not.toHaveBeenCalled()
	})

	it('should not be able to update post with short body', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		const updatedPost = {
			title: 'New post title',
			body: 'Short',
			tags: ['tag1', 'tag2']
		}

		expect(() => postService.updatePost(id, updatedPost)).toThrow()

		expect(updatePostSpy).not.toHaveBeenCalled()
	})
})
describe('Delete post', () => {
	it('should be able to delete post', () => {
		const id = 'a8564d651sadsa41das85d6454dsa5da'

		expect(() => postService.deletePost(id)).not.toThrow()

		expect(deletePostSpy).toHaveBeenCalledWith(id)
	})
	it('should not be able to delete post without id', () => {
		const id = ''

		expect(() => postService.deletePost(id)).toThrow()

		expect(deletePostSpy).not.toHaveBeenCalled()
	})
})