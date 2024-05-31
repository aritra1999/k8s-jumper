<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Description from '$lib/components/ui/k8s/description.svelte';
	import Search from '$lib/components/ui/k8s/search.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { loadingStore } from '$lib/store';
	import { addDots, cn } from '$lib/utils';

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
		<div class="context h-full overflow-y-auto pb-16">
			{#each filteredItems as item}
				<div
					class={cn(
						buttonVariants({ variant: 'ghost' }),
						'flex w-full items-center justify-between'
					)}
				>
					<div use:addDots={30}>{item.metadata.name}</div>
					<div>
						<Description name={item.metadata.name} />
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
