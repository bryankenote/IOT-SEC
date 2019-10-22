import { LoggerOptions } from 'bunyan';
import { IDevice } from './IDevice';

export interface IConfig {
	myPortableDevices: IDevice[]; // these will not trigger alerts
	knownPortableDevices?: IDevice[]; // these will trigger alerts
	emailServer: {
		user: string;
		password: string;
		host: string;
		ssl: boolean;
	};
	emailRecipient: {
		text: string;
		from: string;
		to: string;
		ssl: boolean;
		port: number;
	};
	okResponseBody: string;
	basicAuthentication: {
		enabled: boolean;
		username: string;
		password: string;
	};
	bunyan: LoggerOptions;
}
