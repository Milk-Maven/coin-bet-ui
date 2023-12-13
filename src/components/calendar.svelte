<!-- src/components/YourDatePickerComponent.svelte -->
<script lang="ts">
	import { appBorder } from '$lib/util';
	import { onMount, createEventDispatcher } from 'svelte';

	interface DateParams {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		timeZone: string;
	}

	let selectedDateString: string;
	let selectedDate: Date;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const currentDate = new Date();
		selectedDateString = createDateObject({
			year: currentDate.getFullYear(),
			month: currentDate.getMonth() + 1, // Months are zero-indexed
			day: currentDate.getDate(),
			hour: currentDate.getHours(),
			minute: currentDate.getMinutes(),
			timeZone: '-06:00' // Central Time (UTC-6:00)
		})
			.toISOString()
			.slice(0, -8);
	});

	function createDateObject(dateParams: DateParams): Date {
		const { year, month, day, hour, minute, timeZone } = dateParams;
		const dateString = `${year}-${month}-${day}T${hour}:${minute}:00.000${timeZone}`;
		return new Date(dateString);
	}

	function handleDateChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		selectedDateString = inputElement.value;

		// Parse the selected date string and update the state
		selectedDate = new Date(selectedDateString);

		// Emit the dateSelected event with the selected date
		dispatch('dateSelected', { date: selectedDate });
	}
</script>

<main class="w-full">
	<h1>Date Picker Component</h1>

	<!-- Custom date picker input -->
	<label for="datepicker" class="block font-semibold mb-2">Select a date:</label>
	<input
		type="datetime-local"
		id="datepicker"
		class="p-4 w-full border bg-secondary1 {appBorder}"
		on:input={handleDateChange}
	/>

	<!-- Display the selected date -->
	{#if selectedDate}
		<p>Selected Date: {selectedDate.toString()}</p>
	{/if}
</main>

<style lang="postcss">
	button {
		background: #cd7f32; /* Bronze Color for Submit Button */
		color: #fff8dc;
	}
	.modal {
		background: #8b4513; /* Grayish Dialog Background */
		/* Add additional styling for padding, border-radius, etc. */
	}
</style>
