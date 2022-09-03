import mongoose from "mongoose"
import { connectedMessage, errorMessage } from "../../helpers/colorized-messages"
import 'dotenv/config';

export let mongoDb = mongoose.connection

export const closeConnectionToMongoDb = () => {mongoDb.close()}

export function stablishMongoDBConnection(){
	mongoose.connect(process.env.DB_URL+"/"+process.env.DB_NAME)
	mongoDb.on('error', console.log.bind(console, errorMessage(new Date)+'MongoDB connection error'))
	mongoDb.once('open', () => console.log(connectedMessage(new Date)+'Successfully connected to MongoDB on mongodb+srv://root:'+process.env.ATLAS_PWD+'@fuerzachallenge.in0y8dp.mongodb.net/'+process.env.DB_NAME))
}