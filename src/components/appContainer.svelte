<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { appBorder } from '$lib/util';
	import SubFooter from '../components/subFooter.svelte';
</script>

<div class=" mx-auto h-[100vh] bg-prime1 relative min-w-[1200px] max-w-[1200px]">
	<Header />

	<div class="px-20">
		<div class="w-full text-white {appBorder} justify-start flex flex-col">
			<div class="flex justify-around w-full">
				<SubFooter />
			</div>
			<div
				class="flex-col justify-start flex gap-20 pt-20 max-h-[87vh] min-h-[87vh] overscroll-auto overflow-hidden"
			>
				<slot />
			</div>
			<div class="flex justify-center w-full"><Footer /></div>
		</div>
	</div>
</div>
