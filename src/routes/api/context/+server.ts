import { cmd } from '$lib/commands';
import { json } from '@sveltejs/kit';

async function loadContexts() {
	const config = (await cmd('kubectl config view -o json')) as string;
	return JSON.parse(config).contexts;
}

export async function GET() {
	const contexts = await loadContexts();
	return json(contexts);
}
