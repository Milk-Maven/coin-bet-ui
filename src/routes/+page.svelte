<script lang="ts">
	import BetRequestForm from '../components/betRequestForm.svelte';
	import AppContainer from '../components/appContainer.svelte';
	import { spookyPosts } from '$lib/data';
	import { post } from '$lib/api';
	import { endpoints } from '$lib/shared/utils';
	import { appBorder } from '$lib/util';
</script>

<AppContainer>
	<div class="w-full text-white {appBorder} min-h-[400px] py-10">
		<img src="calf.jpeg" alt="calf" class="mx-auto" />
		<h1 class="text-lg mx-auto text-center pt-5">Welcome to the Golden Calf. Fortunes or turns?</h1>
		<div class="flex justify-center">
			<a href="/markets" class="text-prime2 underline text-center mx-auto w-[100%] text-2xl"
				>Step in, uncover.</a
			>
		</div>
	</div>
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

<style>
	/* App Background */
	:global(body) {
		background-color: #e8d5a2; /* Deep Black */
		height: 100%;
	}
	:global(body.div) {
	}
</style>
