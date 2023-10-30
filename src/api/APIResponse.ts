export class APIResponse<
	Data extends unknown,
	isSuccess extends boolean = true | false,
> {
	static success<D extends unknown>(data: D) {
		return new APIResponse<D, true>(true, data);
	}
	static failure<E extends unknown = unknown>(error: E) {
		return new APIResponse<E, false>(false, error);
	}
	isSuccess: boolean;
	data: Data;
	constructor(isSuccess: isSuccess, data: Data) {
		this.isSuccess = isSuccess;
		this.data = data;
	}
}

export type APIResponsePromise<
	isSuccess extends boolean,
	Data extends unknown,
	Error extends unknown = unknown,
> = isSuccess extends true
	? Promise<APIResponse<Data, true>>
	: Promise<APIResponse<Error, false>>;
