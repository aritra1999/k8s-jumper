import { loadContexts } from '$lib/commands';
import { json } from '@sveltejs/kit';

export async function GET() {
	const contexts = await loadContexts();

	return json(contexts);
}
