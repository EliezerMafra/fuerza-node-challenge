import { Request, Response, NextFunction } from "express";

async function Authenticate(request: Request, response: Response, next: NextFunction) {
	const token = request.headers.authorization;

	if (!token) {
		return response.status(401).json({ error: "Token was not sent" });
	}

	const [, user] = token.split(" ");

	if (user === process.env.API_TOKEN) {
		return next();
	}

	return response.status(401).json({ error: "You do not have permission to access this API" });
}

export { Authenticate };
