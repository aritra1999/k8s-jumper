<script>
	import Navbar from '$lib/components/ui/nav/navbar.svelte';
	import '../app.pcss';
</script>

<main>
	<Navbar />
	<div class="w-screen pl-16">
		<slot />
	</div>
</main>
