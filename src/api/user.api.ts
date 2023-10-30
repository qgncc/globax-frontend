import { APIResponse, APIResponsePromise } from "./APIResponse";
import { api } from "./api";
import { USER_API } from "./routes";
import { User, UserRequest } from "./types/user.api.types";

class UserDTO {
	name: string;
	phone: string;
	email: string;
	admissionDate: string;
	position: string;
	division: string;
	additionalInfo: string;
	constructor(user: UserRequest) {
		this.name = user.name;
		this.phone = user.phone;
		this.email = user.email;
		this.admissionDate = user.hire_date;
		this.position = user.position_name;
		this.division = user.department;
		this.additionalInfo =
			"Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.";
	}
}

export const UserAPI = {
	async getUsers(filterByName?: string): APIResponsePromise<true, User[]> {
		const { isSuccess, data } = await api.request<UserRequest[]>(USER_API.GET, {
			query: { term: filterByName || "" },
		});
		if (isSuccess) {
			return APIResponse.success(data?.map((user) => new UserDTO(user)) || []);
		} else {
			return APIResponse.failure([]);
		}
	},
};
