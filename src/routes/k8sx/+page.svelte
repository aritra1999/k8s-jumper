<script lang="ts">
	import { loadingStore, namespacesStore, resourcesStore } from '$lib/store.js';
	import Contexts from '$lib/components/ui/context/contexts.svelte';
	import Namespaces from '$lib/components/ui/namespace/namespaces.svelte';
	import Resources from '$lib/components/ui/resource/resources.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';

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

	const loadResources = async (namespaceName: string, contextName: string) => {
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

<section class="flex h-full w-full overflow-x-hidden overflow-y-hidden">
	{#await data.contexts}
		<div class="flex h-full w-full items-center justify-center">
			<Loader message="Loading contexts" />
		</div>
	{:then contexts}
		<Contexts {contexts} {loadNamespaces} />
		<Namespaces bind:namespaces {loadResources} />
		<Resources type={DEFAULT_RESOURCE_TYPE} bind:resources />
	{/await}
</section>
