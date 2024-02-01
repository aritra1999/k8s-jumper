import { cmd } from '$lib/commands';
import { json } from '@sveltejs/kit'

export async function GET({ params }) {
    const context = params.context;
    
    const config = await cmd(`kubectl get namespace --context=${context} -o json`);
    const namespaces = JSON.parse(config).items;
    
    return json(namespaces)
}