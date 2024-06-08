<script lang="ts">
	export let logChunk: string;
	const logs = logChunk.split('\n');

	const cleanLog = (log: string) => {
		try {
			return JSON.stringify(JSON.parse(log));
		} catch (e) {
			return log;
		}
	};
</script>

{#each logs as log}
	{#if log}
		<div class="jb-mono w-full border-b py-2 text-xs">
			<code class="inline-block w-full" lang="json">
				{cleanLog(log)}
			</code>
		</div>
	{/if}
{/each}
