<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	export let items;
</script>

<Table.Root>
	<Table.Header class="h-16 border-b-2 border-foreground">
		<Table.Row>
			<Table.Head class="w-[10px]">index</Table.Head>
			<Table.Head>Name</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Method</Table.Head>
			<Table.Head class="text-right">Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each items as invoice, i (i)}
			<Table.Row>
				<Table.Cell>{i}</Table.Cell>
				<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
				<Table.Cell>{invoice.paymentStatus}</Table.Cell>
				<Table.Cell>{invoice.paymentMethod}</Table.Cell>
				<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
