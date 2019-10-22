import * as Bunyan from 'bunyan';
import { IConfig } from "../types/IConfig";

export const isAuthenticated = (config: IConfig, authorizationHeader: string, log: Bunyan): boolean => {
	const header = authorizationHeader || ''; // get the header
	const token = header.split(/\s+/).pop() || ''; // and the encoded auth token
	const auth = new Buffer(token, 'base64').toString(); // convert from base64
	const [username, password] = auth.split(/:/); // split on colon

	return username === config.basicAuthentication.username
		&& password === config.basicAuthentication.password;
}
