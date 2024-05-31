<script lang="ts">
	import List from '$lib/components/ui/k8s/list.svelte';
	import Search from '$lib/components/ui/k8s/search.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore } from '$lib/store';

	export let resources: any;
	export let type: string;

	let filteredItems = resources;
</script>

<div class="h-full w-1/3">
	<Search items={resources} bind:filteredItems selector="metadata.name" title={type} />
	{#if $loadingStore.resources}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading resources" />
		</div>
	{:else if filteredItems}
		<List
			items={filteredItems}
			buttonConfig={{
				disabled: false,
				displayName: 'metadata.name'
			}}
		/>
	{/if}
</div>
