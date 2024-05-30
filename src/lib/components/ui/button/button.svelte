<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let fancy: $$Props['fancy'] = false;
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

{#if fancy}
	<ButtonPrimitive.Root
		{builders}
		class={cn(buttonVariants({ variant, size, className }))}
		type="button"
		{...$$restProps}
		on:click
		on:keydown
	>
		<span
			class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-foreground transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"
		>
		</span>
		<span
			class="absolute inset-0 h-full w-full border-2 border-foreground bg-background group-hover:bg-foreground"
		>
		</span>
		<span
			class="relative flex w-full items-center justify-center text-foreground group-hover:text-background"
		>
			<slot />
		</span>
	</ButtonPrimitive.Root>
{:else}
	<ButtonPrimitive.Root
		{builders}
		class={cn(buttonVariants({ variant, size, className }))}
		type="button"
		{...$$restProps}
		on:click
		on:keydown
	>
		<span class="relative flex w-full items-center justify-center text-foreground">
			<slot />
		</span>
	</ButtonPrimitive.Root>
{/if}
