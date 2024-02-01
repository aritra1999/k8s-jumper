import { cmd } from '$lib/commands';
import { json } from '@sveltejs/kit'

export async function GET({ params }) {
    const namespace = params.namespace;
    const resourceType = params.resourceType;
    const context = params.context;
    
    const command = `kubectl get ${resourceType} --context=${context} --namespace=${namespace} -o json`

    const config = await cmd(command);
    const resources = JSON.parse(config).items;
    
    return json(resources)
}