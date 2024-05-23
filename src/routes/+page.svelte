<script lang="ts">
	import { Armchair } from 'lucide-svelte';
	import { loadingStore, namespacesStore, resourcesStore } from '$lib/store.js';
	import Contexts from '$lib/components/ui/context/contexts.svelte';
	import Namespaces from '$lib/components/ui/namespace/namespaces.svelte';
	import Resources from '$lib/components/ui/resource/resources.svelte';

	export let data;
	const DEFAULT_RESOURCE_TYPE = 'pods';
	let namespaces: any[];
	let resources: any[];

	const loadNamespaces = async (contextName: string) => {
		namespacesStore.set({
			context: '',
			items: []
		});

		$loadingStore.namespaces = true;
		const namespacesResponse = await fetch(`/api/namespace/${contextName}`);
		namespaces = await namespacesResponse.json();
		resources = [];
		$loadingStore.namespaces = false;

		namespacesStore.set({
			context: contextName,
			items: namespaces as never[]
		});
	};

	const loadResources = async (contextName: string, namespaceName: string) => {
		resourcesStore.set({
			context: '',
			namespace: '',
			items: []
		});

		$loadingStore.resources = true;
		const resourcesResponse = await fetch(
			`/api/resource/${contextName}/${namespaceName}/${DEFAULT_RESOURCE_TYPE}`
		);
		resources = await resourcesResponse.json();
		$loadingStore.resources = false;

		resourcesStore.set({
			context: contextName,
			namespace: namespaceName,
			items: resources as never[]
		});
	};
</script>

<div class="fixed flex h-16 w-screen border-b px-4">
	<div class=" flex items-center justify-between">
		<Armchair class="h-5 w-5" />
	</div>
</div>

<section class="flex h-screen w-screen overflow-x-hidden overflow-y-hidden pt-16">
	{#await data.contexts}
		Loading contexts ...
	{:then contexts}
		<Contexts {contexts} {loadNamespaces} />
		<Namespaces {namespaces} {loadResources} />
		<Resources type={DEFAULT_RESOURCE_TYPE} {resources} />
	{/await}
</section>
