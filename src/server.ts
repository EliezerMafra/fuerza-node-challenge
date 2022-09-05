import { app } from "./app"
import { stablishMongoDBConnection } from "./config/database/mongoDB-config"
import { docsMessage, runningMessage } from "./helpers/colorized-messages"

const port = parseInt(process.env.PORT||'3030')

const server_ip = process.env.SERVER_IP || 'localhost'

const server_url = process.env.HOST_URL || 'localhost'

app.listen(port, server_ip,  () =>{
	console.log(runningMessage(new Date)+'Listening on http://' + server_url + ':' + port)
	console.log(docsMessage(new Date)+'Access here to see the docs: http://' + server_url + ':' + port + '/api-docs')
})

stablishMongoDBConnection()