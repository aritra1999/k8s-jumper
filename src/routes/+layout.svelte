<script>
	import Navbar from '$lib/components/ui/nav/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import '../fonts.pcss';
</script>

<ModeWatcher />
<main class="bg-backgound">
	<Navbar />
	<div class="w-screen pl-16">
		<slot />
	</div>
</main>
