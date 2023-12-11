<script>
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import { appBorder } from '$lib/util';

	const dispatch = createEventDispatcher();
</script>

<footer class="">
	<div class="mb-5 {appBorder} border-t-0 z-10 bg-prime1">
		<nav class="flex justify-center p-3 px-10 gap-20">
			<a class="text-xl text-secondary2" href="/markets">Markets</a>
			<a class="text-xl text-secondary2" href="/create">Create</a>
			<a class="text-xl text-secondary2" href="/about">About</a>
			<a class="text-xl text-secondary2" href="/contact">Roadmap</a>
		</nav>
	</div>
</footer>
