import 'dotenv/config';

const port = parseInt(process.env.PORT||'3030')

const server_ip = process.env.SERVER_IP || 'localhost'


export default {
	"openapi": "3.0.0",
	"info": {
		"title": "Post data manipulation API",
		"description": "This API manipulates the CRUD operations from posts",
		"contact":{
			"name": "Eliezer Marques Mafra",
			"email": "eliezermmafra@live.com",
			"url": "https://www.linkedin.com/in/eliezer-mafra/"
		},
		"version": "1.0.0"
	},
	"servers": [
		{
			"url": "http://" + server_ip + ":" + port,
			"description": "Test API"
		}
	],
	"paths": {
		"/api/posts":{
			"post": {
				"summary": "Create a new post",
				"description": "This route/method creates a new post on the database",
				"security": [{ "bearerAuth": [] }],
				"tags": ["Post"],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/Post"
							},
							"examples": {
								"Right post with tags":{
									"value": {
										"title": "Post 1 Title",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere.",
										"tags": ["tag1", "tag2", "tag3"]
									}
								},
								"Right post without tags":{
									"value": {
										"title": "Post 2 Title",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post without title":{
									"value": {
										"title": "",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post without body":{
									"value": {
										"title": "Post 4 Title",
										"body": ""
									}
								},
								"Wrong post with short title":{
									"value": {
										"title": "Post5",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post with short body":{
									"value": {
										"title": "Post 5 Title",
										"body": "Lorem"
									}
								}
							}
						}
					}
				},
				"responses": {
					"201": {
						"description": "Created: New post created"
					},
					"400": {
						"description": "Bad Request: It was not possible to create a new post"
					},
					"401": {
						"description": "Unauthorized: Provide the right API token"
					}
				}
			},
			"get": {
				"summary": "Get all posts",
				"description": "This route/method gets all posts from the database with or without pagination",
				"security": [{ "bearerAuth": [] }],
				"tags": ["Post"],
				"parameters": [
					{
						"in": "query",
						"name": "page",
						"description": "The number of the desired page",
						"required": false
					},
					{
						"in": "query",
						"name": "pageSize",
						"description": "Quantity of posts in each page",
						"required": false
					}
				],
				"responses": {
					"200": {
						"description": "OK: Posts returned successfully",
						"content": {
							"application/json": {
								"schema": {
									"type": "array",
									"items":{
										"$ref": "#/components/schemas/Post"
									}
								}
							}
						}
					},
					"400": {
						"description": "Bad Request: It was not possible to get the posts"
					},
					"401": {
						"description": "Unauthorized: Provide the right API token"
					}
				}
			}
		},
		"/api/posts/{id}":{
			"get": {
				"summary": "Get post by id",
				"description": "This route/method gets the post with the id specified",
				"security": [{ "bearerAuth": [] }],
				"tags": ["Post"],
				"parameters": [
					{
						"in": "path",
						"name": "id",
						"description": "ID of the desired post",
						"required": true
					}
				],
				"responses": {
					"200": {
						"description": "OK: Post returned successfully",
						"content": {
							"application/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/Post"
								}
							}
						}
					},
					"400": {
						"description": "Bad Request: It was not possible to get the post"
					},
					"401": {
						"description": "Unauthorized: Provide the right API token"
					}
				}
			},
			"put": {
				"summary": "Update post by id",
				"description": "This route/method updates the post with the id specified",
				"security": [{ "bearerAuth": [] }],
				"tags": ["Post"],
				"parameters": [
					{
						"in": "path",
						"name": "id",
						"description": "ID of the desired post",
						"required": true
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/Post"
							},
							"examples": {
								"Right post with tags":{
									"value": {
										"title": "Post 1 Title",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere.",
										"tags": ["tag1", "tag2", "tag3"]
									}
								},
								"Right post without tags":{
									"value": {
										"title": "Post 2 Title",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post without title":{
									"value": {
										"title": "",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post without body":{
									"value": {
										"title": "Post 4 Title",
										"body": ""
									}
								},
								"Wrong post with short title":{
									"value": {
										"title": "Post5",
										"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis aliquam tellus, id vehicula diam fringilla sed. Sed consequat augue bibendum, egestas turpis vel, viverra velit. Aenean non erat finibus ex luctus laoreet eget nec magna. Maecenas pharetra, ante non tristique pretium, sapien lectus condimentum urna, finibus semper metus est eu dui. Praesent et rutrum neque. Praesent efficitur ornare commodo. Donec facilisis nulla interdum nisi venenatis interdum. Proin nec lectus nisl. Vestibulum quis congue nulla. Nullam lacinia dolor eget elit aliquet iaculis. Curabitur consectetur accumsan felis at posuere."
									}
								},
								"Wrong post with short body":{
									"value": {
										"title": "Post 5 Title",
										"body": "Lorem"
									}
								}
							}
						}
					}
				},
				"responses": {
					"202": {
						"description": "Accepted: Post will update successfully"
					},
					"400": {
						"description": "Bad Request: It was not possible to update the post"
					},
					"401": {
						"description": "Unauthorized: Provide the right API token"
					}
				}
			},
			"delete": {
				"summary": "Delete post by id",
				"description": "This route/method deletes the post with the id specified",
				"security": [{ "bearerAuth": [] }],
				"tags": ["Post"],
				"parameters": [
					{
						"in": "path",
						"name": "id",
						"description": "ID of the desired post",
						"required": true
					}
				],
				"responses": {
					"202": {
						"description": "Accepted: Post will delete successfully"
					},
					"400": {
						"description": "Bad Request: It was not possible to delete the post"
					},
					"401": {
						"description": "Unauthorized: Provide the right API token"
					}
				}
			}
		}
	},
	"components": {
		"schemas": {
			"Post": {
				"type": "object",
				"properties": {
					"title": { "type": "string" },
					"body": { "type": "string" },
					"tags": { "type": "array", "items": { "type": "string" } }
				}
			}
		},
		"securitySchemes": {
			"bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "JWT" }
		  }
	}
}