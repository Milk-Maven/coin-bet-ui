<script lang="ts">
	import BetRequestForm from '../components/betRequestForm.svelte';
	import AppContainer from '../components/appContainer.svelte';
	import { spookyPosts } from '$lib/data';
	import { post } from '$lib/api';
	import { endpoints } from '$lib/shared/utils';
	import { appBorder } from '$lib/util';
	import SubFooter from '../components/subFooter.svelte';
</script>

<AppContainer>
	<div class="absolute top-0 flex justify-center w-full">
		<SubFooter links={[{ text: 'Welcome', href: '/welcome' }]} />
	</div>
	<div class="justify-center flex flex-col">
		<div class="pb-20">
			<img src="calf.jpeg" alt="calf" class="mx-auto outline-none cursor-default" />
		</div>
		<div class="flex justify-center flex-col flex-1">
			<h1 class="text-lg mx-auto text-center pt-5">
				Welcome to the Golden Calf. Fortunes or turns?
			</h1>
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
		cursor: default;
	}
	:global(a) {
		cursor: pointer;
		outline: none; /* Remove focus outline */
	}
</style>
