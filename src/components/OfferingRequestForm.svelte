<script lang="ts">
	import YourDatePickerComponent from '../components/calendar.svelte';
	import '../app.css';
	import { createEventDispatcher } from 'svelte';
	import { appBorder } from '$lib/util';
	import { offeringCreateValidation } from '$lib/shared/validators';
	import { post } from '$lib/api';

	let eventDescription = '';
	let outcome1 = '';
	let outcome2 = '';
	let outcome3 = '';
	let outcome4 = '';
	let startDate = '';
	let endDate = '';

	let eventDescriptionError = '';
	let outcome1Error = '';
	let outcome2Error = '';
	let outcome3Error = '';
	let outcome4Error = '';
	let startDateError = '';
	let endDateError = '';

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		const betRequest = {
			event_description: eventDescription,
			outcomes: [outcome1, outcome2, outcome3, outcome4],
			startDate,
			endDate
		};
		const validationResult = offeringCreateValidation.safeParse(betRequest);
		console.log(betRequest);
		if (!validationResult.success) {
			// Display validation errors
			const validationErrors = validationResult.error.flatten();
			endDateError = validationErrors.fieldErrors.endDate?.[0] ?? '';
			startDateError = validationErrors.fieldErrors.startDate?.[0] ?? '';
			eventDescriptionError = validationErrors.fieldErrors.event_description?.[0] ?? '';
			outcome1Error = validationErrors.fieldErrors.outcomes?.[0] ?? '';
			outcome2Error = validationErrors.fieldErrors.outcomes?.[0] ?? '';
			outcome3Error = validationErrors.fieldErrors.outcomes?.[0] ?? '';
			outcome4Error = validationErrors.fieldErrors.outcomes?.[0] ?? '';
		} else {
			// Reset error messages
			resetErrors();
			// post('');
			// Emit the betRequestCreated event with the created object
			// submitOfferingRequest(betRequest);
			// Clear the form fields
			resetForm();
		}
	}

	const submitOfferingRequest = () => {};

	function resetForm() {
		eventDescription = '';
		outcome1 = '';
		outcome2 = '';
		outcome3 = '';
		outcome4 = '';
		startDate = '';
		endDate = '';
	}

	function resetErrors() {
		eventDescriptionError = '';
		outcome1Error = '';
		outcome2Error = '';
		outcome3Error = '';
		outcome4Error = '';
		startDateError = '';
		endDateError = '';
	}
</script>

<main class="w-3/5 mx-auto text-primet">
	<h1 class="text-xl mb-10 text-center">submit a bet</h1>

	<YourDatePickerComponent
		label={'start date'}
		errorMessage={startDateError}
		on:dateSelected={function handleDateSelected(event) {
			const selectedDate = event.detail.date;
			console.log('Selected Date:', selectedDate);
			startDate = selectedDate;
		}}
	/>
	<YourDatePickerComponent
		errorMessage={endDateError}
		label={'end date'}
		on:dateSelected={function handleDateSelected(event) {
			const selectedDate = event.detail.date;
			console.log('Selected Date:', selectedDate);
			endDate = selectedDate;
		}}
	/>
	<div>
		<div class="mb-10">
			<label for="eventDescription" class="block text-lg mb-2">
				event description *
				{#if eventDescriptionError}
					<span class="ml-2 mb-2 text-red-500 text-xs"> {eventDescriptionError}</span>
				{/if}
			</label>
			<textarea
				id="eventDescription"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder} {eventDescriptionError
					? 'border-red-500'
					: ''}"
				bind:value={eventDescription}
			></textarea>
		</div>
		<div class="mb-10">
			<label for="outcome1" class="block text-lg mb-2">
				outcome 1 *
				{#if outcome1Error}
					<span class="ml-2 mb-2 text-red-500 text-xs"> {outcome1Error}</span>
				{/if}
			</label>
			<textarea
				id="outcome1"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome1}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome2" class="block text-lg mb-2">
				outcome 2 *
				{#if outcome2Error}
					<span class="ml-2 mb-2 text-red-500 text-xs"> {outcome2Error}</span>
				{/if}
			</label>
			<textarea
				id="outcome2"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome2}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome3" class="block text-lg mb-2">
				outcome 3
				{#if outcome3Error}
					<span class="ml-2 mb-2 text-red-500 text-xs">* {outcome3Error}</span>
				{/if}
			</label>
			<textarea
				id="outcome3"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome3}
			></textarea>
		</div>

		<div class="mb-10">
			<label for="outcome4" class="block text-lg mb-2"
				>outcome 4
				{#if outcome4Error}
					<span class="ml-2 mb-2 text-red-500 text-xs">* {outcome4Error}</span>
				{/if}
			</label>
			<textarea
				id="outcome4"
				class="w-full p-2 border rounded-md bg-secondary1 {appBorder}"
				bind:value={outcome4}
			></textarea>
		</div>

		<!-- Add similar error handling for other fields -->

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
