<script>
	import '../app.pcss';
	import '../fonts.pcss';
	import Navbar from '$lib/components/ui/nav/navbar.svelte';
	import { navItems } from '$lib/constants';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
</script>

<ModeWatcher defaultMode={'light'} />
<main class="bg-backgound">
	<Navbar />
	<div class="h-screen w-screen pl-16">
		<slot />
	</div>
</main>
