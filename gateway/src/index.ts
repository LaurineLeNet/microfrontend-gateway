export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = URL.parse(request.url)!;
		const pathname = url.pathname;
		url.pathname = url.pathname.replace(/^\/[^/]+/, "");

		if (pathname.startsWith("/muscu")) {
			return env.MUSCU.fetch(url, request);
		} else if (pathname.startsWith("/bassin")) {
			return env.BASSIN.fetch(url, request);
		}

		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
