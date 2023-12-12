<script lang="ts">
	import type { Link } from '$lib/store';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { appBorder } from '$lib/util';
	import SubFooter from '../components/SubFooter.svelte';
	import { onMount } from 'svelte';
</script>

<div class="h-[97vh] px-6">
	<div class="mx-auto bg-prime1 h-full relative min-w-[1200px] max-w-[1200px]">
		<div class=" h-full pt-0">
			<Header />

			<div class="px-20 h-full">
				<div class="w-full text-white {appBorder} h-[90%] justify-between flex flex-col">
					<div class="flex justify-around w-full">
						<SubFooter />
					</div>
					<slot />
					<div class="flex justify-center w-full"><Footer /></div>
				</div>
			</div>
		</div>
	</div>
</div>
