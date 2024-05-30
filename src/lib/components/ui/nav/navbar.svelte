<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ui/nav/toggle.svelte';
	import { cn } from '$lib/utils';
	import { Sun, FileClock, Github, Database, Home, Telescope, CircleHelp } from 'lucide-svelte';

	const navbarItemSections = [
		[
			{
				name: 'Home',
				icon: Home,
				link: '/',
				hover: 'hover:text-zinc-900 hover:bg-fuchsia-200',
				color: 'text-zinc-900 bg-fuchsia-200'
			},
			{
				name: 'K8s',
				icon: Telescope,
				link: '/k8s',
				hover: 'hover:text-zinc-900 hover:bg-blue-200',
				color: 'text-zinc-900 bg-blue-200'
			},
			{
				name: 'Database',
				icon: Database,
				link: '/db',
				hover: 'hover:text-zinc-900 hover:bg-green-200',
				color: 'text-zinc-900 bg-green-200'
			},
			{
				name: 'Logs',
				icon: FileClock,
				link: '/logs',
				hover: 'hover:text-zinc-900 hover:bg-yellow-200',
				color: 'text-zinc-900 bg-yellow-200'
			}
		],
		[
			{
				name: 'Help',
				icon: CircleHelp,
				link: '/help',
				hover: 'hover:text-zinc-900 hover:bg-purple-200',
				color: 'text-zinc-900 bg-purple-200'
			},
			{
				name: 'Github',
				icon: Github,
				link: 'https://github.com/aritra1999/k8su',
				hover: 'hover:text-zinc-900 hover:bg-indigo-200',
				color: 'text-zinc-900 bg-indigo-200'
			},
			{
				name: 'Theme Toggle',
				icon: Sun,
				link: ''
			}
		]
	];

	const isSelected = (link: string) => {
		const activeRoute = $page.url.pathname.split('/');
		return activeRoute.pop() === link.slice(1);
	};
</script>

<nav class="absolute left-0 top-0 h-screen w-16">
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
