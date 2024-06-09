<script lang="ts">
	import { sleep } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Loader from '$lib/components/ui/loader/loader.svelte';
	import { Loader2, Play, Settings } from 'lucide-svelte';
	import NamespaceDropdown from '$lib/components/ui/k8s/namespace-dropdown.svelte';
	import DbOutput from '$lib/components/ui/k8s/db-output.svelte';
	import Editor from '$lib/components/ui/moaco/editor.svelte';

	export let data;
	let executing = false;
	let allSelected = false;
	let query = '';
	let contextDropdownItems = data.contexts.map((context) => {
		return { name: context.name, selected: false };
	});
	const output = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];

	const selectAllToggle = () => {
		contextDropdownItems = contextDropdownItems.map((contextDropdownItem) => {
			contextDropdownItem.selected = !allSelected;
			return contextDropdownItem;
		});

		allSelected = !allSelected;
	};

	const execute = async () => {
		executing = true;
		await sleep(2000);
		console.log('executing');
		executing = false;
	};
</script>

{#await data.contexts}
	<div class="flex h-full w-full items-center justify-center">
		<Loader message="Loading contexts" />
	</div>
{:then contexts}
	<section class="h-full w-full overflow-x-hidden overflow-y-hidden">
		<section class="flex h-16 w-full border-b-2 border-foreground">
			<div class="h-16 w-5/12 border-r-2 border-foreground">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="ghost" class="h-16 w-full outline-none" builders={[builder]}>
							contexts
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-fit">
						{#each contextDropdownItems as context}
							<DropdownMenu.CheckboxItem bind:checked={context.selected}>
								{context.name}
							</DropdownMenu.CheckboxItem>
						{/each}
						<DropdownMenu.Separator />
						<DropdownMenu.CheckboxItem on:click={selectAllToggle}>
							{#if allSelected}un{/if}select all
						</DropdownMenu.CheckboxItem>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
			<div class="h-16 w-5/12">
				<NamespaceDropdown {contexts} />
			</div>
			<div class="h-16 w-2/12">
				<Button on:click={execute} disabled={executing} class="h-16 w-full" fancy={false}>
					execute
					{#if executing}
						<Loader2 class="ml-4 h-4 w-4 animate-spin" />
					{:else}
						<Play class="ml-4 h-4 w-4" />
					{/if}
				</Button>
			</div>
		</section>
		<section class="h-48 w-full bg-foreground">
			<Editor code={query} readOnly={false} language="sql" />
		</section>
		{#if !executing}
			<section class="border-b-2 border-foreground">
				<DbOutput items={output} />
			</section>
		{/if}
	</section>
{/await}
