import { k8sApi } from '$lib/k8s';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const context = params.context;
	const namespace = params.namespace;
	const pod = params.pod;

	const response = await k8sApi.readNamespacedPod(pod, namespace, context);
	const description = response.body;
	return json(description);
}
