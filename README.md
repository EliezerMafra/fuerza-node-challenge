<h1 align='center'>🔗 Fuerza NodeJS Backend Challenge 🔗</h1> 

## 💻 Description

The project is a simple challenge to test my skills in building APIs using the Node.js framework.

## 📃 Requirements

- [X] All API responses must be in JSON format.
- [X] Add pagination on the API for the listing of the posts
- [X] Provide the unit testing for all routes using Mocha and Chai or your preferred testing framework.
- [X] Provide documentation for all routes, we preferer using Swagger API, but you can using README for documentation.
- [X] Provide a README file with usage instructions (how to the runs, considerations, etc...).
- [X] Use naming written as camelCase by convention.
- [X] Process and validate the data that the API receives before creating the post.
- [X] Using MongoDB for storage data
- [X] Using Swagger API documentation
- [X] Authenticated the routes using JWT

## 📜 Documentation

The project documentation was done using Swagger and can be accessed on the route: <kbd>/api-docs</kbd>

## 🧩 Project Structure

The folder structure was modified to provide more **decoupling** to the project:
**The <kbd>Model</kbd> step was divided into <kbd>Service</kbd>, <kbd>Repository</kbd> , and <kbd>Model</kbd>**


## ⚙️ Installation
1. Clone the repository
1. Change to the repository directory
1. Install the dependencies by running the following command
   ```shell
    npm i
    ```
1. Create a <kbd>.env</kbd> file on the root directory following the <kbd>.env.example</kbd> file

	PS.: **If you are the code reviewer, the database credentials will be send to the recruiter**

## ⚒ Testing

1. After following the steps above, run the following command
   ```shell
    npm test
    ```
1. The test nutshell will be visible on the command line but it can also be accessed on the <kbd>coverage/lcov-report/index.html</kbd> file that will be created on the repository root diretory. Open it on your browser

## 🚀 Running the server in a Development Environment

1. Run the following command
	```shell
	npm run dev
	```

## 🚀 Running the server in a Production Environment

1. Run the following command to compile the TypeScript code
	```shell
	npm run build
	```
2. Run the server JavaScript compiled version
   	```shell
	npm start
	```
