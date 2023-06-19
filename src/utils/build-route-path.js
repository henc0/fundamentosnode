export function buildRoutePath(path) {
	const routeParametersRegex = /:([a-zA-Z]+)/g;
	const pathWithParams = path.replaceAll(
		routeParametersRegex,
		"(?<$1>[a-z0-o-_]+)"
	);

	const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

	return pathRegex;
}
