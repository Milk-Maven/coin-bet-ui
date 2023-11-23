<script lang="ts">
	import { post, betNewEndpoint, spookyPosts } from '$lib';
</script>

<button
	on:click={() => {
		post(betNewEndpoint, spookyPosts[0]);
	}}>post test</button
>
