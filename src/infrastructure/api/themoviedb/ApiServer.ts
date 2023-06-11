export default function ApiServer(): string {
	const domain = import.meta.env.VITE_API;

	return domain;
}
