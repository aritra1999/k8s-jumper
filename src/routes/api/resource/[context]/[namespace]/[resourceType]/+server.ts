import { k8sApi } from '$lib/k8s';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const namespace = params.namespace;
	const resourceType = params.resourceType;
	const context = params.context;

	if (resourceType === 'pods') {
		const response = await k8sApi.listNamespacedPod(namespace, context);
		const namespaces = response.body.items;
		return json(namespaces);
	}

	return json({});
}
