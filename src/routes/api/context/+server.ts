import { k8sClient } from '$lib/k8s';
import { json } from '@sveltejs/kit';

export async function GET() {
	const contexts = await k8sClient.getContexts();
	return json(contexts);
}
