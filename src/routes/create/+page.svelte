<script>
	import AppContainer from '../../components/appContainer.svelte';
	import BetRequestForm from '../../components/betRequestForm.svelte';
</script>

<AppContainer>
	<BetRequestForm
		on:betCreated={function handleDateSelected(event) {
			const selectedDate = event.detail;
			// Do something with the selected date
		}}
	/>
</AppContainer>
