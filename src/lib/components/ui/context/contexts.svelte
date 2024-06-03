<script lang="ts">
	import List from '$lib/components/ui/k8s/list.svelte';
	import Search from '$lib/components/ui/k8s/search.svelte';
	import { loadingStore, namespacesStore } from '$lib/store';

	export let contexts: any[];
	export let loadNamespaces: any;

	let filteredItems = contexts;
</script>

<div class="w-[27%] border-r-2 border-foreground">
	{#if filteredItems}
		<Search items={contexts} bind:filteredItems selector="name" title="contexts" />
		<List
			items={filteredItems}
			buttonConfig={{
				displayName: 'name',
				disabled: $loadingStore.namespaces || $loadingStore.resources,
				selectedItemName: $namespacesStore.context,
				fnOnClick: loadNamespaces
			}}
		/>
	{/if}
</div>
