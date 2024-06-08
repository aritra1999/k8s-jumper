<script lang="ts">
	import List from '$lib/components/ui/k8s/list.svelte';
	import Search from '$lib/components/ui/k8s/search.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore, namespacesStore, resourcesStore } from '$lib/store';

	export let namespaces: any;
	export let loadResources: any;

	let filteredItems = namespaces;
</script>

<div class="h-full w-[27%] border-r-2 border-foreground">
	<Search items={namespaces} bind:filteredItems selector="metadata.name" title="namespaces" />
	{#if $loadingStore.namespaces}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading namespaces" />
		</div>
	{:else if filteredItems}
		<List
			bind:items={filteredItems}
			buttonConfig={{
				displayName: 'metadata.name',
				disabled: $loadingStore.namespaces || $loadingStore.resources,
				selectedItemName: $resourcesStore.namespace,
				fnOnClick: loadResources,
				onClickArgs: [$namespacesStore.context]
			}}
		/>
	{/if}
</div>
