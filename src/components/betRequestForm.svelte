<script>
	import YourDatePickerComponent from '../components/calendar.svelte';
	import '../app.css';
	import { createEventDispatcher } from 'svelte';

	let greeting = '';
	let eventDescription = '';
	let outcome1 = '';
	let outcome2 = '';
	let outcome3 = '';
	let outcome4 = '';
	let explainer = '';

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		// Create an object with the entered values
		const betRequest = {
			greeting,
			event_description: eventDescription,
			outcomes: [outcome1, outcome2, outcome3, outcome4],
			explainer
		};

		// Emit the betRequestCreated event with the created object
		dispatch('betRequestCreated', betRequest);

		// Clear the form fields
		resetForm();
	}

	function resetForm() {
		greeting = '';
		eventDescription = '';
		outcome1 = '';
		outcome2 = '';
		outcome3 = '';
		outcome4 = '';
		explainer = '';
	}
</script>

<main class="modal p-4 max-w-md mx-auto rounded-md shadow-md text-primet">
	<h1 class="text-xl font-bold mb-4 text-center">Submit a bet</h1>

	<YourDatePickerComponent
		on:dateSelected={function handleDateSelected(event) {
			const selectedDate = event.detail.date;
			console.log('Selected Date:', selectedDate);
			// Do something with the selected date
		}}
	/>
	<div>
		<!-- Text boxes for bet request properties -->
		<div class="mb-3">
			<label for="greeting" class="block font-semibold">Greeting:</label>
			<textarea
				id="greeting"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={greeting}
			></textarea>
		</div>

		<div class="mb-3">
			<label for="eventDescription" class="block font-semibold">Event Description:</label>
			<textarea
				id="eventDescription"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={eventDescription}
			></textarea>
		</div>

		<div class="mb-3">
			<label for="outcome1" class="block font-semibold">Outcome 1:</label>
			<textarea
				id="outcome1"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={outcome1}
			></textarea>
		</div>

		<div class="mb-3">
			<label for="outcome2" class="block font-semibold">Outcome 2:</label>
			<textarea
				id="outcome2"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={outcome2}
			></textarea>
		</div>

		<div class="mb-3">
			<label for="outcome3" class="block font-semibold">Outcome 3:</label>
			<textarea
				id="outcome3"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={outcome3}
			></textarea>
		</div>

		<div class="mb-3">
			<label for="outcome4" class="block font-semibold">Outcome 4:</label>
			<textarea
				id="outcome4"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={outcome4}
			></textarea>
		</div>
		<div class="mb-3">
			<label for="explainer" class="block font-semibold">Explainer:</label>
			<textarea
				id="explainer"
				class="w-full p-2 border rounded-md bg-secondary1"
				bind:value={explainer}
			></textarea>
		</div>
		<!-- Button to submit the form and emit the betRequestCreated event -->
		<div class="flex justify-center">
			<button class="p-2 hover:bg-secondary1" on:click={handleSubmit}>Create Bet Request</button>
		</div>
	</div>
</main>

<style lang="postcss">
	textarea {
	}

	button {
	}
	.modal {
	}
</style>
