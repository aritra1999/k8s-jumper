<script lang="ts">
	import { FileClock } from 'lucide-svelte';
	import { resourcesStore } from '$lib/store';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { scrollToBottom } from '$lib/utils';
	import LogLine from '$lib/components/ui/k8s/log-line.svelte';

	export let pod: {
		name: string;
		container: string;
	};

	let reader: ReadableStreamDefaultReader | null = null;
	let logs: string[] = [];
	let logElement: HTMLElement;
	let loading = true;

	const subscribe = async () => {
		const response = await fetch(
			`/api/logs/${pod.container}/${$resourcesStore.namespace}/${pod.name}`
		);

		loading = false;
		scrollToBottom(logElement);

		if (response.body === null) {
			throw new Error('Unable to stream logs, please try again later!');
		}

		reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			logs.push(value);
			logs = logs;
			if (logElement) scrollToBottom(logElement);
		}
	};

	const unsubscribe = async () => {
		if (reader) {
			reader.cancel();
		}
	};
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} on:click={subscribe} size="icon" variant="ghost">
			<FileClock class="h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>
				{$resourcesStore.context} / {$resourcesStore.namespace} / {pod.name} / {pod.container}
			</Sheet.Title>
		</Sheet.Header>
		<div class="h-[calc(100vh-7rem)] w-full overflow-auto py-8" bind:this={logElement}>
			{#if loading}
				<Loader message="Loading logs" />
			{:else}
				<div class="h-[calc(100vh-8rem)] rounded-md bg-background">
					{#each logs as logChunk}
						<LogLine {logChunk} />
					{/each}
				</div>
			{/if}
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button fancy={true} on:click={unsubscribe}>Stop streaming</Button>
				<Button builders={[builder]} on:click={unsubscribe} fancy={true}>Close</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
