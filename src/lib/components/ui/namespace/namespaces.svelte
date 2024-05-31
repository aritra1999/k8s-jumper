<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import List from '$lib/components/ui/k8s/list.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore, namespacesStore, resourcesStore } from '$lib/store';
	import { filterItemListBySearchString } from '$lib/utils';
	import { Search, X } from 'lucide-svelte';

	export let namespaces: any;
	export let loadResources: any;
	let searchFor = '';
	let toggleSearch = false;

	$: filteredItems = filterItemListBySearchString(namespaces, searchFor, 'metadata.name');
</script>

<div class="h-full w-1/3 border-r-2 border-foreground">
	{#if $loadingStore.namespaces}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading namespaces" />
		</div>
	{:else if filteredItems}
		<div class="flex items-center justify-between border-b-2 border-foreground p-2.5">
			<div class="mr-2 w-full">
				{#if toggleSearch}
					<Input type="text" class="w-full" bind:value={searchFor} />
				{:else}
					<h4 class="pl-2">namespaces</h4>
				{/if}
			</div>
			<div>
				<Button
					variant="secondary"
					size="icon"
					on:click={() => {
						toggleSearch = !toggleSearch;
					}}
				>
					{#if toggleSearch}
						<X class="h-4 w-4" />
					{:else}
						<Search class="h-4 w-4" />
					{/if}
				</Button>
			</div>
		</div>
		<List
			items={filteredItems}
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
