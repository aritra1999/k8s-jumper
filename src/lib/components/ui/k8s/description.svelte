<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { resourcesStore } from '$lib/store';

	import { FileText } from 'lucide-svelte';
	import Editor from '$lib/components/ui/moaco/editor.svelte';

	export let description: any;
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} size="icon" variant="ghost">
			<FileText class="h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>{description.name}</Sheet.Title>
		</Sheet.Header>
		<div class="h-[calc(100vh-7rem)] py-4">
			<Editor code={JSON.stringify(description, null, 2)} language="json" />
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} fancy={true}>Close</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
