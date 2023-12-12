<script lang="ts">
	import BetRequestForm from '../components/betRequestForm.svelte';
	import AppContainer from '../components/appContainer.svelte';
	import Footer from '../components/footer.svelte';
	import { spookyPosts } from '$lib/data';
	import { post } from '$lib/api';
	import { endpoints } from '$lib/shared/utils';
	import { appBorder } from '$lib/util';
	import SubFooter from '../components/subFooter.svelte';
	import './page.css';
</script>

<AppContainer>
	<div class="min-h-[80%] pt-20">
		<img src="calf.jpeg" alt="calf" class="mx-auto outline-none cursor-default" />
	</div>
	<div class="min-h-[10%]">
		<div class="flex justify-center flex-col">
			<h1 class="text-lg mx-auto text-center">Welcome to the Golden Calf. Fortunes or turns?</h1>
			<a href="/markets" class="text-prime2 underline text-center mx-auto w-[100%] text-2xl"
				>Step in, uncover.</a
			>
		</div>
	</div>
	<!-- <div class="flex justify-center flex-col flex-1 min-h-max"> -->
</AppContainer>

<!-- <button -->
<!-- 	on:click={() => { -->
<!-- 		post(endpoints.betNew, spookyPosts[0]); -->
<!-- 	}}>post test</button -->
<!-- > -->
<!-- <button -->
<!-- 	on:click={() => { -->
<!-- 		post(endpoints.betGet, {}); -->
<!-- 	}}>get bet</button -->
<!-- > -->
<!-- <button -->
<!-- 	on:click={() => { -->
<!-- 		// get user -->
<!-- 	}}>get user</button -->
<!-- > -->
