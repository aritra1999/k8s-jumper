import { k8sApi } from '$lib/k8s.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const context = params.context;
	const response = await k8sApi.listNamespace(context);
	const namespaces = response.body.items;
	return json(namespaces);
}
