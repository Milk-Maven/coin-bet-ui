<script lang="ts">
	import AppContainer from '../components/appContainer.svelte';
	import './page.css';
	import { GOLDEN_CALF_LOGO, Page } from '$lib/util';
	import { app } from '$lib/state';
	import * as deso from 'deso-protocol';
	deso.identity.subscribe((notification) => {
		app.set({ publicKey: notification.currentUser?.publicKey ?? '' });
	});
</script>

<AppContainer containerClass=" flex justify-center flex-col">
	<img src={GOLDEN_CALF_LOGO} alt="calf" class="mx-auto outline-none cursor-default max-w-[80%]" />
	<div class="min-h-[10%]">
		<div class="flex justify-center flex-col">
			<h1 class="text-lg mx-auto text-center text-primet2">
				Welcome to the Golden Calf. Fortunes or turns?
			</h1>
			<a
				href={Page.Markets.Offering}
				class="text-primet text-center mx-auto w-[100%] text-lg underline"
			>
				Step in uncover</a
			>
		</div>
	</div>
	<!-- <div class="flex justify-center flex-col flex-1 min-h-max"> -->
</AppContainer>
