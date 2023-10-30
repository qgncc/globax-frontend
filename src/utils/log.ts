export function log(...msg: any) {
	if (import.meta.env.DEV) {
		console.log(...msg);
	}
}
