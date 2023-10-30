import { log } from "../utils/log";
import { APIResponse } from "./APIResponse";
import { RequestObjects, RequestParams } from "./routes";

class API {
	async request<
		Data extends unknown,
		K extends keyof RequestObjects = keyof RequestObjects,
	>(requestObject: RequestObjects[K], params?: RequestParams[K]) {
		const body = params?.body;
		const query = params?.query;
		const urlParams = new URLSearchParams(query).toString();
		const url = new URL(requestObject.URL).toString();
		const urlString = url + "?" + urlParams;

		try {
			log("API Request: ", requestObject);
			const result = await fetch(urlString, {
				method: requestObject.METHOD,
				body,
			});
			log("API Response: ", result);
			const json = await result.json();
			return APIResponse.success<Data>(json);
		} catch (e) {
			log("API Error: ", e);
			return APIResponse.failure(null);
		}
	}
}

export const api = new API();
