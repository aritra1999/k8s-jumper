<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { loadingStore, namespacesStore } from '$lib/store';
	import { ChevronRight, Search, X } from 'lucide-svelte';

	export let contexts: any[];
	export let loadNamespaces: any;
	let showContextSearch = false;
</script>

<div class="w-1/3 overflow-y-auto border-r p-2">
	<div class="mb-2 flex items-center justify-between border-b-2 pb-2">
		<div class="mr-2 w-full">
			{#if showContextSearch}
				<Input type="text" class="w-full" />
			{:else}
				<h2 class="text-xl font-bold">Contexts</h2>
			{/if}
		</div>
		<div>
			<Button
				variant="secondary"
				size="icon"
				on:click={() => {
					showContextSearch = !showContextSearch;
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
	{#if contexts}
		<div class="context space-y-2 pb-16">
			{#each contexts as context}
				<Button
					class="flex w-full items-center justify-between truncate"
					on:click={() => loadNamespaces(context.name)}
					disabled={$loadingStore.namespaces || $loadingStore.resources}
					variant={context.name === $namespacesStore.context ? 'secondary' : 'ghost'}
				>
					<span>{context.name}</span>
					{#if context.name === $namespacesStore.context}
						<ChevronRight class="h-4 w-4" />
					{/if}
				</Button>
			{/each}
		</div>
	{/if}
</div>
