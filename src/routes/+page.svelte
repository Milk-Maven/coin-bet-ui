<script lang="ts">
	import { betCreateEndpoint, betGetEndpoint, post, spookyPosts } from '$lib';
	// import type { PostEntryResponse } from 'deso-protocol';
	// type betGet = Pick<
	// 	PostEntryResponse,
	// 	'PostHashHex' | 'PostExtraData' | 'PosterPublicKeyBase58Check'
	// >;
</script>

<button
	on:click={() => {
		post(betCreateEndpoint, spookyPosts[0]);
	}}>post test</button
>

<button
	on:click={() => {
		post(betGetEndpoint, {});
	}}>get bet</button
>
<button
	on:click={() => {
		// get user
	}}>get user</button
>
