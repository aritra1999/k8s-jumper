<script lang="ts">
	import { page } from '$app/stores';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import ThemeToggle from '$lib/components/ui/nav/toggle.svelte';
	import { cn } from '$lib/utils';
	import { navbarItemSections } from '$lib/constants';

	const isSelected = (link: string) => {
		const activeRoute = $page.url.pathname.split('/');
		return activeRoute.pop() === link.slice(1);
	};
</script>

<nav class="fixed left-0 top-0 h-screen w-16">
	<div class="flex h-full flex-col justify-between border-r-2 border-foreground">
		{#key $page.url.pathname}
			{#each navbarItemSections as navbarItems}
				<ul class="border-foreground last:border-t-2">
					{#each navbarItems as navbarItem}
						<a href={navbarItem.link} target={navbarItem.name == 'Github' ? '_blank' : ''}>
							<li
								class={cn(
									'flex flex-col items-center border-b-2 border-foreground py-5',
									navbarItem.hover,
									isSelected(navbarItem.link) && navbarItem.color
								)}
							>
								{#if navbarItem.name === 'Theme Toggle'}
									<ThemeToggle />
								{:else}
									<Tooltip.Root>
										<Tooltip.Trigger asChild let:builder>
											<svelte:component this={navbarItem.icon} class="h-5 w-5" />
										</Tooltip.Trigger>
										<Tooltip.Content>
											<p>{navbarItem.name}</p>
										</Tooltip.Content>
									</Tooltip.Root>
								{/if}
							</li>
						</a>
					{/each}
				</ul>
			{/each}
		{/key}
	</div>
</nav>
