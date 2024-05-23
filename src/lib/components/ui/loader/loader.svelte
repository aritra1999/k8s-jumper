<script lang="ts">
	import { Loader2 } from 'lucide-svelte';

	export let message: string = '';
</script>

<div class="flex items-center">
	{message}
	<Loader2 class="ml-2  h-4 w-4 animate-spin" />
</div>
