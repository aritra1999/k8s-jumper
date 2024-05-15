import { writable } from 'svelte/store';

export const loadingStore = writable({
	contexts: false,
	namespaces: false,
	resources: false
});

export const contextsStore = writable({
	items: []
});

export const namespacesStore = writable({
	items: [],
	context: ''
});

export const resourcesStore = writable({
	items: [],
	context: '',
	namespace: ''
});
