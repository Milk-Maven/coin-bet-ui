<script lang="ts">
	import BetRequestForm from '../components/betRequestForm.svelte';
	import { spookyPosts } from '$lib/data';
	import { post } from '$lib/api';
	import { endpoints } from '$lib/shared/utils';
	import type { BetGetRequest } from '$lib/shared/utils';
	import type { BetCreate } from '$lib/shared/validators';
</script>

<div class="bg-[#040404]">
	<BetRequestForm
		on:betCreated={function handleDateSelected(event) {
			const selectedDate = event.detail;
			console.log('Selected Date:', selectedDate);
			// Do something with the selected date
		}}
	/>
	<button
		on:click={() => {
			post(endpoints.betNew, spookyPosts[0]);
		}}>post test</button
	>

	<button
		on:click={() => {
			post(endpoints.betGet, {});
		}}>get bet</button
	>
	<button
		on:click={() => {
			// get user
		}}>get user</button
	>
</div>

<style>
	/* App Background */
	:global(body) {
		background-color: #000000; /* Deep Black */
	}
</style>
