import { contexts } from '$lib/k8s';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(contexts);
}
