import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import ApiServer from "./ApiServer";
import { HttpMethod } from "../../../domain/HttpMethod";

const token = import.meta.env.VITE_TOKEN;

export default class BaseApi {
	constructor(apiAddress: string) {
		this.baseUrl = ApiServer() + apiAddress;
	}

	private readonly baseUrl: string;

	protected async request<T>(
		uri: string,
		method: HttpMethod,
		body: object | null = null
	): Promise<AxiosResponse<T>> {
		const req: AxiosRequestConfig = {
			baseURL: this.baseUrl,
			url: uri,
			method: method,
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			data: body,
		};

		let resp: AxiosResponse<T>;

		try {
			resp = await Axios.request<T>(req);
		} catch (error: unknown) {
			const axiosError = error as AxiosError<T>;

			if (axiosError?.isAxiosError && axiosError?.response !== null && axiosError?.response !== undefined) {
				resp = axiosError.response;

				return resp;
			}
			throw error;
		}
		return resp;
	}
}
