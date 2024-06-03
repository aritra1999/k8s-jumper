<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { navItems } from '$lib/constants';
</script>

<section class="flex h-full w-full items-center justify-center">
	<div class=" px-10">
		<h2 class="mb-5">welcome to ... (please suggest a name)</h2>
		<div class="w-full columns-xs">
			{#each Object.entries(navItems) as [url, item]}
				<Button class="mb-4 h-36 w-full px-10" href={url} fancy={true}>
					<div class="w-full">
						<h3>{item.title}</h3>
						<p class="break-words">{item.description}</p>
					</div>
				</Button>
			{/each}
		</div>
	</div>
</section>
