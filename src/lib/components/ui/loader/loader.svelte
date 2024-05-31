<script lang="ts">
	import { Loader2 } from 'lucide-svelte';

	export let message: string = '';
</script>

<div class="clash flex items-center font-semibold">
	{message}
	<Loader2 class="ml-2  h-4 w-4 animate-spin" />
</div>
