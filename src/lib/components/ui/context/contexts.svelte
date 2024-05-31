<script lang="ts">
	import { X, Search } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { loadingStore, namespacesStore } from '$lib/store';
	import List from '$lib/components/ui/k8s/list.svelte';
	import { filterItemListBySearchString } from '$lib/utils';

	export let contexts: any[];
	export let loadNamespaces: any;
	let searchFor = '';
	let showContextSearch = false;

	$: filteredContexts = filterItemListBySearchString(contexts, searchFor, 'name');
</script>

<div class="w-1/3 border-r-2 border-foreground">
	<div class="flex items-center justify-between border-b-2 border-foreground p-2.5">
		<div class="mr-2 w-full">
			{#if showContextSearch}
				<Input type="text" class="w-full" bind:value={searchFor} />
			{:else}
				<h4 class="pl-2">contexts</h4>
			{/if}
		</div>
		<div>
			<Button
				variant="secondary"
				size="icon"
				on:click={() => {
					showContextSearch = !showContextSearch;
					filteredContexts = contexts;
				}}
			>
				{#if showContextSearch}
					<X class="h-4 w-4" />
				{:else}
					<Search class="h-4 w-4" />
				{/if}
			</Button>
		</div>
	</div>
	{#if filteredContexts}
		<List
			items={filteredContexts}
			buttonConfig={{
				displayName: 'name',
				disabled: $loadingStore.namespaces || $loadingStore.resources,
				selectedItemName: $namespacesStore.context,
				fnOnClick: loadNamespaces
			}}
		/>
	{/if}
</div>
