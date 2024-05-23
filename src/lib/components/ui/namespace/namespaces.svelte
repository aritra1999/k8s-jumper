<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore, namespacesStore, resourcesStore } from '$lib/store';
	import { ChevronRight, Search, X } from 'lucide-svelte';

	export let namespaces: any;
	export let loadResources: any;
	let showNamespaceSearch = false;
</script>

<div class="h-full w-1/3 overflow-y-auto border-r p-2">
	{#if $loadingStore.namespaces}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading namespaces" />
		</div>
	{:else if namespaces}
		<div class="mb-2 flex items-center justify-between border-b pb-2">
			<div class="mr-2 w-full">
				{#if showNamespaceSearch}
					<Input type="text" class="w-full" />
				{:else}
					<h2 class="text-xl font-bold">Namespaces</h2>
				{/if}
			</div>
			<div>
				<Button
					variant="secondary"
					size="icon"
					on:click={() => {
						showNamespaceSearch = !showNamespaceSearch;
					}}
				>
					{#if showNamespaceSearch}
						<X class="h-4 w-4" />
					{:else}
						<Search class="h-4 w-4" />
					{/if}
				</Button>
			</div>
		</div>
		<div class="context space-y-2 pb-16">
			{#each namespaces as namespace}
				<Button
					class="flex w-full items-center justify-between truncate"
					variant={namespace.metadata.name === $resourcesStore.namespace ? 'secondary' : 'ghost'}
					on:click={() => loadResources($namespacesStore.context, namespace.metadata.name)}
					disabled={$loadingStore.namespaces || $loadingStore.resources}
				>
					<span>{namespace.metadata.name}</span>
					{#if namespace.metadata.name === $resourcesStore.namespace}
						<ChevronRight class="h-4 w-4" />
					{/if}
				</Button>
			{/each}
		</div>
	{/if}
</div>
