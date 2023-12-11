<script>
	import AppContainer from '../../components/appContainer.svelte';
	import SubFooter from '../../components/subFooter.svelte';
</script>

<AppContainer>
	<div class="absolute top-0 flex justify-center w-full">
		<SubFooter
			links={[
				{ text: 'offerings', href: 'markets' },
				{ text: 'create', href: 'markets/create' },
				{ text: 'dashboard', href: 'markets' }
			]}
		/>
	</div>
</AppContainer>
