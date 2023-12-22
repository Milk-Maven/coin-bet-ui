<script lang="ts">
	import AppContainer from '../../components/appContainer.svelte';
	import Offerings from '../../components/offerings.svelte';
	import '../page.css';
	export let data;
	console.log(data);
</script>

<AppContainer>
	<Offerings offerings={data.offerings} />
</AppContainer>
