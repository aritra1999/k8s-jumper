import { loadContexts } from "$lib/commands";

export const load = async () => {
    const contexts = await loadContexts();
    return { contexts }
}