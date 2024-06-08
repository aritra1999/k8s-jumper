<script lang="ts">
	import { X, Search } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { filterItemListBySearchString } from '$lib/utils';
	import { Input } from '$lib/components/ui/input';

	export let items;
	export let filteredItems = [];
	export let selector: string;
	export let title: string;

	let searchFor = '';
	let showSearch = false;

	$: filteredItems = filterItemListBySearchString(items, searchFor, selector);
</script>

<div class="flex items-center justify-between border-b-2 border-foreground p-2.5">
	<div class="mr-2 w-full">
		{#if showSearch}
			<Input type="text" bind:value={searchFor} />
		{:else}
			<h4 class="pl-2">{title}</h4>
		{/if}
	</div>
	<div>
		<Button
			variant="secondary"
			size="icon"
			on:click={() => {
				showSearch = !showSearch;
				filteredItems = items;
			}}
		>
			{#if showSearch}
				<X class="h-4 w-4" />
			{:else}
				<Search class="h-4 w-4" />
			{/if}
		</Button>
	</div>
</div>
