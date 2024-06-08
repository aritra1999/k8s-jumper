<script lang="ts">
	import Description from '$lib/components/ui/k8s/description.svelte';
	import Logs from '$lib/components/ui/k8s/logs.svelte';
	import Search from '$lib/components/ui/k8s/search.svelte';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import * as Table from '$lib/components/ui/table';
	import { loadingStore } from '$lib/store';
	import { addDots } from '$lib/utils';

	export let resources: any;
	export let type: string;

	$: console.log(resources);

	let filteredItems = resources;
</script>

<div class="h-full w-[56%]">
	<Search items={resources} bind:filteredItems selector="metadata.name" title={type} />
	{#if $loadingStore.resources}
		<div class="flex h-full items-center justify-center">
			<Loader message="Loading resources" />
		</div>
	{:else if filteredItems}
		<div class="clash context h-full overflow-y-auto pb-16">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[300px]">pod name</Table.Head>
						<Table.Head>ready</Table.Head>
						<Table.Head>status</Table.Head>
						<Table.Head>restarts</Table.Head>
						<Table.Head></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each filteredItems as item}
						<Table.Row>
							<Table.Cell class="font-medium">
								<div use:addDots={30}>{item.metadata.name}</div>
							</Table.Cell>
							<Table.Cell>1/3</Table.Cell>
							<Table.Cell>{item.status.phase}</Table.Cell>
							<Table.Cell>{item.status.containerStatuses[0].restartCount}</Table.Cell>
							<Table.Cell class="flex items-center space-x-2">
								<Description description={item.metadata} />
								<Logs
									pod={{
										name: item.metadata.name,
										container: item.status.containerStatuses[0].name
									}}
								/>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	{/if}
</div>
