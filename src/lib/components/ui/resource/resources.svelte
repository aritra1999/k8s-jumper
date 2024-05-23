<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore } from '$lib/store';
	import { addDots } from '$lib/utils';
	import { Search, X } from 'lucide-svelte';

	export let resources: any;
	export let type: string;
	let showResourcesSearch = false;
</script>

<div class="w-1/3 overflow-y-auto p-2">
	{#if $loadingStore.resources}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading resources" />
		</div>
	{:else if resources}
		<div class="mb-2 flex items-center justify-between border-b pb-2">
			<div class="mr-2 w-full">
				{#if showResourcesSearch}
					<Input type="text" class="w-full" />
				{:else}
					<h2 class="text-xl font-bold capitalize">{type}</h2>
				{/if}
			</div>
			<div>
				<Button
					variant="secondary"
					size="icon"
					on:click={() => {
						showResourcesSearch = !showResourcesSearch;
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
		<div class="context space-y-2 pb-16">
			{#each resources as resource}
				<Button variant="ghost" class="flex w-full items-center justify-between truncate">
					<span use:addDots={30}>
						{resource.metadata.name}
					</span>
				</Button>
			{/each}
		</div>
	{/if}
</div>
