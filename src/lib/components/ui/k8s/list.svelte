<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { addDots } from '$lib/utils';
	import _ from 'lodash';
	import { ChevronRight } from 'lucide-svelte';

	export let items: any[];
	export let buttonConfig: {
		disabled: boolean;
		displayName: string;
		selectedItemName?: string;
		onClickArgs?: any[];
		fnOnClick?: any;
	} = {
		disabled: true,
		displayName: '',
		fnOnClick: () => {}
	};
</script>

<div class="context h-full overflow-y-auto pb-16">
	{#each items as item}
		{@const title = _.get(item, buttonConfig.displayName)}
		<Button
			class="w-full"
			on:click={() => buttonConfig.fnOnClick(...([title, buttonConfig.onClickArgs] || []))}
			disabled={buttonConfig.disabled}
			variant={buttonConfig.selectedItemName === title ? 'default' : 'ghost'}
		>
			<div class="flex w-full items-center justify-between truncate">
				<span use:addDots={30}>{title}</span>
				{#if buttonConfig.selectedItemName == title}
					<ChevronRight class="h-4 w-4" />
				{/if}
			</div>
		</Button>
	{/each}
</div>
