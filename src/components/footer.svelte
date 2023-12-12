<script>
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import { appBorder, Page } from '$lib/util';

	const dispatch = createEventDispatcher();
</script>

<footer class="{appBorder} border-b-0 z-10 bg-prime1 w-3/5 rounded-t-md mb-[-1px]">
	<nav class="flex justify-around p-3 px-10 gap-20">
		<a class="text-xl text-secondary2" href={Page.Welcome}>Welcome</a>
		<a class="text-xl text-secondary2" href={Page.Markets.Offering}>Markets</a>
		<a class="text-xl text-secondary2" href={Page.Roadmap.Timeline}>Roadmap</a>
	</nav>
</footer>
