<script>
	import YourDatePickerComponent from '../components/calendar.svelte';
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import { appBorder } from '$lib/util';

	// let greeting = '';
	let eventDescription = '';
	let outcome1 = '';
	let outcome2 = '';
	let outcome3 = '';
	let outcome4 = '';
	// let explainer = '';
	let startDate = '';
	let endDate = '';

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		// Create an object with the entered values
		const betRequest = {
			// greeting,
			event_description: eventDescription,
			outcomes: [outcome1, outcome2, outcome3, outcome4],
			// explainer,
			startDate,
			endDate
		};

		// Emit the betRequestCreated event with the created object
		dispatch('betRequestCreated', betRequest);

		// Clear the form fields
		resetForm();
	}

	function resetForm() {
		// greeting = '';
		eventDescription = '';
		outcome1 = '';
		outcome2 = '';
		outcome3 = '';
		outcome4 = '';
		// explainer = '';
	}
</script>

<main class="w-3/5 mx-auto text-primet">
	<h1 class="text-xl mb-10 text-center">submit a bet</h1>

	<div class="mb-10">
		<YourDatePickerComponent
			label={'start date'}
			on:dateSelected={function handleDateSelected(event) {
				const selectedDate = event.detail.date;
				console.log('Selected Date:', selectedDate);
				startDate = selectedDate;
				// Do something with the selected date
			}}
		/>
		<YourDatePickerComponent
			label={'end date'}
			on:dateSelected={function handleDateSelected(event) {
				const selectedDate = event.detail.date;
				console.log('Selected Date:', selectedDate);
				endDate = selectedDate;
				// Do something with the selected date
			}}
		/>
	</div>
	<div>
		<div class="mb-10">
			<label for="eventDescription" class="block text-lg mb-2">event description:</label>
			<textarea
				id="eventDescription"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={eventDescription}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome1" class="block text-lg mb-2">outcome 1</label>
			<textarea
				id="outcome1"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome1}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome2" class="block text-lg mb-2">outcome 2</label>
			<textarea
				id="outcome2"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome2}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome3" class="block text-lg mb-2">outcome 3</label>
			<textarea
				id="outcome3"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome3}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome4" class="block text-lg mb-2">outcome 4</label>
			<textarea
				id="outcome4"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome4}
			></textarea>
		</div>
		<!-- Button to submit the form and emit the betRequestCreated event -->
		<div class="flex justify-center">
			<button class="{appBorder} p-5 bg-secondary1 rounded-lg" on:click={handleSubmit}
				>create bet request</button
			>
		</div>
	</div>
</main>

<style lang="postcss">
</style>
