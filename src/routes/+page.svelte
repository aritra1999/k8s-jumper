<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Armchair, ChevronRightIcon } from 'lucide-svelte';

	export let data;

	let loadingNamespace = false;
	let loadingResource = false;

	let namespaces: any[] = [];
	let resources: any[] = [];

	let selectedContext = '';
	let selectedNamespace = '';
	let selectedResource = '';

	const loadNameSpaces = async (context: string) => {
		selectedContext = context;

		loadingNamespace = true;
		namespaces = await fetch(`http://localhost:5173/api/namespace/${context}`)
			.then((res) => res.json())
			.catch((err) => {
				console.log(err);
			});

		loadingNamespace = false;
	};

	const loadResources = async (context: string, namespace: string, resourceType: string) => {
		selectedContext = context;
		selectedNamespace = namespace;

		loadingResource = true;
		resources = await fetch(
			`http://localhost:5173/api/resource/${context}/${namespace}/${resourceType}`
		)
			.then((res) => res.json())
			.catch((err) => {
				console.log(err);
			});

		loadingResource = false;
	};
</script>

<div class="fixed flex h-16 w-screen border-b">
	<div class="container mx-auto flex items-center justify-between">
		<div class=" flex items-center justify-between">
			<div class="mr-4">
				<Armchair class="h-5 w-5" />
			</div>
			<div class="flex items-center">
				<span>
					{#if selectedContext !== ''}{selectedContext}{/if}
				</span>
				<span class="flex items-center">
					{#if selectedNamespace !== ''}
						<ChevronRightIcon class="mx-2 h-4 w-4" />
						{selectedNamespace}
					{/if}
				</span>
			</div>
		</div>
		<div></div>
	</div>
</div>
<div class="flex h-screen w-screen overflow-x-hidden overflow-y-hidden pt-16">
	<div class="h-screen w-1/3 overflow-y-auto border-r p-4">
		<h2 class="mb-2 border-b-2 pb-2 text-xl font-bold">Contexts</h2>
		{#if data && data.contexts}
			<div class="context pb-16">
				{#each data.contexts as context}
					<Button
						disabled={loadingNamespace || loadingResource}
						class="w-full justify-start"
						variant={selectedContext === context.name ? 'secondary' : 'ghost'}
						on:click={() => loadNameSpaces(context.name)}>{context.name}</Button
					>
				{/each}
			</div>
		{/if}
	</div>
	<div class="h-screen w-1/3 overflow-y-auto border-r p-4">
		<h2 class="mb-2 border-b-2 pb-2 text-xl font-bold">Namespaces</h2>
		{#if !loadingNamespace}
			{#if namespaces}
				<div class="namespace pb-16">
					{#each namespaces as namespace}
						<Button
							disabled={loadingNamespace || loadingResource}
							class="w-full justify-start"
							variant={selectedNamespace === namespace.metadata.name ? 'secondary' : 'ghost'}
							on:click={() => loadResources(selectedContext, namespace.metadata.name, 'pods')}
							>{namespace.metadata.name}</Button
						>
					{/each}
				</div>
			{/if}
		{:else}
			Loading namespaces...
		{/if}
	</div>
	<div class="h-screen w-1/3 overflow-y-auto border-r p-4">
		<h2 class="mb-2 border-b-2 pb-2 text-xl font-bold">Resources</h2>
		{#if !loadingResource}
			{#if resources}
				{#each resources as resource}
					<div class="namespace">
						<Button variant="ghost" class="w-full justify-start">{resource.metadata.name}</Button>
					</div>
				{/each}
			{/if}
		{:else}
			Loading resources...
		{/if}
	</div>
</div>
