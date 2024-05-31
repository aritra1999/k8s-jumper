<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import List from '$lib/components/ui/k8s/list.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore } from '$lib/store';
	import { addDots, filterItemListBySearchString } from '$lib/utils';
	import { Search, X } from 'lucide-svelte';

	export let resources: any;
	export let type: string;
	let searchFor: string = '';
	let showResourcesSearch = false;

	$: filteredItems = filterItemListBySearchString(resources, searchFor, 'metadata.name');
</script>

<div class="h-full w-1/3">
	{#if $loadingStore.resources}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading resources" />
		</div>
	{:else if filteredItems}
		<div class="flex items-center justify-between border-b-2 border-foreground p-2.5">
			<div class="mr-2 w-full">
				{#if showResourcesSearch}
					<Input type="text" class="w-full" bind:value={searchFor} />
				{:else}
					<h4 class="pl-2">{type}</h4>
				{/if}
			</div>
			<div>
				<Button
					variant="secondary"
					size="icon"
					on:click={() => {
						showResourcesSearch = !showResourcesSearch;
						filteredItems = resources;
					}}
				>
					{#if showResourcesSearch}
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
				disabled: false,
				displayName: 'metadata.name'
			}}
		/>
	{/if}
</div>
