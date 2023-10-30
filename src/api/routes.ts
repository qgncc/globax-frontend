export const USER_API = {
	GET: { URL: "http://localhost:3000", METHOD: "GET" },
} as const;

export type UserAPIParams = {
	GET: { query: { term: string }; body?: undefined };
};

export type RequestObjects = typeof USER_API;
export type RequestParams = UserAPIParams;
