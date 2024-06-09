<script lang="ts">
	import { page } from '$app/stores';
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
						<a
							href={navbarItem.link}
							target={navbarItem.name == 'Github' ? '_blank' : ''}
							class="h-16"
						>
							<li
								class={cn(
									'jus flex h-16 items-center justify-center border-b-2 border-foreground',
									navbarItem.hover,
									isSelected(navbarItem.link) && navbarItem.color
								)}
							>
								{#if navbarItem.name === 'Theme Toggle'}
									<ThemeToggle />
								{:else}
									<svelte:component this={navbarItem.icon} class="h-5 w-5" />
								{/if}
							</li>
						</a>
					{/each}
				</ul>
			{/each}
		{/key}
	</div>
</nav>
