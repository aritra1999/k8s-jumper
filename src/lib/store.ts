import { writable } from 'svelte/store';

export const contexts = writable({
	items: [],
	loading: false,
	selected: null
});

export const namespaces = writable({
	items: [],
	loading: false,
	selected: null
});

export const resources = writable({
	items: [],
	loading: false,
	type: 'pods',
	selected: null
});
