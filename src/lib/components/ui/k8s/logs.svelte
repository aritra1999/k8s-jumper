<script lang="ts">
	import { FileClock } from 'lucide-svelte';
	import { resourcesStore } from '$lib/store';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { onMount } from 'svelte';

	export let podName: string;
	let logs: string;
	let loading = true;

	const fetchLogs = async (podName: string) => {
		const response = await fetch(
			`/api/logs/${$resourcesStore.context}/${$resourcesStore.namespace}/${podName}`
		);
		logs = await response.json();
		loading = false;
	};

	onMount(async () => {
		await fetchLogs(podName);
	});
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} size="icon" variant="ghost">
			<FileClock class="h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>{podName}</Sheet.Title>
		</Sheet.Header>
		<div class="h-[calc(100vh-7rem)] py-4">
			<!-- <Editor code={JSON.stringify(description, null, 2)} language="json" /> -->
			{#if loading}
				<Loader message="Loading logs" />
			{:else}
				{logs}
			{/if}
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} fancy={true}>Close</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
