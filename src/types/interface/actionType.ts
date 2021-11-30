export type ActionType<T = string, P = any, M = any> = (
	payload: P,
	meta?: M,
) => {
	type: T;
	payload: P;
	meta?: M;
};

export type SagaType<T = string, P = any, M = Object> = { type: T; payload: P; meta?: M };
