<script lang="ts">
	import { page } from '$app/stores';
	interface Link {
		text: string;
		href: string;
	}

	export let links: Link[] = [];

	import { createEventDispatcher, onMount } from 'svelte';
	import { appBorder } from '$lib/util';
	const dispatch = createEventDispatcher();
	// TODO add fancy back nav and forward
	let lastRoute: string;

	onMount(() => {
		const unsubscribe = page.subscribe((value) => {
			// Store the current route as the last route
			lastRoute = value.route.id ?? '';
		});

		return unsubscribe;
	});
</script>

<footer class="{appBorder} border-t-black border-t-4 z-10 bg-prime1 w-3/5 mb-10 rounded-b-md">
	<nav class="flex justify-around p-2 px-10 gap-20 min-h-[40px]">
		<!-- <a class="text-xl text-secondary2" href={lastRoute}</a> -->
		{#each links as { text, href }}
			<a class="text-lg text-secondary2" {href}>{text}</a>
		{/each}
	</nav>
	<!-- <a class="text-xl text-secondary2" {href}>></a> -->
</footer>
