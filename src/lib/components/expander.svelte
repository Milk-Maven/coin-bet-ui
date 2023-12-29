<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let isOpen = false;
	export let text: {
		opened: string;
		closed: string;
	} = { opened: '', closed: '' };
	const dispatch = createEventDispatcher();
	function toggle() {
		isOpen = !isOpen;
		dispatch('customEvent', { isOpen });
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={toggle} class="hover:cursor-pointer flex justify-center">
	{#if isOpen}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>

		<div>{isOpen ? text.closed : text.opened}</div>
	{/if}
</div>
