<!-- SubFooter.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { Page, appBorder } from '$lib/util';

	export const linksStore = writable([{ text: 'The Golden Calf', href: '/' }]);

	interface Link {
		text: string;
		href: string;
	}

	let links: Link[] = [];
	let lastRoute: string;

	onMount(() => {
		const unsubscribePage = page.subscribe((value) => {
			lastRoute = value.route.id ?? '';

			// Update links based on the current route
			if (
				lastRoute === '' + Page.Markets.Offering ||
				lastRoute === '' + Page.Markets.Create ||
				lastRoute === '' + Page.Markets.Dashboard
			) {
				linksStore.set([
					{ text: 'offerings', href: Page.Markets.Offering },
					{ text: 'create', href: Page.Markets.Create },
					{ text: 'dashboard', href: Page.Markets.Dashboard }
				]);
			}
			if (lastRoute === Page.Roadmap.Timeline) {
				linksStore.set([{ text: 'timeline', href: Page.Roadmap.Timeline }]);
			}
			// if (lastRoute === Page.About) {
			// 	linksStore.set([{ text: 'About', href: Page.About }]);
			// }
			// if (lastRoute === Page.Contact) {
			// 	linksStore.set([{ text: 'Contact', href: Page.Contact }]);
			// }
			// Add more conditions as needed
		});

		const unsubscribeLinks = linksStore.subscribe((value) => {
			links = value;
		});

		// Cleanup on component unmount
		return () => {
			unsubscribePage();
			unsubscribeLinks();
		};
	});
</script>

<footer class="{appBorder} border-t-black border-t-4 z-10 bg-prime1 w-3/5 rounded-b-md mt-[-1px]">
	<nav class="flex justify-around p-2 px-10 gap-20 min-h-[40px]">
		{#each links as { text, href }}
			<a class="text-lg text-primet" {href}>{text}</a>
		{/each}
	</nav>
</footer>
