<script>
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import { appBorder, Page } from '$lib/util';

	const dispatch = createEventDispatcher();
</script>

<footer class="{appBorder} border-b-0 z-10 bg-prime1 w-3/5 rounded-t-md">
	<nav class="flex justify-around p-3 px-10 gap-20">
		<a class="text-xl text-secondary2" href={Page.Markets}>Markets</a>
		<a class="text-xl text-secondary2" href={Page.Create}>Create</a>
		<a class="text-xl text-secondary2" href={Page.About}>About</a>
		<a class="text-xl text-secondary2" href={Page.Contact}>Roadmap</a>
	</nav>
</footer>
