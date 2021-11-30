export interface IProcessEnv {
	// 	REACT_APP_API: string;
	DOMAIN: string;
}

interface INodeModule {
	hot: any;
}

declare global {
	namespace NodeJS {
		interface ProcessEnv extends IProcessEnv {}
		interface Global {}
	}

	interface NodeModule extends INodeModule {}
}
