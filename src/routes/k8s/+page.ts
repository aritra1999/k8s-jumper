import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/context');
	const contexts = response.json();
	return { contexts };
}) satisfies PageLoad;
