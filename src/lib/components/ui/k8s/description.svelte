<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { resourcesStore } from '$lib/store';

	import { FileText } from 'lucide-svelte';
	import Editor from '$lib/components/ui/moaco/editor.svelte';

	export let name: string;

	let loading = true;
	let description = '';

	const fetchDescription = async (podName: string) => {
		const response = await fetch(
			`/api/describe/${$resourcesStore.context}/${$resourcesStore.namespace}/${podName}`
		);
		description = await response.json();
		loading = false;
	};
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			size="icon"
			variant="ghost"
			on:click={() => {
				fetchDescription(name);
			}}
		>
			<FileText class="h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>{name}</Sheet.Title>
		</Sheet.Header>
		<div class="h-[calc(100vh-7rem)] py-4">
			{#if loading}
				<div class="flex h-full w-full items-center justify-center">
					<Loader message="Fetching pod description" />
				</div>
			{:else}
				<Editor code={JSON.stringify(description, null, 2)} language="json" />
			{/if}
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} fancy={true}>Close</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
