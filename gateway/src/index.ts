export default {
	async fetch(request, env, ctx): Promise<Response> {
		const pathname = URL.parse(request.url)!.pathname;

		if(pathname.startsWith('/muscu')){
			return env.MUSCU.fetch(request);
		} else if(pathname.startsWith('/bassin')){
			return env.BASSIN.fetch(request);
		}

		return Response.json("oops")
	},
} satisfies ExportedHandler<Env>;
