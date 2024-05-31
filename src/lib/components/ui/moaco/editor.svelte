<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
	import { theme } from '$lib/components/ui/moaco/theme';

	export let code: string;
	export let language: string;

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	onMount(async () => {
		monaco = (await import('./monaco')).default;
		const editor = await monaco.editor.create(editorContainer);

		monaco.editor.defineTheme('vesper', theme as Monaco.editor.IStandaloneThemeData);
		monaco.editor.setTheme('vesper');

		const model = await monaco.editor.createModel(code, language);
		editor.setModel(model);
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});
</script>

<div class="h-full w-full" bind:this={editorContainer} />
