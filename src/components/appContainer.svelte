<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="h-screen px-6 py-0">
	<div class="mx-auto bg-prime1 h-full relative min-w-[1200px] max-w-[1200px]">
		<div class=" h-full pt-0">
			<Header />
			<div class="px-20">
				<slot />
			</div>
			<div class="flex justify-center w-full"><Footer /></div>
		</div>
	</div>
</div>
