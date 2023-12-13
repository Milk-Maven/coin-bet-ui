<!-- src/components/YourDatePickerComponent.svelte -->
<script lang="ts">
	import { appBorder } from '$lib/util';
	import { onMount, createEventDispatcher } from 'svelte';
	export let label: string;

	interface DateParams {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		timeZone: number;
	}

	let selectedDateString: string;
	let selectedDate: Date;

	const dispatch = createEventDispatcher();

	const createDateObject = ({ year, month, day, hour, minute, timeZone }: DateParams): Date => {
		const date = new Date();
		date.setFullYear(year);
		date.setMonth(month - 1); // Months are zero-indexed
		date.setDate(day);
		date.setHours(hour);
		date.setMinutes(minute);
		// Set time zone offset
		date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + timeZone * 60);
		return date;
	};

	onMount(() => {
		const currentDate = new Date();
		selectedDateString = createDateObject({
			year: currentDate.getFullYear(),
			month: currentDate.getMonth() + 1, // Months are zero-indexed
			day: currentDate.getDate(),
			hour: currentDate.getHours(),
			minute: currentDate.getMinutes(),
			timeZone: -6 // Central Time (UTC-6:00)
		})
			.toISOString()
			.slice(0, -8);
	});

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
	<!-- Custom date picker input -->
	<label for="datepicker" class="block mb-2 text-lg">{label}</label>
	<input
		type="datetime-local"
		id="datepicker"
		class="p-4 w-full border bg-secondary1 {appBorder} "
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
