<script lang="ts">
	import AppContainer from '../components/appContainer.svelte';
	import './page.css';
</script>

<AppContainer>
	<div class="min-h-[80%]">
		<img src="calf.jpeg" alt="calf" class="mx-auto outline-none cursor-default" />
	</div>
	<div class="min-h-[10%]">
		<div class="flex justify-center flex-col">
			<h1 class="text-lg mx-auto text-center text-primet2">
				Welcome to the Golden Calf. Fortunes or turns?
			</h1>
			<a href="/markets" class="text-primet text-center mx-auto w-[100%] text-lg underline"
				>Step in uncover</a
			>
		</div>
	</div>
	<!-- <div class="flex justify-center flex-col flex-1 min-h-max"> -->
</AppContainer>
