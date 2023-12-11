<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { appBorder } from '$lib/util';
</script>

<div class="h-screen px-6 py-0">
	<div class="mx-auto bg-prime1 h-full relative min-w-[1200px] max-w-[1200px]">
		<div class=" h-full pt-0">
			<Header />

			<div class="px-20 h-full">
				<div class="w-full text-white {appBorder} py-20 min-h-[90%] relative">
					<slot />
					<div class="flex justify-center w-full absolute bottom-0"><Footer /></div>
				</div>
			</div>
		</div>
	</div>
</div>
