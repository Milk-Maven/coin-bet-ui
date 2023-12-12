<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { appBorder, Page } from '$lib/util';
	import { page } from '$app/stores';

	const dispatch = createEventDispatcher();
	let lastRoute = '';

	const unsubscribePage = page.subscribe(({ route }) => {
		lastRoute = route.id ?? '';
	});

	onMount(() => {
		// Cleanup on component unmount
		return unsubscribePage;
	});
</script>

<footer class="{appBorder} border-b-0 z-10 bg-prime1 w-3/5 rounded-t-md mb-[-1px]">
	<nav class="flex justify-around p-3 px-10 gap-20">
		{#each [Page.Welcome, Page.Markets.Offering, Page.Roadmap.Timeline] as path}
			<a href={path === Page.Welcome ? '/' : String(path)} class="text-xl text-secondary2">
				{@html path}
			</a>
		{/each}
	</nav>
</footer>
